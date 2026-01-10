import sharp from 'sharp';
import { readdir, unlink, rename } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const assetsDir = join(__dirname, 'src', 'assets');
const tempDir = join(__dirname, 'temp-fixed-images');
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

async function fixImages() {
  try {
    // Create temp directory
    const { mkdir } = await import('fs/promises');
    try {
      await mkdir(tempDir, { recursive: true });
    } catch {}
    
    const files = await readdir(assetsDir);
    
    console.log(`\nFound ${files.length} files in assets folder\n`);
    
    const processed = [];
    
    for (const file of files) {
      const ext = extname(file).toLowerCase();
      
      if (imageExtensions.includes(ext)) {
        const filePath = join(assetsDir, file);
        const tempPath = join(tempDir, file);
        console.log(`Processing: ${file}...`);
        
        try {
          // Read the image and automatically rotate based on EXIF
          const image = sharp(filePath, { failOnError: false });
          
          // Get image format
          const metadata = await image.metadata();
          
          // Process based on format
          if (ext === '.png' || ext === '.webp') {
            await image
              .rotate() // Auto-rotates based on EXIF orientation
              .png({ quality: 95 })
              .toFile(tempPath);
          } else {
            await image
              .rotate() // Auto-rotates based on EXIF orientation
              .jpeg({ quality: 95 })
              .toFile(tempPath);
          }
          
          processed.push({ file, filePath, tempPath });
          console.log(`✓ Fixed: ${file}`);
        } catch (err) {
          console.error(`✗ Error processing ${file}:`, err.message);
        }
      }
    }
    
    // Now replace original files
    console.log('\nReplacing original files...\n');
    for (const { file, filePath, tempPath } of processed) {
      try {
        await unlink(filePath);
        await rename(tempPath, filePath);
        console.log(`✓ Replaced: ${file}`);
      } catch (err) {
        console.error(`✗ Error replacing ${file}:`, err.message);
      }
    }
    
    // Clean up temp directory
    try {
      const { rmdir } = await import('fs/promises');
      await rmdir(tempDir, { recursive: true });
    } catch {}
    
    console.log('\n✓ All images processed!\n');
    console.log('Please commit and deploy the changes.\n');
  } catch (error) {
    console.error('Error:', error);
  }
}

fixImages();
