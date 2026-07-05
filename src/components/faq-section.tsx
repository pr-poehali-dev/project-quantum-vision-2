import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как быстро я получу свой заказ?",
      answer:
        "В большинстве случаев код или пополнение приходят на вашу почту моментально — в среднем за 30 секунд после оплаты. Некоторые товары могут обрабатываться до нескольких минут.",
    },
    {
      question: "Какие способы оплаты вы принимаете?",
      answer:
        "Мы принимаем банковские карты, СБП, электронные кошельки и криптовалюту. Все платежи проходят через защищённый шлюз с шифрованием данных.",
    },
    {
      question: "Безопасно ли пополнять Steam через вас?",
      answer:
        "Да, мы работаем только легальными способами и пополняем баланс без риска для вашего аккаунта. За всё время работы у нас тысячи успешных заказов и положительных отзывов.",
    },
    {
      question: "Что делать, если код не сработал?",
      answer:
        "Напишите в нашу поддержку — она работает круглосуточно. Мы оперативно проверим заказ, заменим товар или вернём деньги в полном объёме.",
    },
    {
      question: "Ключи и аккаунты лицензионные?",
      answer:
        "Да, мы продаём только официальные лицензионные ключи и проверенные аккаунты. На все товары действует гарантия работоспособности.",
    },
    {
      question: "Можно ли купить в подарок?",
      answer:
        "Конечно! Вы можете оформить заказ и передать полученный код кому угодно. Многие покупают у нас игры и подписки в подарок друзьям.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о доставке, оплате и безопасности покупок.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}