export interface Service {
  id: string
  name: string
  icon: string
  slug: string
}

export const services: Service[] = [
  { id: "steam", name: "Steam", icon: "Gamepad2", slug: "steam" },
  { id: "telegram", name: "Telegram", icon: "Send", slug: "telegram" },
  { id: "roblox", name: "Roblox", icon: "Box", slug: "roblox" },
  { id: "brawlstars", name: "Brawl Stars", icon: "Swords", slug: "brawl-stars" },
  { id: "pubgm", name: "PUBG Mobile", icon: "Crosshair", slug: "pubg-mobile" },
  { id: "appstore", name: "App Store", icon: "Apple", slug: "app-store" },
  { id: "chatgpt", name: "ChatGPT", icon: "Bot", slug: "chatgpt" },
  { id: "playstation", name: "PlayStation", icon: "Gamepad", slug: "playstation" },
  { id: "tiktok", name: "TikTok", icon: "Music2", slug: "tiktok" },
  { id: "mlbb", name: "Mobile Legends", icon: "Swords", slug: "mobile-legends" },
]

export type ProductBadge = "Хит" | "Новинка" | "Рекомендуем" | "Скидка" | "Топ продаж" | "В наличии"

export interface Product {
  id: string
  title: string
  category: string
  image: string
  price: number
  oldPrice?: number
  badges: ProductBadge[]
  platform: string
}

export const products: Product[] = [
  {
    id: "p1",
    title: "Steam Пополнение 500 ₽",
    category: "Донат",
    image: "🎮",
    price: 475,
    oldPrice: 500,
    badges: ["Хит", "Скидка"],
    platform: "Steam",
  },
  {
    id: "p2",
    title: "PUBG Mobile 660 UC",
    category: "Игровая валюта",
    image: "🔫",
    price: 890,
    badges: ["Топ продаж"],
    platform: "PUBG Mobile",
  },
  {
    id: "p3",
    title: "Xbox Game Pass Ultimate 1 мес",
    category: "Подписки",
    image: "🕹️",
    price: 990,
    oldPrice: 1290,
    badges: ["Скидка", "Рекомендуем"],
    platform: "Xbox",
  },
  {
    id: "p4",
    title: "Roblox 800 Robux",
    category: "Игровая валюта",
    image: "🟦",
    price: 690,
    badges: ["В наличии"],
    platform: "Roblox",
  },
  {
    id: "p5",
    title: "PlayStation Plus Essential 3 мес",
    category: "Подписки",
    image: "🎯",
    price: 1490,
    badges: ["Новинка"],
    platform: "PlayStation",
  },
  {
    id: "p6",
    title: "Brawl Stars Gems 170",
    category: "Игровая валюта",
    image: "💎",
    price: 780,
    badges: ["Хит"],
    platform: "Brawl Stars",
  },
  {
    id: "p7",
    title: "Discord Nitro 1 месяц",
    category: "Подписки",
    image: "💬",
    price: 590,
    oldPrice: 690,
    badges: ["Скидка", "В наличии"],
    platform: "Discord",
  },
  {
    id: "p8",
    title: "Mobile Legends 500 алмазов",
    category: "Игровая валюта",
    image: "⚔️",
    price: 650,
    badges: ["В наличии"],
    platform: "Mobile Legends",
  },
]

export interface Article {
  id: string
  title: string
  excerpt: string
  date: string
  views: number
  image: string
}

export const articles: Article[] = [
  {
    id: "a1",
    title: "Как выгодно пополнить Steam в 2026 году",
    excerpt: "Разбираем все способы пополнения баланса Steam и сравниваем курсы обмена.",
    date: "01.07.2026",
    views: 3421,
    image: "🎮",
  },
  {
    id: "a2",
    title: "Топ-5 подписок для геймеров: что выбрать",
    excerpt: "Game Pass, PS Plus или Discord Nitro — сравниваем цены и преимущества.",
    date: "28.06.2026",
    views: 2156,
    image: "🕹️",
  },
  {
    id: "a3",
    title: "Гайд по покупке ключей игр без риска",
    excerpt: "Как отличить лицензионный ключ от подделки и не потерять деньги.",
    date: "24.06.2026",
    views: 1890,
    image: "🔑",
  },
]

export interface Review {
  id: string
  name: string
  avatar: string
  rating: number
  text: string
  image?: string
  date: string
}

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Дмитрий С.",
    avatar: "/cybersecurity-expert-man.jpg",
    rating: 5,
    text: "Пополнил Steam за минуту, курс отличный. Уже третий раз покупаю здесь.",
    date: "3 дня назад",
  },
  {
    id: "r2",
    name: "Алина В.",
    avatar: "/asian-woman-tech-developer.jpg",
    rating: 5,
    text: "Купила ключ на новинку — пришёл сразу на почту, активировался без проблем.",
    date: "5 дней назад",
  },
  {
    id: "r3",
    name: "Игорь М.",
    avatar: "/professional-woman-scientist.png",
    rating: 5,
    text: "Беру подписки Game Pass только тут. Поддержка отвечает моментально.",
    date: "неделю назад",
  },
  {
    id: "r4",
    name: "Ольга К.",
    avatar: "/asian-woman-tech-developer.jpg",
    rating: 4,
    text: "Всё быстро и удобно, но хотелось бы больше способов оплаты.",
    date: "неделю назад",
  },
  {
    id: "r5",
    name: "Максим П.",
    avatar: "/cybersecurity-expert-man.jpg",
    rating: 5,
    text: "Пользуюсь сервисом уже полгода, ни одной проблемы с доставкой товара.",
    date: "2 недели назад",
  },
]
