// Layout.tsx
import React, { useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";

interface LayoutProps {
  children: ReactNode;
  showFooter?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, showFooter = true }) => {
  // const [email, setEmail] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  // const handleSubmit = () => {
  //   if (email) {
  //     alert("Thank you for joining the waitlist!");
  //     setEmail("");
  //   }
  // };

  return (
    <div className="min-h-screen bg-[#f5f1ea] flex flex-col">

      {/* ---------------- HEADER ---------------- */}
      <header className="bg-[#3d3428] py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* Logo */}
          <div onClick={() => navigate("/home")} className="cursor-pointer">
            <img src={Logo} className="w-32 md:w-48" alt="logo" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-[#f5f1ea] text-sm">
            <a href="#" className="hover:text-[#c9b896] transition">PROJECTS</a>
            <a href="#" className="hover:text-[#c9b896] transition">SHOP</a>
            <a href="/service" className="hover:text-[#c9b896] transition">SERVICES</a>
            <a href="/about" className="hover:text-[#c9b896] transition">ABOUT</a>
            <a href="/inquire" className="hover:text-[#c9b896] transition">INQUIRE</a>
            <a href="/blog" className="hover:text-[#c9b896] transition">BLOG</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 text-[#f5f1ea] text-sm pb-4">
            <a href="#" className="hover:text-[#c9b896] transition">PROJECTS</a>
            <a href="#" className="hover:text-[#c9b896] transition">SHOP</a>
            <a href="/service" className="hover:text-[#c9b896] transition">SERVICES</a>
            <a href="/about" className="hover:text-[#c9b896] transition">ABOUT</a>
            <a href="#" className="hover:text-[#c9b896] transition">INQUIRE</a>
            <a href="#" className="hover:text-[#c9b896] transition">BLOG</a>
          </nav>
        )}
      </header>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <main className="flex-1">{children}</main>

      {/* ---------------- FOOTER SECTION ---------------- */}
      {showFooter && (
        <>

          {/* Join the Waitlist */}
          {/* <section className="bg-[#2d2418] py-16 px-4 md:py-20">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
                Join the waitlist
              </h2>
              <p className="text-gray-400 mb-6 md:mb-8">
                Shop <span className="italic">Africandi</span> Pre-launch Products
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-6 py-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none"
                />

                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-[#d4c5a9] text-[#3d3428] rounded font-medium hover:bg-[#c4b599] transition"
                >
                  JOIN
                </button>
              </div>
            </div>
          </section> */}
 {/* // bg-[linear-gradient(90deg,#A6856C57_0%,#362D26_50%,#A6856C_100%)] */}

          <section className="w-full py-32 px-6 bg-[#2d2418] 
 
  text-[#FFFBF3]">

  <div className="max-w-4xl mx-auto text-center">

    {/* Heading */}
    <h2 className="text-4xl md:text-6xl font-serif mb-4">
      Join the waitlist
    </h2>

    {/* Subtext */}
    <p className="text-lg md:text-xl opacity-90 mb-12">
      Bring <span className="italic">Africandi</span> style home. Products
    </p>

    {/* Input + Button */}
    <div className="flex justify-center">
      <div className="flex items-center 
          w-full max-w-lg md:max-w-md 
          border border-[#CBBBA4] rounded-xl overflow-hidden">

        {/* Input */}
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 bg-transparent 
                     text-[#FFFBF3] placeholder-[#CBBBA4] text-sm
                     focus:outline-none"
        />

        {/* Button */}
        <button className="px-6 py-3 bg-[#F2E5C8] text-[#3A2A21]
                           text-[11px] md:text-xs uppercase tracking-wide
                           hover:bg-[#E8D7B6] transition">
          Join the village
        </button>

      </div>
    </div>

  </div>

</section>


          {/* Get In Touch */}
          <section className="bg-[#403F2B] py-16 px-4 md:py-20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

              <div className="text-white">
                <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                  LET'S<br />GET IN<br />TOUCH
                </h2>
              </div>

              <div className="text-white">
                <h3 className="text-xl md:text-2xl font-serif mb-4">
                  Let's Create a Space That<br />Feels Like <span className="italic">You</span>
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
                  Our design team brings honesty, artistry and cultural sensitivity to every project.
                  Whether you're furnishing one room or building from the ground up, we'll help you
                  create an Africandi-inspired home rooted in meaning and warmth.
                </p>
                <button className="px-8 py-3 border border-[#d4c5a9] text-[#d4c5a9] rounded hover:bg-[#d4c5a9] hover:text-[#3d3428] transition">
                  GET IN TOUCH →
                </button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-[#2d2418] text-white py-12 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

              {/* Brand */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <img src={Logo} className="w-32 md:w-48" alt="logo" />
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

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick links</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Home</a></li>
                  <li><a href="#" className="hover:text-white transition">About</a></li>
                  <li><a href="#" className="hover:text-white transition">Products</a></li>
                  <li><a href="#" className="hover:text-white transition">Services</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                  <li><a href="#" className="hover:text-white transition">Shipping</a></li>
                  <li><a href="#" className="hover:text-white transition">Returns</a></li>
                </ul>
              </div>

              {/* Contact */}
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
