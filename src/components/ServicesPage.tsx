import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Layout from './ui/Layout';

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      title: 'E-Design Services',
      description: 'A flexible, accessible service for clients anywhere in the world. You receive a full visual design plan. Mood boards, layout, sourcing links, and styling guidance, so you can implement it your own pace.',
      included: [
        'Initial consultation call',
        'Design questionnaire',
        'Mood board creation',
        'Floor plan layouts',
        'Product sourcing links',
        'Styling guide PDF'
      ]
    },
    {
      title: 'Full Service Design',
      description: 'A complete, done-for-you design experience where we transform your space from concept to installation. Perfect for clients who want a beautifully finished home without managing details, vendors, or decisions.',
      included: [
        'Comprehensive consultation',
        'Space planning & 3D renders',
        'Custom furniture sourcing',
        'Vendor coordination',
        'Project management',
        'Full installation & styling'
      ]
    },
    {
      title: 'Bespoke Decor Sourcing',
      description: 'Original, one-of-a-kind African and pieces crafted with artisans in Nigeria, Mexico, China, and beyond. We curate wall art, sculptures, furniture, lighting, and textiles. From African craftsmen birds-of-thought design. For clients seeking rare, meaningful, fresh-minded decor.',
      included: [
        'Artisan network access',
        'Custom piece commissioning',
        'International shipping coordination',
        'Authenticity verification',
        'Care instructions',
        'Artist background stories'
      ]
    },
    {
      title: 'Expert Design Consultation',
      description: 'A focused, one-on-one session that gives you clarity and direction. Perfect for color choices, layout decisions, materials, and design guidance when you need expert insight, without a full project.',
      included: [
        '60-90 minute consultation',
        'Design assessment',
        'Color palette recommendations',
        'Layout optimization tips',
        'Material & finish guidance',
        'Action plan summary'
      ]
    }
  ];

  return (
 <Layout>
       <div className="min-h-screen bg-[#F5EDE4]">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-serif text-[#5C3D2E] mb-2">
            OUR
          </h1>
          <h2 className="text-5xl md:text-7xl font-serif italic text-[#5C3D2E]">
            SERVICES
          </h2>
        </div>

        {/* Hero Image */}
        <div className="max-w-3xl mx-auto mb-16">
          <img
            src="https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?w=800&h=1000&fit=crop"
            alt="Portrait of a woman in traditional attire holding an ornate vessel"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-[#4A3428] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#F5EDE4] rounded-lg overflow-hidden shadow-lg flex flex-col"
              >
                {/* Service Image */}
                <div className="h-48 bg-gradient-to-br from-[#8B6F47] to-[#5C3D2E] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-[#D4A574] rounded-lg transform rotate-12 opacity-70"></div>
                    <div className="w-24 h-24 bg-[#8B6F47] rounded-lg absolute transform -rotate-6 opacity-80"></div>
                    <div className="w-16 h-16 bg-[#5C3D2E] rounded-lg absolute transform rotate-45 opacity-90"></div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-[#4A3428] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#6B5446] mb-4 flex-1">
                    {service.description}
                  </p>

                  {/* Expandable Section */}
                  <button
                    onClick={() => setExpandedService(expandedService === index ? null : index)}
                    className="flex items-center justify-between text-[#8B6F47] font-medium text-sm hover:text-[#5C3D2E] transition-colors"
                  >
                    <span>What's included</span>
                    <IoIosArrowDown
                      className={`w-4 h-4 transition-transform ${
                        expandedService === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedService === index && (
                    <div className="mt-4 pt-4 border-t border-[#D4A574]">
                      <ul className="space-y-2">
                        {service.included.map((item, idx) => (
                          <li key={idx} className="text-xs text-[#6B5446] flex items-start">
                            <span className="text-[#8B6F47] mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center">
          <div className="text-6xl text-[#5C3D2E] mb-6">"</div>
          <blockquote className="text-lg text-[#4A3428] leading-relaxed mb-8 font-light">
            The designs were amazing. She took her time to really make sure that I loved the work all while
            working with budget. She brought an entirely new style into my home that only my own, would have
            taken me forever to really bring together. She helped me source products that are rated highly and
            that are quality!! Everyone knows longevity is important
          </blockquote>
          <div className="w-16 h-px bg-[#8B6F47] mx-auto mb-4"></div>
          <cite className="text-sm font-medium text-[#5C3D2E] not-italic tracking-wider">
            CHIMA
          </cite>
        </div>
      </div>
    </div>
     </Layout>
  );
};

export default ServicesPage;