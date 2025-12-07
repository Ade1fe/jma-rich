// import React, { useState } from 'react';
// import iImage from '../assets/sidep.png';

// const IModal: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = () => {
//     console.log('Form submitted:', formData);
//     alert('Thank you for joining our village!');
//     setIsOpen(false);
//   };

//   if (!isOpen) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <button
//           onClick={() => setIsOpen(true)}
//           className="px-6 py-3 bg-[#3d3428] text-white rounded-md hover:bg-[#2d2418] transition"
//         >
//           Open Modal
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//       <div className="relative w-full max-w-5xl bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] animate-fadeIn">

//         {/* Close button */}
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-6 right-6 z-10 w-10 h-10 bg-[#3d3428]/80 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-[#2d2418] transition"
//         >
//           X
//         </button>

//         {/* Left Side Form */}
//         <div className="w-full md:w-1/2 bg-black/40 backdrop-blur-lg p-12 flex flex-col justify-center border-r border-white/10">
//           <div className="max-w-md">
//             <h1 className="text-4xl md:text-5xl font-serif text-white mb-3 leading-tight">
//               Trek through our<br />
//               <span className="italic">Africandi Collection</span>
//             </h1>

//             <p className="text-white text-sm mb-10 opacity-90">
//               Join the list of early access to limited Africandi releases in 2026!
//             </p>

//             <div className="space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Please enter your name"
//                 className="w-full px-6 py-4 bg-white/10 border border-white/30 rounded-md text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/60 transition"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Please enter your email address"
//                 className="w-full px-6 py-4 bg-white/10 border border-white/30 rounded-md text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/60 transition"
//               />

//               <button
//                 onClick={handleSubmit}
//                 className="w-full py-4 bg-[#d4c5a9] text-[#3d3428] rounded-md font-medium text-sm tracking-wider hover:bg-[#c4b599] transition uppercase"
//               >
//                 JOIN OUR VILLAGE
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-0 overflow-hidden">
//           <img
//             src={iImage}
//             alt="Africandi Collection"
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//         </div>

//       </div>
//     </div>
//   );
// };

// // Tailwind animation
// export default IModal;



import React, { useState } from 'react';
import iImage from '../assets/sidep.png';
import Input from './ui/Input';

const IModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for joining our village!');
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <div className="">
        {/* <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-[#3d3428] text-white rounded-md hover:bg-[#2d2418] transition"
        >
          Open Modal
        </button> */}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="relative w-full max-w-5xl bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] animate-fadeIn">

        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-[#3d3428]/80 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-[#2d2418] transition"
        >
          X
        </button>

        {/* Left Side Form */}
        <div className="w-full md:w-1/2 bg-[#362D26] backdrop-blur-lg p-12 flex flex-col justify-center border-r border-white/10">
          <div className="max-w-md">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-3 leading-tight">
              Trek through our<br />
              <span className="italic">Africandi Collection</span>
            </h1>

            <p className="text-white text-sm mb-10 opacity-90">
              Join the list of early access to limited Africandi releases in 2026!
            </p>

            <div className="space-y-4">
              <Input
                type="text"
                name="name"
                value={formData.name}
                
                onChange={handleChange}
                placeholder="Please enter your name"
                className="w-full px-6 py-4 bg-white/10 border border-white/30 rounded-md text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/60 transition" label={''}              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Please enter your email address"
                className="w-full px-6 py-4 bg-white/10 border border-white/30 rounded-md text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/60 transition"
              />

              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-[#d4c5a9] text-[#3d3428] rounded-md font-medium text-sm tracking-wider hover:bg-[#c4b599] transition uppercase"
              >
                JOIN OUR VILLAGE
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-0 overflow-hidden">
          <img
            src={iImage}
            alt="Africandi Collection"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default IModal;