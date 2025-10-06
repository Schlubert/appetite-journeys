import React from "react"

type HeroHeaderProps = {
  images?: string[]
  title: string
  subtitle?: string
}

const HeroHeader: React.FC<HeroHeaderProps> = ({ images, title, subtitle }) => {
  const hasImages = images && images.length > 0

  return (
    <header className="relative w-full rounded-2xl overflow-hidden border border-slate-200">
      {hasImages ? (
        <div
          className={`grid gap-1 h-56 md:h-72 lg:h-64`}
          style={{
            gridTemplateColumns: `repeat(${Math.min(
              images!.length,
              5
            )}, minmax(0, 1fr))`,
          }}
        >
          {images!.map((img, idx) => (
            <div key={idx} className="relative">
              <img
                src={img}
                alt={`${title} image ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full h-56 md:h-72 lg:h-64 bg-slate-200 flex items-center justify-center text-slate-500">
          No images available
        </div>
      )}

      {/* Overlay box */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-lg md:text-xl text-slate-100">{subtitle}</p>
        )}
      </div>
    </header>
  )
}

export default HeroHeader
