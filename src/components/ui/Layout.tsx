// Layout.tsx
import React, { useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";

interface LayoutProps {
  children: ReactNode;
  showFooter?: ReactNode; // optional footer
}


const Layout: React.FC<LayoutProps> = ({ children, showFooter = true }) => {

      const [email, setEmail] = useState('');
    
      const handleSubmit = () => {
        if (email) {
          alert('Thank you for joining the waitlist!');
          setEmail('');
        }
      };
      
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#f5f1ea] flex flex-col">
      {/* Header */}
      <header className="bg-[#3d3428] py-5 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div onClick={() => navigate("/home")} className="cursor-pointer">
            <img src={Logo} className="w-[200px]" alt="logo" />
          </div>
          <nav className="flex gap-8 text-[#f5f1ea] text-sm">
            <a href="#" className="hover:text-[#c9b896] transition">PROJECTS</a>
            <a href="#" className="hover:text-[#c9b896] transition">SHOP</a>
            <a href="/service" className="hover:text-[#c9b896] transition">SERVICES</a>
            <a href="/about" className="hover:text-[#c9b896] transition">ABOUT</a>
            <a href="#" className="hover:text-[#c9b896] transition">INQUIRE</a>
            <a href="#" className="hover:text-[#c9b896] transition">BLOG</a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Optional Footer */}
      {showFooter && (
        <>

              {/* Join the Waitlist */}
              <section className="bg-[#2d2418] py-20 px-4">
                <div className="max-w-2xl mx-auto text-center">
                  <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
                    Join the waitlist
                  </h2>
                  <p className="text-gray-400 mb-8">
                    Shop <span className="italic">Africandi</span> Pre-launch Products
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="flex-1 px-6 py-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#d4c5a9] transition"
                    />
                    <button
                      onClick={handleSubmit}
                      className="px-8 py-3 bg-[#d4c5a9] text-[#3d3428] rounded font-medium hover:bg-[#c4b599] transition"
                    >
                      JOIN
                    </button>
                  </div>
                </div>
              </section>
        
        


              {/* Get In Touch */}
      <section className="bg-[#3d3428] py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-5xl md:text-6xl font-serif mb-8">
              LET'S<br />GET IN<br />TOUCH
            </h2>
          </div>
          <div className="text-white">
            <h3 className="text-2xl font-serif mb-4">
              Let's Create a Space That<br />Feels Like <span className="italic">You</span>
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our design team brings honesty, artistry and cultural sensitivity 
              to every project. Whether you're furnishing one room or building 
              from the ground up, we'll help you create an Africandi-inspired 
              home rooted in meaning and warmth.
            </p>
            <button className="px-8 py-3 border border-[#d4c5a9] text-[#d4c5a9] rounded hover:bg-[#d4c5a9] hover:text-[#3d3428] transition">
              GET IN TOUCH →
            </button>
          </div>
        </div>
      </section>
      
      <footer className="bg-[#2d2418] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#d4c5a9] rounded-full"></div>
              <span className="font-serif text-xl">IMA & CO.</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Rooted in African artistry and Scandinavian simplicity. 
              Crafted for those who want more from their spaces.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">f</a>
              <a href="#" className="text-gray-400 hover:text-white transition">in</a>
              <a href="#" className="text-gray-400 hover:text-white transition">ig</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Products</a></li>
              <li><a href="#" className="hover:text-white transition">Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition">Returns</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>123 Design Street</li>
              <li>Lagos, Nigeria</li>
              <li>hello@imaandco.com</li>
              <li>+234 xxx xxx xxxx</li>
            </ul>
          </div>
        </div>
      </footer>
        
        </>
      )}
    </div>
  );
};

export default Layout;
