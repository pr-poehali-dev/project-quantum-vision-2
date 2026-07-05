import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"
import { services } from "@/lib/mock-data"

export function ServicesRow() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-orbitron text-xl md:text-2xl font-bold text-white">
            Популярные сервисы
          </h2>
          <Link
            to="/catalog"
            className="font-geist text-sm text-red-500 hover:text-red-400 transition-colors duration-200 flex items-center gap-1 whitespace-nowrap"
          >
            Все сервисы
            <Icon name="ChevronRight" size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-11 gap-3">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/catalog?service=${service.slug}`}
              className="group flex flex-col items-center gap-2 p-3 rounded-xl border border-white/10 bg-white/5 hover:border-red-500/60 hover:bg-red-500/10 transition-all duration-200"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-red-500/20 transition-colors duration-200">
                <Icon
                  name={service.icon}
                  size={20}
                  className="text-white group-hover:text-red-400 transition-colors duration-200"
                />
              </div>
              <span className="font-geist text-[11px] text-gray-300 text-center leading-tight truncate w-full">
                {service.name}
              </span>
            </Link>
          ))}

          <Link
            to="/catalog"
            className="group flex flex-col items-center justify-center gap-2 p-3 rounded-xl border border-white/10 bg-white/5 hover:border-red-500/60 hover:bg-red-500/10 transition-all duration-200"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-red-500/20 transition-colors duration-200">
              <Icon
                name="Plus"
                size={20}
                className="text-white group-hover:text-red-400 transition-colors duration-200"
              />
            </div>
            <span className="font-geist text-[11px] text-gray-300 text-center leading-tight">
              ещё 841
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
