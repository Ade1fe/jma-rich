// import React, { useState } from 'react';

// const AfricandiLanding = () => {
//   const [email, setEmail] = useState('');

//   const handleSubmit = () => {
//     if (email) {
//       alert('Thank you for joining the waitlist!');
//       setEmail('');
//     }
//   };

//   return (
//     <div className="bg-white">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-[#3d3428]/95 backdrop-blur-sm z-50 px-8 py-4">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <div className="w-8 h-8 bg-[#d4c5a9] rounded-full"></div>
//             <span className="text-white font-serif text-xl">IMA & CO.</span>
//           </div>
//           <div className="hidden md:flex space-x-8 text-white text-sm">
//             <a href="#" className="hover:text-[#d4c5a9] transition">PRODUCTS</a>
//             <a href="#" className="hover:text-[#d4c5a9] transition">SHOP</a>
//             <a href="#" className="hover:text-[#d4c5a9] transition">SERVICES</a>
//             <a href="/about" className="hover:text-[#d4c5a9] transition">ABOUT</a>
//             <a href="#" className="hover:text-[#d4c5a9] transition">INQUIRE</a>
//             <a href="#" className="hover:text-[#d4c5a9] transition">BLOG</a>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center">
//         <div className="absolute inset-0 bg-gray-300">
//           {/* Replace with: <img src="./assets/hero-living-room.jpg" className="w-full h-full object-cover" /> */}
//           <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-gray-600">
//             [Hero Image - Living Room]
//           </div>
//         </div>
//         <div className="relative z-10 text-center text-white px-4">
//           <h1 className="text-5xl md:text-7xl font-serif mb-6">
//             Introducing <span className="italic">Africandi</span>
//           </h1>
//           <p className="text-lg md:text-xl mb-2">
//             A design philosophy merging <span className="italic">African</span> craftsmanship with
//           </p>
//           <p className="text-lg md:text-xl mb-8">
//             <span className="italic">Scandinavian</span> warmth and simplicity.
//           </p>
//           <p className="text-sm opacity-90">
//             Celebrating our Scandiwish, Playable, Ideal, Well
//           </p>
//           <div className="mt-12">
//             <a href="#" className="text-sm text-white/80 hover:text-white transition">
//               • Antique Pre-war Luxury Modernist
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Elevated Design Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-serif mb-4">
//             Elevated Design Rooted in
//           </h2>
//           <h3 className="text-4xl md:text-5xl font-serif italic mb-8">
//             Culture and Simplicity
//           </h3>
//           <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
//             Africandi merges earthy textures, handcrafted artistry, and modern design to create 
//             homes that feel rooted, warm, and effortless.
//           </p>
//         </div>
//       </section>

//       {/* Kitchen Image Section */}
//       <section className="py-12">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="bg-gray-300 h-96 md:h-[600px] rounded-lg flex items-center justify-center text-gray-600">
//             {/* Replace with: <img src="./assets/kitchen-1.jpg" className="w-full h-full object-cover rounded-lg" /> */}
//             [Kitchen Image 1]
//           </div>
//         </div>
//       </section>

//       {/* For Those Who Want Spaces */}
//       <section className="bg-[#3d3428] text-white py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 mb-16">
//             <div>
//               <h2 className="text-3xl md:text-4xl font-serif mb-6">
//                 For Those Who Want Spaces<br />That Feel Meaningful
//               </h2>
//             </div>
//             <div className="flex items-center">
//               <p className="text-gray-300 leading-relaxed">
//                 If you're drawn to minimalism, but crave depth, warmth, and 
//                 cultural connection — Africandi was created for you.
//               </p>
//             </div>
//           </div>

//           {/* Cards */}
//           <div className="grid md:grid-cols-4 gap-6">
//             {[
//               {
//                 title: 'The Conscious Collector',
//                 description: 'For those who value sourcing, sustainability, and stories behind each piece.'
//               },
//               {
//                 title: 'The Modern Minimalist',
//                 description: 'For those who love clean lines, functional design, and thoughtful restraint.'
//               },
//               {
//                 title: 'The Culture-Inspired Maximalist',
//                 description: 'For those who want richness, texture, and layers of meaning in every room.'
//               },
//               {
//                 title: 'The Warmth Seeker',
//                 description: 'For those who want homes that feel like a hug — not a showroom.'
//               }
//             ].map((card, index) => (
//               <div key={index} className="bg-[#2d2418] p-6 rounded-lg border border-[#d4c5a9]/20 hover:border-[#d4c5a9]/50 transition">
//                 <div className="w-full h-32 bg-gray-600 rounded mb-4 flex items-center justify-center text-gray-400 text-sm">
//                   {/* Replace with card icons/images */}
//                   [Icon {index + 1}]
//                 </div>
//                 <h3 className="text-lg font-serif mb-3">{card.title}</h3>
//                 <p className="text-sm text-gray-400 leading-relaxed">{card.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Kitchen Image Section 2 */}
//       <section className="py-12">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="bg-gray-300 h-96 md:h-[600px] rounded-lg flex items-center justify-center text-gray-600">
//             {/* Replace with: <img src="./assets/kitchen-2.jpg" className="w-full h-full object-cover rounded-lg" /> */}
//             [Kitchen Image 2]
//           </div>
//         </div>
//       </section>

//       {/* Video Section */}
//       <section className="bg-[#3d3428] py-20">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <button className="w-20 h-20 rounded-full border-2 border-white/50 flex items-center justify-center mx-auto hover:border-white transition group">
//             <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1 group-hover:scale-110 transition"></div>
//           </button>
//         </div>
//       </section>

//       {/* Join the Waitlist */}
//       <section className="bg-[#2d2418] py-20 px-4">
//         <div className="max-w-2xl mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
//             Join the waitlist
//           </h2>
//           <p className="text-gray-400 mb-8">
//             Shop <span className="italic">Africandi</span> Pre-launch Products
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Your email"
//               className="flex-1 px-6 py-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#d4c5a9] transition"
//             />
//             <button
//               onClick={handleSubmit}
//               className="px-8 py-3 bg-[#d4c5a9] text-[#3d3428] rounded font-medium hover:bg-[#c4b599] transition"
//             >
//               JOIN
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Get In Touch */}
//       <section className="bg-[#3d3428] py-20 px-4">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <div className="text-white">
//             <h2 className="text-5xl md:text-6xl font-serif mb-8">
//               LET'S<br />GET IN<br />TOUCH
//             </h2>
//           </div>
//           <div className="text-white">
//             <h3 className="text-2xl font-serif mb-4">
//               Let's Create a Space That<br />Feels Like <span className="italic">You</span>
//             </h3>
//             <p className="text-gray-400 mb-8 leading-relaxed">
//               Our design team brings honesty, artistry and cultural sensitivity 
//               to every project. Whether you're furnishing one room or building 
//               from the ground up, we'll help you create an Africandi-inspired 
//               home rooted in meaning and warmth.
//             </p>
//             <button className="px-8 py-3 border border-[#d4c5a9] text-[#d4c5a9] rounded hover:bg-[#d4c5a9] hover:text-[#3d3428] transition">
//               GET IN TOUCH →
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#2d2418] text-white py-12 px-4">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
//           <div>
//             <div className="flex items-center space-x-2 mb-4">
//               <div className="w-8 h-8 bg-[#d4c5a9] rounded-full"></div>
//               <span className="font-serif text-xl">IMA & CO.</span>
//             </div>
//             <p className="text-sm text-gray-400 mb-4">
//               Rooted in African artistry and Scandinavian simplicity. 
//               Crafted for those who want more from their spaces.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-white transition">f</a>
//               <a href="#" className="text-gray-400 hover:text-white transition">in</a>
//               <a href="#" className="text-gray-400 hover:text-white transition">ig</a>
//             </div>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-4">Quick links</h4>
//             <ul className="space-y-2 text-sm text-gray-400">
//               <li><a href="#" className="hover:text-white transition">Home</a></li>
//               <li><a href="#" className="hover:text-white transition">About</a></li>
//               <li><a href="#" className="hover:text-white transition">Products</a></li>
//               <li><a href="#" className="hover:text-white transition">Services</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-4">Support</h4>
//             <ul className="space-y-2 text-sm text-gray-400">
//               <li><a href="#" className="hover:text-white transition">FAQ</a></li>
//               <li><a href="#" className="hover:text-white transition">Shipping</a></li>
//               <li><a href="#" className="hover:text-white transition">Returns</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-4">Contact</h4>
//             <ul className="space-y-2 text-sm text-gray-400">
//               <li>123 Design Street</li>
//               <li>Lagos, Nigeria</li>
//               <li>hello@imaandco.com</li>
//               <li>+234 xxx xxx xxxx</li>
//             </ul>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default AfricandiLanding;








import Layout from './ui/Layout';

const AfricandiLanding = () => {


  return (
    <Layout >


      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-300">
          {/* Replace with: <img src="./assets/hero-living-room.jpg" className="w-full h-full object-cover" /> */}
          <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-gray-600">
            [Hero Image - Living Room]
          </div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            Introducing <span className="italic">Africandi</span>
          </h1>
          <p className="text-lg md:text-xl mb-2">
            A design philosophy merging <span className="italic">African</span> craftsmanship with
          </p>
          <p className="text-lg md:text-xl mb-8">
            <span className="italic">Scandinavian</span> warmth and simplicity.
          </p>
          <p className="text-sm opacity-90">
            Celebrating our Scandiwish, Playable, Ideal, Well
          </p>
          <div className="mt-12">
            <a href="#" className="text-sm text-white/80 hover:text-white transition">
              • Antique Pre-war Luxury Modernist
            </a>
          </div>
        </div>
      </section>

      {/* Elevated Design Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Elevated Design Rooted in
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif italic mb-8">
            Culture and Simplicity
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Africandi merges earthy textures, handcrafted artistry, and modern design to create 
            homes that feel rooted, warm, and effortless.
          </p>
        </div>
      </section>

      {/* Kitchen Image Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gray-300 h-96 md:h-[600px] rounded-lg flex items-center justify-center text-gray-600">
            {/* Replace with: <img src="./assets/kitchen-1.jpg" className="w-full h-full object-cover rounded-lg" /> */}
            [Kitchen Image 1]
          </div>
        </div>
      </section>

      {/* For Those Who Want Spaces */}
      <section className="bg-[#3d3428] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                For Those Who Want Spaces<br />That Feel Meaningful
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-gray-300 leading-relaxed">
                If you're drawn to minimalism, but crave depth, warmth, and 
                cultural connection — Africandi was created for you.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: 'The Conscious Collector',
                description: 'For those who value sourcing, sustainability, and stories behind each piece.'
              },
              {
                title: 'The Modern Minimalist',
                description: 'For those who love clean lines, functional design, and thoughtful restraint.'
              },
              {
                title: 'The Culture-Inspired Maximalist',
                description: 'For those who want richness, texture, and layers of meaning in every room.'
              },
              {
                title: 'The Warmth Seeker',
                description: 'For those who want homes that feel like a hug — not a showroom.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-[#2d2418] p-6 rounded-lg border border-[#d4c5a9]/20 hover:border-[#d4c5a9]/50 transition">
                <div className="w-full h-32 bg-gray-600 rounded mb-4 flex items-center justify-center text-gray-400 text-sm">
                  {/* Replace with card icons/images */}
                  [Icon {index + 1}]
                </div>
                <h3 className="text-lg font-serif mb-3">{card.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen Image Section 2 */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gray-300 h-96 md:h-[600px] rounded-lg flex items-center justify-center text-gray-600">
            {/* Replace with: <img src="./assets/kitchen-2.jpg" className="w-full h-full object-cover rounded-lg" /> */}
            [Kitchen Image 2]
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-[#3d3428] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <button className="w-20 h-20 rounded-full border-2 border-white/50 flex items-center justify-center mx-auto hover:border-white transition group">
            <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1 group-hover:scale-110 transition"></div>
          </button>
        </div>
      </section>



    </Layout>
  );
};

export default AfricandiLanding;