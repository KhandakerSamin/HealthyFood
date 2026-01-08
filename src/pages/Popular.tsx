// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Star, Heart, ArrowRight, Quote } from 'lucide-react';
// import dishHilsa from '@/assets/dish-hilsa.jpg';
// import dishBiryani from '@/assets/dish-biryani.jpg';
// import dishDuck from '@/assets/dish-duck.jpg';
// import dishSamosa from '@/assets/dish-samosa.jpg';
// import dishKhichuri from '@/assets/dish-khichuri.jpg';

// const popularDishes = [
//   {
//     id: 1,
//     image: dishHilsa,
//     name: 'Shorisha Ilish',
//     desc: 'Hilsa fish marinated in mustard paste, slow-cooked to perfection',
//     price: '৳650',
//     rating: 4.9,
//     reviews: 156,
//     loveFact: 'Our signature dish - the mustard seeds are hand-ground fresh every morning',
//     testimonial: {
//       text: 'The best Ilish I\'ve ever tasted outside of my grandmother\'s kitchen.',
//       author: 'Fatima R.'
//     }
//   },
//   {
//     id: 2,
//     image: dishBiryani,
//     name: 'Mutton Biryani',
//     desc: 'Fragrant basmati rice layered with tender mutton and saffron',
//     price: '৳420',
//     rating: 4.8,
//     reviews: 234,
//     loveFact: 'Slow-cooked for 4 hours using traditional dum technique',
//     testimonial: {
//       text: 'Every grain of rice carries the story of old Dhaka. Simply magnificent.',
//       author: 'Karim S.'
//     }
//   },
//   {
//     id: 3,
//     image: dishDuck,
//     name: 'Duck Curry',
//     desc: 'Free-range duck cooked in aromatic Bengali spices',
//     price: '৳750',
//     rating: 4.9,
//     reviews: 89,
//     loveFact: 'A recipe passed down through three generations of our family',
//     testimonial: {
//       text: 'Rich, authentic, and absolutely unforgettable. A must-try!',
//       author: 'Anwar H.'
//     }
//   },
//   {
//     id: 4,
//     image: dishSamosa,
//     name: 'Keema Samosa',
//     desc: 'Crispy pastry filled with spiced minced meat',
//     price: '৳80',
//     rating: 4.7,
//     reviews: 312,
//     loveFact: 'Each samosa is hand-folded and fried to golden perfection',
//     testimonial: {
//       text: 'Perfect crunch, perfect filling. I order these every visit.',
//       author: 'Nadia M.'
//     }
//   },
//   {
//     id: 5,
//     image: dishKhichuri,
//     name: 'Bhuna Khichuri',
//     desc: 'Comfort food at its finest - rice and lentils with aromatic spices',
//     price: '৳280',
//     rating: 4.8,
//     reviews: 178,
//     loveFact: 'Served with our famous beef rezala and begun bhaja',
//     testimonial: {
//       text: 'Tastes exactly like home. Pure comfort in every bite.',
//       author: 'Rashid K.'
//     }
//   },
// ];

// const Popular = () => {
//   return (
//     <main className="min-h-screen bg-background">
//       {/* Hero Section */}
//       <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-ocean-deep overflow-hidden">
//         <div className="absolute inset-0 bg-bengali-pattern" />
//         <div className="absolute inset-0 bg-texture opacity-15" />
//         <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark/50 to-ocean-deep" />
        
//         <div className="elegant-container relative text-center">
//           <motion.span
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             className="inline-block font-display-alt text-sm uppercase tracking-[0.25em] text-gold mb-4"
//           >
//             ✦ Customer Favorites ✦
//           </motion.span>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground italic mb-4"
//           >
//             Popular Dishes
//           </motion.h1>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="divider-ornate max-w-[200px] mx-auto"
//           >
//             <span className="px-4 text-gold text-lg">❧</span>
//           </motion.div>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="font-body text-lg text-primary-foreground/70 mt-6 max-w-xl mx-auto"
//           >
//             Discover why our guests keep coming back for these beloved creations
//           </motion.p>
//         </div>
//       </section>

//       {/* Popular Dishes Grid */}
//       <section className="section-padding bg-food-pattern relative">
//         <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
//         <div className="elegant-container relative">
//           <div className="space-y-20">
//             {popularDishes.map((dish, index) => (
//               <motion.article
//                 key={dish.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.5 }}
//                 className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
//                   index % 2 === 1 ? 'lg:flex-row-reverse' : ''
//                 }`}
//               >
//                 {/* Image */}
//                 <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
//                   <div className="image-hover aspect-[4/3] rounded-sm overflow-hidden">
//                     <img 
//                       src={dish.image} 
//                       alt={dish.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="flex items-center gap-1 text-gold">
//                       <Star className="w-4 h-4 fill-current" />
//                       <span className="font-display text-lg">{dish.rating}</span>
//                     </div>
//                     <span className="font-body text-sm text-muted-foreground">
//                       ({dish.reviews} reviews)
//                     </span>
//                   </div>

//                   <h2 className="font-display text-3xl md:text-4xl text-ocean-deep italic mb-2">
//                     {dish.name}
//                   </h2>
//                   <p className="font-body text-lg text-muted-foreground mb-4">
//                     {dish.desc}
//                   </p>
//                   <span className="font-display text-2xl text-gold mb-6 block">
//                     {dish.price}
//                   </span>

//                   {/* Why customers love it */}
//                   <div className="flex items-start gap-3 mb-6 p-4 bg-ocean-pale/30 rounded-sm border-l-2 border-gold">
//                     <Heart className="w-5 h-5 text-gold shrink-0 mt-0.5" />
//                     <div>
//                       <span className="font-display text-sm uppercase tracking-wider text-ocean-deep block mb-1">
//                         Why Customers Love It
//                       </span>
//                       <p className="font-body text-sm text-muted-foreground">
//                         {dish.loveFact}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Testimonial */}
//                   <div className="flex items-start gap-3">
//                     <Quote className="w-5 h-5 text-gold/50 shrink-0" />
//                     <blockquote>
//                       <p className="font-body text-muted-foreground italic mb-2">
//                         "{dish.testimonial.text}"
//                       </p>
//                       <cite className="font-display-alt text-sm text-ocean-medium not-italic">
//                         — {dish.testimonial.author}
//                       </cite>
//                     </blockquote>
//                   </div>
//                 </div>
//               </motion.article>
//             ))}
//           </div>

//           {/* CTA */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-center mt-20 pt-12 border-t border-gold/20"
//           >
//             <p className="font-display text-2xl text-ocean-deep italic mb-6">
//               Ready to experience these flavors?
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link to="/menu" className="btn-elegant-outline">
//                 View Full Menu
//                 <ArrowRight className="w-4 h-4" />
//               </Link>
//               <Link to="/reservation" className="btn-gold">
//                 Reserve a Table
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Popular;
