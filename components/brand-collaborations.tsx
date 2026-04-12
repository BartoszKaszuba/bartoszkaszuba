"use client"

const brands = [
  "Brand A",
  "Brand B",
  "Brand C",
  "Brand D",
  "Brand E",
]

export function BrandCollaborations() {
  return (
    <section className="py-16 lg:py-24 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
            Trusted By
          </p>
          <h2 
            className="text-3xl sm:text-4xl font-bold text-foreground"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Brand Collaborations
          </h2>
        </div>
      </div>

      {/* Infinite Scroll Animation */}
      <div className="relative">
        <div className="flex animate-scroll">
          {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 text-2xl sm:text-3xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors whitespace-nowrap"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {brand}
              <span className="mx-8 text-primary">·</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
