
import Layout from './ui/Layout';
import HeroImg from '../assets/heroImg.jpg';
import kitImg from '../assets/chaira.png';
import iconImg from '../assets/iconImg.png';

const AfricandiLanding = () => {


  return (
    <Layout >


      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-300">
          {/* Replace with: <img src="./assets/hero-living-room.jpg" className="w-full h-full object-cover" /> */}
          <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-gray-600">
            <img
            src={HeroImg}
            alt="Africandi Collection"
            className="absolute inset-0 w-full h-full object-cover"
          />
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
      <section className="py-20 px-4 bg-[#f5f1ea] ">
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
<section className="py-0">
  <div className="w-full">
    <img
      src={kitImg}
      alt="Africandi Kitchen"
      className="w-full h-[60rem] object-cover"
      loading="lazy"
    />
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
            <div
  key={index}
  className="bg-[#E3D8C2] p-6 rounded-lg border border-[#d4c5a9]/20 
             hover:border-[#d4c5a9]/50 transform hover:scale-110 
             transition-all duration-300 cursor-pointer"
>

                <div className="w-full h-32  rounded mb-4 flex items-center justify-center text-gray-400 text-sm">
                  {/* Replace with card icons/images */}
                 <img
      src={iconImg}
      alt="Africandi Kitchen"
      className="w-full object-cover"
      loading="lazy"
    />
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