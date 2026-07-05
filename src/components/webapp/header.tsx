import { useState } from "react"
import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Icon from "@/components/ui/icon"

export function Header() {
  const [search, setSearch] = useState("")
  const [mobileOpen, setMobileOpen] = useState(false)

  const balance = 1250

  const navLinks = [
    { label: "Каталог", href: "/catalog" },
    { label: "Избранное", href: "/favorites" },
    { label: "Бонусы", href: "/bonuses" },
  ]

  return (
    <header className="sticky top-0 z-[100] bg-black/95 backdrop-blur-md border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="font-orbitron text-xl font-bold text-white whitespace-nowrap">
              GAME<span className="text-red-500">STORE</span>
            </h1>
          </Link>

          {/* Catalog link (desktop) */}
          <Link
            to="/catalog"
            className="hidden lg:flex items-center gap-1.5 font-geist text-sm text-white hover:text-red-500 transition-colors duration-200 flex-shrink-0"
          >
            <Icon name="LayoutGrid" size={18} />
            Каталог
          </Link>

          {/* Search */}
          <div className="hidden md:block flex-1 max-w-xl mx-2">
            <div className="relative">
              <Icon
                name="Search"
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Найти товар или сервис..."
                className="pl-9 h-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-red-500"
              />
            </div>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Nav links (desktop) */}
            <div className="hidden lg:flex items-center gap-6 mr-2">
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-geist text-sm text-white hover:text-red-500 transition-colors duration-200 whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Balance */}
            <Link
              to="/profile"
              className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-3 py-1.5 transition-colors duration-200 flex-shrink-0"
            >
              <Icon name="Wallet" size={16} className="text-red-500" />
              <span className="font-geist text-sm font-semibold text-white whitespace-nowrap">
                {balance.toLocaleString("ru-RU")} ₽
              </span>
            </Link>

            {/* Profile / Login (desktop) */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:inline-flex text-white hover:text-red-500 hover:bg-white/5"
              asChild
            >
              <Link to="/profile">
                <Icon name="UserCircle2" size={22} />
              </Link>
            </Button>

            {/* Mobile menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-white hover:text-red-500 hover:bg-white/5"
                >
                  <Icon name="Menu" size={22} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black border-red-500/20 text-white w-[280px]"
              >
                <SheetHeader>
                  <SheetTitle className="text-white font-orbitron text-left">
                    GAME<span className="text-red-500">STORE</span>
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-6 relative">
                  <Icon
                    name="Search"
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                  <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Найти товар..."
                    className="pl-9 h-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  />
                </div>

                <nav className="mt-6 flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between py-3 px-2 rounded-md font-geist text-white hover:bg-white/5 hover:text-red-500 transition-colors duration-200"
                    >
                      {link.label}
                      <Icon name="ChevronRight" size={16} />
                    </Link>
                  ))}
                  <Link
                    to="/profile"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-3 px-2 rounded-md font-geist text-white hover:bg-white/5 hover:text-red-500 transition-colors duration-200"
                  >
                    Профиль
                    <Icon name="ChevronRight" size={16} />
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
