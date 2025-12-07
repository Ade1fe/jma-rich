
import type React from "react"
import Layout from "./ui/Layout"

const AboutStudio: React.FC = () => {

  return (
    <Layout >

      {/* TITLE SECTION */}
      <section className="text-center mb-14 px-4">
        <h2 className="text-4xl md:text-5xl font-serif mb-2 tracking-wide">
          ABOUT
        </h2>
        <p className="text-5xl md:text-6xl italic font-serif">THE STUDIO</p>
      </section>

      {/* MAIN IMAGE + INTRO */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <div className="w-full h-[500px] bg-gray-300 rounded-lg overflow-hidden mb-10">
          {/* Replace with <img src={...}/> */}
        </div>

        <p className="text-center text-sm leading-relaxed">
          IMARA & CO STUDIO is a refined interior design studio that merges cultural
          warmth and modern elegance. Rooted in eclectism, we believe decor
          storytelling elevates functionality and helps spaces feel more like
          home—deeply personal and thoughtfully curated for everyday belonging.
        </p>
      </section>


 {/* QUOTE SECTION */}
      <section className="bg-[#3d3428] text-[#FFFBF3] text-center py-14 px-6 italic text-lg md:text-xl">
        “We believe a home should feel lived-in, loved, and deeply personal”
        <br />
        <span className="not-italic text-sm mt-2 block opacity-80">
          – JEN
        </span>
      </section>


      
      {/* METHOD SECTION */}
      <section className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 py-20">
        <div>
          <h3 className="text-3xl font-serif mb-4">
            OUR <span className="italic">METHOD</span>
          </h3>

          <p className="text-sm leading-relaxed">
            Articulated through layered storytelling of textures, we curate environments that are deeply personal and
            long-lasting. Our attention to authentic materials and cultural aesthetics celebrates craftsmanship at its
            best.
          </p>
        </div>

        {/* Placeholder IMAGE */}
        <div className="w-full h-[400px] bg-gray-300 rounded-lg overflow-hidden">
          {/* Add your method section image URL here */}
        </div>
      </section>

      {/* STYLE SECTION */}
      <section className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 pb-20">
        {/* Placeholder IMAGE */}
        <div className="w-full h-[400px] bg-gray-300 rounded-lg overflow-hidden">
          {/* Add your style section image URL here */}
        </div>

        <div>
          <h3 className="text-3xl font-serif mb-4">
            OUR <span className="italic">STYLE</span>
          </h3>

          <p className="text-sm leading-relaxed">
            Blended with nature's warmth, refined minimalism meets handcrafted sophistication. Our style reflects
            thoughtful living where serene comfort meets expressive design.
          </p>
        </div>
      </section>

      {/* FEATURE QUOTE */}
      <section className="bg-[#3d3428] text-[#FFFBF3] text-center py-20 px-6 italic text-lg leading-relaxed">
        "To Jennifer, design is not decoration—it's storytelling. A reflection of where we come from, and a vision of
        where we're going."
      </section>

      {/* MEET JEN SECTION */}
      <section className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-4 py-20">
        {/* Placeholder IMAGE */}
        <div className="w-full h-[450px] bg-gray-300 rounded-lg overflow-hidden">
          {/* Add your meet Jen image URL here */}
        </div>

        <div className="space-y-4">
          <h3 className="text-3xl font-serif">
            MEET <span className="italic">JEN</span>
          </h3>

          <p className="text-sm leading-relaxed">
            Jennifer A. Cole is a creator who believes in grounded design that honors both beauty and function. Her
            multidisciplinary work weaves culture, craft, and authenticity into every space she transforms.
          </p>

          <button className="px-6 py-3 border border-[#3d3428] rounded-md text-xs uppercase hover:bg-[#3d3428] hover:text-[#FFFBF3] transition">
            Continue Reading
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20">
        <h3 className="text-3xl font-serif mb-12 text-center">BESPOKE PIECES</h3>

        <div className="grid md:grid-cols-3 gap-6 auto-rows-max">
          {/* Left Item - Standard Height */}
          <div className="space-y-4">
            <div className="w-full h-[350px] bg-gray-300 rounded-lg overflow-hidden">
              {/* Add your first bespoke piece image URL here */}
            </div>
            <div>
              <h4 className="text-lg font-serif mb-2">Striped Poufs</h4>
              <p className="text-xs leading-relaxed text-gray-600">
                Handwoven textured pieces that bring warmth and layered storytelling to any space.
              </p>
            </div>
          </div>

          {/* Center Item - Featured/Taller */}
          <div className="space-y-4">
            <div className="w-full h-[500px] bg-gray-300 rounded-lg overflow-hidden">
              {/* Add your featured bespoke piece image URL here */}
            </div>
            <div>
              <h4 className="text-lg font-serif mb-2">Featured Installation</h4>
              <p className="text-xs leading-relaxed text-gray-600">
                Our signature piece that showcases the fusion of cultural warmth and modern elegance through carefully
                curated materials and artistic vision.
              </p>
            </div>
          </div>

          {/* Right Item - Standard Height */}
          <div className="space-y-4">
            <div className="w-full h-[350px] bg-gray-300 rounded-lg overflow-hidden">
              {/* Add your third bespoke piece image URL here */}
            </div>
            <div>
              <h4 className="text-lg font-serif mb-2">Textured Fabrics</h4>
              <p className="text-xs leading-relaxed text-gray-600">
                Premium upholstery and linens selected for their authenticity and ability to elevate everyday living.
              </p>
            </div>
          </div>
        </div>
      </section>

   
    </Layout>
  )
}

export default AboutStudio
