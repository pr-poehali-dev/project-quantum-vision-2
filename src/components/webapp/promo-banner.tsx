import { useCallback, useEffect, useRef, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"
import { cn } from "@/lib/utils"

interface SlideBase {
  id: string
  href: string
}

interface MainSlide extends SlideBase {
  type: "main"
  title: string
  subtitle: string
  cta: string
}

interface PromoSlide extends SlideBase {
  type: "promo"
  title: string
  subtitle: string
  badge: string
  gradient: string
}

type Slide = MainSlide | PromoSlide

const slides: Slide[] = [
  {
    id: "s1",
    type: "main",
    title: "Прокачай свой аккаунт",
    subtitle: "Пополнения, игры и подписки с моментальной доставкой",
    cta: "В каталог",
    href: "/catalog",
  },
  {
    id: "s2",
    type: "promo",
    title: "Скидка 5% на Steam",
    subtitle: "При пополнении от 500 ₽ по промокоду STEAM5",
    badge: "Акция",
    gradient: "from-blue-950 via-blue-900 to-black",
    href: "/catalog?service=steam",
  },
  {
    id: "s3",
    type: "promo",
    title: "Game Pass со скидкой",
    subtitle: "Xbox Game Pass Ultimate дешевле на 300 ₽",
    badge: "Хит",
    gradient: "from-green-950 via-green-900 to-black",
    href: "/catalog?category=subscriptions",
  },
  {
    id: "s4",
    type: "promo",
    title: "Новинки в каталоге",
    subtitle: "Свежие ключи и предзаказы уже доступны",
    badge: "Новинка",
    gradient: "from-purple-950 via-purple-900 to-black",
    href: "/catalog?sort=new",
  },
]

export function PromoBanner() {
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  )
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative rounded-2xl overflow-hidden group"
          onMouseEnter={() => autoplay.current.stop()}
          onMouseLeave={() => autoplay.current.play()}
        >
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide) => (
                <div key={slide.id} className="min-w-0 shrink-0 grow-0 basis-full">
                  <Link to={slide.href} className="block">
                    {slide.type === "main" ? (
                      <div className="h-[220px] md:h-[280px] w-full bg-gradient-to-br from-red-950 via-black to-black flex items-center px-6 md:px-16 relative">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,rgba(239,68,68,0.5),transparent_50%)]" />
                        <div className="relative z-10 max-w-lg">
                          <h2 className="font-orbitron text-2xl md:text-4xl font-extrabold text-white mb-3">
                            {slide.title}
                          </h2>
                          <p className="text-gray-300 text-sm md:text-lg mb-5">
                            {slide.subtitle}
                          </p>
                          <span className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-geist font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 text-sm md:text-base">
                            {slide.cta}
                            <Icon name="ArrowRight" size={16} />
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={cn(
                          "h-[220px] md:h-[280px] w-full bg-gradient-to-br flex items-center px-6 md:px-16 relative",
                          slide.gradient
                        )}
                      >
                        <div className="relative z-10 max-w-lg">
                          <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 font-geist">
                            {slide.badge}
                          </span>
                          <h2 className="font-orbitron text-xl md:text-3xl font-extrabold text-white mb-2">
                            {slide.title}
                          </h2>
                          <p className="text-gray-300 text-sm md:text-base">
                            {slide.subtitle}
                          </p>
                        </div>
                      </div>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={scrollPrev}
            aria-label="Предыдущий слайд"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Следующий слайд"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <Icon name="ChevronRight" size={20} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Слайд ${index + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  index === selectedIndex ? "w-6 bg-red-500" : "w-1.5 bg-white/40"
                )}
              />
            ))}
          </div>
        </div>

        {/* Service ad banners row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          {[
            { title: "Steam Deck", subtitle: "Играй везде", color: "from-slate-800 to-slate-900" },
            { title: "Discord Nitro", subtitle: "-15% сегодня", color: "from-indigo-950 to-slate-900" },
            { title: "ChatGPT Plus", subtitle: "Доступ без VPN", color: "from-teal-950 to-slate-900" },
            { title: "Spotify Premium", subtitle: "3 мес в подарок", color: "from-emerald-950 to-slate-900" },
          ].map((ad) => (
            <div
              key={ad.title}
              className={cn(
                "rounded-xl bg-gradient-to-br p-4 h-20 flex flex-col justify-center cursor-pointer hover:brightness-125 transition-all duration-200",
                ad.color
              )}
            >
              <p className="text-white font-geist font-semibold text-sm">{ad.title}</p>
              <p className="text-gray-400 font-geist text-xs">{ad.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
