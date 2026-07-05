import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Дмитрий Соколов",
    role: "Покупатель, 47 заказов",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Пополнил Steam на 3000 рублей — деньги пришли за минуту. Курс реально выгоднее, чем в других местах. Уже не первый раз беру здесь.",
  },
  {
    name: "Алина Веретенникова",
    role: "Покупатель, 12 заказов",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Купила ключ на новинку в день релиза, вышло дешевле официального магазина. Пришёл сразу на почту, активировался без проблем.",
  },
  {
    name: "Игорь Мельник",
    role: "Покупатель, 89 заказов",
    avatar: "/professional-woman-scientist.png",
    content:
      "Беру подписки Game Pass и PS Plus только тут. Поддержка в Telegram отвечает моментально, однажды даже помогли с активацией ночью.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Отзывы покупателей</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Тысячи геймеров уже совершают покупки у нас каждый день
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}