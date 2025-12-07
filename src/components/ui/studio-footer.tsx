"use client"

import React from "react"

interface StudioFooterProps {
  joinWaitlistEmail?: string
  onSubscribe?: (email: string) => void
  companyLinks?: { label: string; href: string }[]
  designLinks?: { label: string; href: string }[]
  shopLinks?: { label: string; href: string }[]
}

export const StudioFooter: React.FC<StudioFooterProps> = ({
  joinWaitlistEmail = "",
  onSubscribe,
  companyLinks = [],
  designLinks = [],
  shopLinks = [],
}) => {
  const [email, setEmail] = React.useState(joinWaitlistEmail)

  const handleSubscribe = () => {
    if (onSubscribe) {
      onSubscribe(email)
    }
    setEmail("")
  }

  return (
    <footer className="bg-[#3d3428] text-[#FFFBF3] font-sans">
      {/* Join Waitlist Section */}
      <section className="px-4 py-20 text-center border-b border-[#5a5248]">
        <p className="text-2xl font-serif mb-6">Join the waitlist</p>
        <p className="text-xs mb-8 opacity-80">Stay updated. We send news once a month.</p>

        <div className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-md text-[#3d3428] bg-[#FFFBF3] text-sm"
          />
          <button
            onClick={handleSubscribe}
            className="px-6 py-3 bg-[#d4c5a9] text-[#3d3428] rounded-md text-xs uppercase font-medium hover:bg-[#c9b89c] transition"
          >
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer Links Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        {/* Company Links */}
        {companyLinks.length > 0 && (
          <div>
            <h4 className="text-xs uppercase font-semibold mb-4 opacity-60">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-sm opacity-80 hover:opacity-100 transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Design Links */}
        {designLinks.length > 0 && (
          <div>
            <h4 className="text-xs uppercase font-semibold mb-4 opacity-60">Design</h4>
            <ul className="space-y-2">
              {designLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-sm opacity-80 hover:opacity-100 transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Shop Links */}
        {shopLinks.length > 0 && (
          <div>
            <h4 className="text-xs uppercase font-semibold mb-4 opacity-60">Shop</h4>
            <ul className="space-y-2">
              {shopLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-sm opacity-80 hover:opacity-100 transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Bottom Footer */}
      <section className="border-t border-[#5a5248] px-4 py-8 text-center text-xs opacity-60">
        <p>© 2025 IMARA & CO. All rights reserved.</p>
      </section>
    </footer>
  )
}
