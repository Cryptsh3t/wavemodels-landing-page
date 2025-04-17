
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqItems = [
    {
      question: "Как начать работу с WAVEMODELS?",
      answer: "Для начала работы с нами, заполните анкету на нашем сайте. После этого мы с вами свяжемся с вами для обсуждения деталей сотрудничества и ответит на все ваши вопросы.",
    },
    {
      question: "Какие требования к моделям?",
      answer: "Мы ценим индивидуальность каждой модели. Основные требования: возраст от 18 лет, ответственность, пунктуальность и желание развиваться в модельной сфере.",
    },
    {
      question: "Что если у меня нет опыта?",
      answer: "Опыт не обязателен. Мы предоставляем полное обучение и поддержку на каждом этапе. Наши менторы помогут вам развить необходимые навыки и достичь успеха.",
    },
    {
      question: "Какая поддержка предоставляется моделям?",
      answer: "Каждая модель получает персонального наставника, доступного 24/7. Мы помогаем с техническими вопросами, психологической поддержкой и профессиональным развитием.",
    },
    {
      question: "Что делать после подачи анкеты?",
      answer: "После получения анкеты наш представитель свяжется с вами в течение 24 часов для обсуждения деталей сотрудничества.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-16">
          <HelpCircle className="w-8 h-8 text-gold" />
          <h2 className="text-gold text-3xl md:text-4xl font-bold text-center">
            FAQ
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gold/20 rounded-lg px-6 bg-black/50 backdrop-blur"
              >
                <AccordionTrigger className="text-white hover:text-gold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
