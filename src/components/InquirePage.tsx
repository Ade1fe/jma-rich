
import Layout from './ui/Layout'
import kitImg from '../assets/chaira.png';
import elli from '../assets/Ellipse 4.png'

const InquirePage = () => {
  return (
      <Layout >
        <section className="bg-white text-[#6C4536] py-24 px-6">

  <div className="max-w-4xl mx-auto text-left">

    {/* DATE BADGE */}
    <div className="inline-block mb-6">
      <span className="text-[12px] tracking-wide px-4 py-1 border border-[#A6856C] rounded-full uppercase opacity-80">
        Dec 5, 2025
      </span>
    </div>

    {/* TITLE */}
    <h1 className="text-4xl md:text-5xl font-serif leading-tight  text-[#A6856C]">
      A Guide To Streamlining Your<br />
      Home To Suit The Heritage
    </h1>
<p className='mb-16 text-black'>Dive into the world of cultural efficiency and learn strategie!s to elevate your home to suit African origin</p>
  </div>

  {/* HERO IMAGE */}


</section>

          <div className="h-[50rem] mx-auto overflow-hidden shadow-lg  ">
    <img
      src={kitImg}   // ← replace with your image import
      alt="Heritage Home Guide"
      className="w-full h-full object-cover"
    />
  </div>
        
        <section className="bg-white py-24 px-6">

  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

    {/* LEFT CONTENT BLOCK */}
    <div className="md:col-span-2 space-y-16">

      {/* TEXT BLOCK 1 */}
      <p className="text-sm leading-relaxed opacity-90">
        In today's digital world, a well-designed website can make all the difference in user engagement,
        conversion rates, and business success. The Mastering UI/UX Design – Complete Website Responsive Design
        From Figma to Website Design course is a comprehensive, hands-on program that takes you through the entire
        process of designing a modern, responsive website from concept to completion. Whether you are a beginner
        looking to break into the field or an experienced designer aiming to refine your skills, this course
        provides you with practical, real-world knowledge that will elevate your design expertise.
        <br /><br />
        In this course, you will learn the principles of UI (User Interface) and UX (User Experience) design,
        master Figma as a powerful design tool, and transform your designs into a fully responsive, functional
        website. By the end of this course, you will have a professional-quality project in your portfolio that
        showcases your ability to create intuitive and aesthetically pleasing web experiences.
      </p>

      {/* TEXT BLOCK 2 */}
      <p className="text-sm leading-relaxed opacity-90">
        In today's digital world, a well-designed website can make all the difference in user engagement,
        conversion rates, and business success. The Mastering UI/UX Design – Complete Website Responsive Design
        From Figma to Website Design course is a comprehensive, hands-on program that takes you through the entire
        process of designing a modern, responsive website from concept to completion. Whether you are a beginner
        looking to break into the field or an experienced designer aiming to refine your skills, this course
        provides you with practical, real-world knowledge that will elevate your design expertise.
        <br /><br />
        In this course, you will learn the principles of UI (User Interface) and UX (User Experience) design,
        master Figma as a powerful design tool, and transform your designs into a fully responsive, functional
        website. By the end of this course, you will have a professional-quality project in your portfolio that
        showcases your ability to create intuitive and aesthetically pleasing web experiences.
      </p>

      {/* TEXT BLOCK 3 */}
      <p className="text-sm leading-relaxed opacity-90">
        In today's digital world, a well-designed website can make all the difference in user engagement,
        conversion rates, and business success. The Mastering UI/UX Design – Complete Website Responsive Design
        From Figma to Website Design course is a comprehensive, hands-on program that takes you through the entire
        process of designing a modern, responsive website from concept to completion. Whether you are a beginner
        looking to break into the field or an experienced designer aiming to refine your skills, this course
        provides you with practical, real-world knowledge that will elevate your design expertise.
        <br /><br />
        In this course, you will learn the principles of UI (User Interface) and UX (User Experience) design,
        master Figma as a powerful design tool, and transform your designs into a fully responsive, functional
        website. By the end of this course, you will have a professional-quality project in your portfolio that
        showcases your ability to create intuitive and aesthetically pleasing web experiences.
      </p>

    </div>

    {/* RIGHT AUTHOR CARD */}
    <div className="md:col-span-1">

      <div className="bg-[#3A2F29] text-[#F5EDE4] p-6 w-full max-w-sm md:sticky md:top-24 mx-auto">

        {/* AUTHOR LABEL */}
        <span className="text-[11px] uppercase tracking-wider px-3 py-1 rounded-full border border-[#CBBBA4] opacity-80">
          Author
        </span>

        {/* PROFILE */}
        <div className="flex items-center gap-4 mt-4">
          <img
            src={elli}  // <-- Replace your image here
            alt="Author"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-medium">Jennifer Mami Abah,</h3>
            <p className="text-xs opacity-80">
              Creative Director, JMA & CO Spaces
            </p>
          </div>
        </div>

        {/* BIO TEXT */}
        <p className="text-xs leading-relaxed opacity-80 mt-4">
          Creator of the Africandi movement and an innovative designer with a flair for captivating
          afro-centric decors, elevating homes through cultural designs and creativity.
        </p>

      </div>

    </div>

  </div>

</section>

         </Layout>
  )
}

export default InquirePage