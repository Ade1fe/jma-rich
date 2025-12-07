import type React from "react"

interface StudioHeaderProps {
  title: string
  subtitle: string
  description?: string
  imageSrc?: string
  imageAlt?: string
}

export const StudioHeader: React.FC<StudioHeaderProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt = "Studio header image",
}) => {
  return (
    <div className="w-full bg-[#FFFBF3] text-[#3d3428] font-sans">
      {/* Header Spacing */}
      <div className="h-24" />

      {/* Title Section */}
      <section className="text-center mb-14 px-4">
        <h2 className="text-4xl md:text-5xl font-serif mb-2 tracking-wide">{title}</h2>
        <p className="text-5xl md:text-6xl italic font-serif">{subtitle}</p>
      </section>

      {/* Main Image + Intro */}
      {imageSrc && (
        <section className="max-w-4xl mx-auto px-4 mb-16">
          <div className="w-full h-[500px] bg-gray-300 rounded-lg overflow-hidden mb-10">
            <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} className="w-full h-full object-cover" />
          </div>

          {description && <p className="text-center text-sm leading-relaxed">{description}</p>}
        </section>
      )}
    </div>
  )
}
