
import type React from "react"
import Layout from "./ui/Layout"
import aboutusImg from "../assets/aboutusImg.png"
import wallImg1 from "../assets/wall1.jpg"
import wallImg2 from "../assets/wall2.jpg"
import op1 from "../assets/op1.png"
import op2 from "../assets/op2.png"
import jen1 from "../assets/jen1.png"
import op3 from "../assets/op3.png"


const AboutStudio: React.FC = () => {

  return (
    <Layout >

      {/* TITLE SECTION */}
      <section className="text-center my-14 px-4">
        <h2 className="text-4xl md:text-5xl font-serif mb-2 tracking-wide">
          ABOUT
        </h2>
        <p className="text-5xl md:text-6xl italic font-serif">THE STUDIO</p>
      </section>
{/* MAIN IMAGE + INTRO */}
<section className="max-w-4xl mx-auto px-4 mb-16">
  <div className="w-[50rem] h-[50rem] bg-gray-300 rounded-lg overflow-hidden mb-10 mx-auto">
    <img
      src={aboutusImg}
      alt="About Us"
      className="w-full h-full object-cover"
    />
  </div>

  <p className="text-center text-sm leading-relaxed">
    IMARA & CO STUDIO is a refined interior design studio that merges cultural
    warmth and modern elegance. Rooted in eclectism, we believe decor
    storytelling elevates functionality and helps spaces feel more like
    home—deeply personal and thoughtfully curated for everyday belonging.
  </p>
</section>



 {/* QUOTE SECTION */}
      <section className="bg-[#403F2B] text-[#FFFBF3] text-center py-34 px-6 italic text-lg md:text-[35px]">
        “We believe a home should feel lived-in, loved, and deeply personal”
        <br />
        <span className="not-italic text-sm mt-2 block opacity-80">
          – JEN
        </span>
      </section>


      
      {/* METHOD SECTION */}
{/* METHOD + STYLE WRAPPER (ONE unified container) */}
<section className="max-w-7xl mx-auto bg-[#F5EFE7] ">

  {/* METHOD SECTION */}
  <div className="grid md:grid-cols-2 gap-0">

    {/* LEFT TEXT */}
    <div className="flex flex-col justify-center px-12 py-24">
      <h3 className="text-4xl font-serif mb-4 tracking-wide text-[#5C3D2E]">
        OUR <span className="italic">METHOD</span>
      </h3>

      <p className="text-sm leading-relaxed max-w-md text-[#4A3B32]">
        Articulated through layered storytelling of textures, we curate environments
        that are deeply personal and long-lasting. Our attention to authentic materials
        and cultural aesthetics celebrates craftsmanship at its best.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="h-full">
      <img
        src={wallImg2}
        alt="Method"
        className="w-full h-full object-cover"
      />
    </div>

  </div>

  {/* STYLE SECTION */}
  <div className="grid md:grid-cols-2 gap-0">

    {/* LEFT IMAGE */}
    <div className="h-full">
      <img
        src={wallImg1}
        alt="Style"
        className="w-full h-full object-cover"
      />
    </div>

    {/* RIGHT TEXT */}
    <div className="flex flex-col justify-center px-12 py-24">
      <h3 className="text-4xl font-serif mb-4 tracking-wide text-[#5C3D2E]">
        OUR <span className="italic">STYLE</span>
      </h3>

      <p className="text-sm leading-relaxed max-w-md text-[#4A3B32]">
        Africandi celebrates craftsmanship, carved wood, tribal motifs,
        woven fibers, sculptural form, clay textures. Reinterpreted in a way 
        that feels refined.
      </p>
    </div>

  </div>

</section>



 {/* QUOTE SECTION */}
<section className="bg-[#362D26] text-[#FFFBF3] py-[160px] px-6">
  <p className="text-center  max-w-6xl  mx-auto italic text-xl md:text-3xl leading-relaxed opacity-90">
    “To Jennifer, design is not decoration—it’s storytelling. A reflection of where we come from, 
    and a vision of where we’re going.”
  </p>
</section>

      {/* STYLE SECTION */}
<section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-0">

  {/* LEFT IMAGE */}
  <div className="h-full">
    <img
      src={jen1}   // <-- your image here
      alt="Jennifer"
      className="w-full h-full object-cover"
    />
  </div>

  {/* RIGHT CONTENT */}
  <div className="bg-[#E8DFD2] px-12 py-20 flex flex-col justify-center">

    {/* Heading */}
    <h2 className="text-5xl md:text-6xl font-serif tracking-tight text-[#5C3D2E] mb-8">
      MEET <span className="italic">JEN</span>
    </h2>

    {/* Paragraphs */}
    <div className="space-y-6 text-[#4A3B32] text-sm leading-relaxed max-w-lg">
      <p>
        Jennifer Abah, Founder, Creative Director & Interior Designer, and
        the visionary behind Africandi Philosophy.
      </p>

      <p>
        Born in Kano and influenced by its deep tradition of artistry and
        craftsmanship, Jennifer developed an intuitive eye for storytelling
        through interiors. After earning a degree in Psychology and building
        a career in education and corporate analysis, she transitioned into design.
      </p>

      <p>
        Today, Jennifer leads JMA & Co. Spaces as a multidisciplinary studio
        creating interiors that reflect cultural identity. She collaborates with
        expert architects, artisans and designers across the world to create spaces
        that feel refined and deeply connected to identity.
      </p>

      <p>
        Through Africandi, Jennifer is elevating African craftsmanship on a global
        stage, designing homes and commercial spaces that are cohesive and timeless.
      </p>
    </div>

    {/* Button */}
    <button className="mt-10  w-[200px] flex items-center gap-3 bg-[#3D3428] text-[#FFFBF3] px-8 py-3 text-xs tracking-wider uppercase rounded-md hover:opacity-90 transition">
      Get Started
      <span className="text-lg">→</span>
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
                 <img
      src={op1}   // <-- your image here
      alt="Jennifer"
      className="w-full h-full object-cover"
    />
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
            <img
      src={op3}   // <-- your image here
      alt="Jennifer"
      className="w-full h-full object-cover"
    />
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
                  <img
      src={op2}   // <-- your image here
      alt="Jennifer"
      className="w-full h-full object-cover"
    />
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
