import React, { useState } from 'react';
import Input from './ui/Input';
import Select from './ui/Select';
import TextArea from './ui/TextArea';
import Button from './ui/Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    serviceNeeded: '',
    budget: '',
    howDidYouFind: '',
    additionalNotes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  const projectTypeOptions = [
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'hospitality', label: 'Hospitality' },
    { value: 'other', label: 'Other' }
  ];

  const serviceOptions = [
    { value: 'full-design', label: 'Full Design Service' },
    { value: 'consultation', label: 'Consultation' },
    { value: 'styling', label: 'Styling' },
    { value: 'renovation', label: 'Renovation' }
  ];

  const budgetOptions = [
    { value: 'under-50k', label: 'Under $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-250k', label: '$100,000 - $250,000' },
    { value: '250k-plus', label: '$250,000+' }
  ];

  const referralOptions = [
    { value: 'google', label: 'Google Search' },
    { value: 'instagram', label: 'Instagram' },
    { value: 'referral', label: 'Referral' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="min-h-screen bg-[#f5f1ea]">
      {/* Header */}
      <header className="bg-[#3d3428] py-5 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#c9b896] rounded-full flex items-center justify-center">
              <div className="w-8 h-1 bg-[#3d3428] rounded"></div>
            </div>
            <div>
              <div className="text-[#c9b896] text-xl font-serif tracking-wider">JMA & CO.</div>
              <div className="text-[#c9b896] text-xs tracking-widest">SPACES</div>
            </div>
          </div>
          <nav className="flex gap-8 text-[#f5f1ea] text-sm">
            <a href="#" className="hover:text-[#c9b896] transition">PROJECTS</a>
            <a href="#" className="hover:text-[#c9b896] transition">SHOP</a>
            <a href="#" className="hover:text-[#c9b896] transition">SERVICES</a>
            <a href="#" className="hover:text-[#c9b896] transition">ABOUT</a>
            <a href="#" className="hover:text-[#c9b896] transition">INQUIRE</a>
            <a href="#" className="hover:text-[#c9b896] transition">BLOG</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-8 py-16">
        <h1 className="text-center text-5xl font-serif text-[#3d3428] mb-2">
          START YOUR <span className="italic">AFRICANDI</span>
        </h1>
        <h2 className="text-center text-5xl font-serif text-[#8b7355] mb-8">
          DESIGN JOURNEY
        </h2>
        
        <p className="text-center text-[#5a4a3a] mb-12 text-sm">
          We're excited to learn more about your space. Please complete the form below<br />
          and our team will follow up with next steps within 48 hours
        </p>

        <div className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-6">
            <Input
              label="First name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Please enter your first name"
              required
            />
            <Input
              label="Last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Please enter your last name"
              required
            />
          </div>

          <Input
            label="Email address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Please enter your email address"
            required
          />

          <Input
            label="Phone number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Please enter your phone number"
            required
          />

          <Select
            label="Project type"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            options={projectTypeOptions}
            required
          />

          <Select
            label="Service needed"
            name="serviceNeeded"
            value={formData.serviceNeeded}
            onChange={handleChange}
            options={serviceOptions}
            required
          />

          <Select
            label="Estimated budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            options={budgetOptions}
            required
          />

          <Select
            label="How did you find us?"
            name="howDidYouFind"
            value={formData.howDidYouFind}
            onChange={handleChange}
            options={referralOptions}
            required
          />

          <TextArea
            label="Additional note or request"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            placeholder="Tell us about your space, style and goals"
            rows={6}
            required
          />

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button onClick={handleSubmit}>
              SUBMIT
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactForm;