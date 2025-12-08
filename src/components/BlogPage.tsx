
import Layout from './ui/Layout'
import boxImg from "../assets/image.png";

const BlogPage = () => {
  return (
    <Layout>

        <section className="bg-white py-24 px-6">

  {/* HEADER */}
  <div className="text-center mb-16">
    <h2 className="text-5xl md:text-6xl font-serif text-[#A6856C] tracking-wide">
      BLOG
    </h2>
    <h3 className="text-5xl md:text-6xl font-serif italic text-[#A6856C] mt-2">
      ARTICLES
    </h3>
    <p className='text-xl mt-2 max-w-xl mx-auto'>Stay informed and inspired with our blog, featuring insightful articles and updates on Afrocentric home decor topics </p>
  </div>

  

  {/* SEARCH BAR */}
  <div className="max-w-xl mx-auto mb-16">
    <div className="relative">
      <input
        type="text"
        placeholder="Search blog"
        className="w-full py-3 pl-4 pr-12 rounded-full border border-[#CBBBA4] bg-transparent placeholder-[#CBBBA4] text-[#E5DED4] focus:outline-none focus:ring-1 focus:ring-[#A6856C]"
      />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#CBBBA4] text-lg">
        🔍
      </span>
    </div>
  </div>

  {/* BLOG GRID */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

    {[...Array(6)].map((_, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl overflow-hidden shadow-md"
      >
        {/* Image */}
        <img
          src={boxImg}   // <-- Replace with your image import
          alt="Blog"
          className="w-full h-48 object-cover"
        />

        {/* Content */}
        <div className="p-5 text-black">
          <p className="uppercase text-[11px] tracking-wider text-[#6F614F] mb-2">
            Dec 5, 2025
          </p>

          <h4 className="font-semibold text-lg leading-snug text-[#3D3428] mb-3">
            Revolutionizing the way African homes are designed
          </h4>

          <p className="text-xs text-[#6F614F] leading-relaxed">
            User Interface & User Experience design A-Z | Hands-On Figma...
          </p>
        </div>
      </div>
    ))}

  </div>

  {/* PAGINATION */}
  <div className="flex items-center justify-center gap-4 mt-16 text-[#CBBBA4]">

    <button className="w-8 h-8 flex items-center justify-center border border-[#CBBBA4] rounded-full hover:bg-[#A6856C] hover:text-black transition">
      ←
    </button>

    {[1,2,3].map((page) => (
      <button
        key={page}
        className={`w-8 h-8 flex items-center justify-center rounded-full ${
          page === 1
            ? "bg-[#A6856C] text-black"
            : "border border-[#CBBBA4] hover:bg-[#A6856C] hover:text-black"
        }`}
      >
        {page}
      </button>
    ))}

    <span className="opacity-60">…</span>

    <button className="w-8 h-8 flex items-center justify-center border border-[#CBBBA4] rounded-full hover:bg-[#A6856C] hover:text-black transition">
      12
    </button>

    <button className="w-8 h-8 flex items-center justify-center border border-[#CBBBA4] rounded-full hover:bg-[#A6856C] hover:text-black transition">
      →
    </button>

  </div>

</section>

    </Layout>
  )
}

export default BlogPage