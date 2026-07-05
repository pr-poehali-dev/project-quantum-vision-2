import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Моментальная доставка",
    description: "Код или пополнение приходят на почту сразу после оплаты — в среднем за 30 секунд, без ожидания.",
    icon: "zap",
    badge: "Мгновенно",
  },
  {
    title: "Безопасная оплата",
    description: "Все платежи проходят через защищённый шлюз с шифрованием. Ваши данные под надёжной защитой.",
    icon: "lock",
    badge: "Защита",
  },
  {
    title: "Пополнение Steam",
    description: "Пополняем баланс Steam в рублях по выгодному курсу. Работаем с любыми регионами аккаунтов.",
    icon: "globe",
    badge: "Steam",
  },
  {
    title: "Игры и ключи",
    description: "Огромный каталог лицензионных ключей и аккаунтов для Steam, Epic, PlayStation и Xbox.",
    icon: "target",
    badge: "Каталог",
  },
  {
    title: "Подписки и сервисы",
    description: "Xbox Game Pass, PS Plus, Discord Nitro, Spotify и другие подписки по низким ценам.",
    icon: "link",
    badge: "Подписки",
  },
  {
    title: "Поддержка 24/7",
    description: "Живая поддержка в чате и Telegram в любое время суток. Поможем с заказом и вернём деньги при проблеме.",
    icon: "brain",
    badge: "24/7",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Всё для геймеров — быстро, безопасно и по выгодным ценам
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}