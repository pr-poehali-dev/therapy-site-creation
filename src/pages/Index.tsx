import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Психотерапия</h1>
            <div className="hidden md:flex gap-6">
              {['home', 'services', 'about', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'services' && 'Услуги'}
                  {section === 'about' && 'Обо мне'}
                  {section === 'education' && 'Образование'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 px-4 animate-fade-in">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-foreground leading-tight">
                Пространство для вашего внутреннего роста
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Приветствую вас в безопасном пространстве, где можно быть собой. 
                Я помогаю людям найти внутренние ресурсы и обрести гармонию с собой.
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => scrollToSection('contact')}
              >
                Записаться на консультацию
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://cdn.poehali.dev/projects/af79428c-6c0f-4287-bdb6-cfc210b70509/files/b8281b8b-22ac-47d7-b64c-1ccbd7fb052d.jpg"
                  alt="Психотерапевт"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 inset-0 bg-primary/20 rounded-3xl blur-3xl transform translate-x-4 translate-y-4"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Направления работы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Heart',
                title: 'Личная терапия',
                description: 'Работа с тревожностью, депрессией, самооценкой и жизненными кризисами'
              },
              {
                icon: 'Users',
                title: 'Семейная терапия',
                description: 'Помощь в разрешении конфликтов и улучшении отношений в паре'
              },
              {
                icon: 'Brain',
                title: 'Когнитивно-поведенческая терапия',
                description: 'Изменение деструктивных мыслей и поведенческих паттернов'
              },
              {
                icon: 'Sparkles',
                title: 'Гештальт-терапия',
                description: 'Осознавание себя в настоящем моменте и завершение незавершенных ситуаций'
              },
              {
                icon: 'Layers',
                title: 'Работа с травмой',
                description: 'Бережная проработка травматического опыта и восстановление ресурсов'
              },
              {
                icon: 'Compass',
                title: 'Экзистенциальная терапия',
                description: 'Поиск смысла, работа с выбором и личной ответственностью'
              }
            ].map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Обо мне</h2>
          <Card className="border-2">
            <CardContent className="pt-6 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Я верю, что каждый человек обладает внутренними ресурсами для изменений. 
                Моя задача — создать безопасное пространство, где вы сможете исследовать 
                свои чувства, мысли и найти собственные ответы на важные вопросы.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                В работе я использую интегративный подход, сочетая методы когнитивно-поведенческой 
                терапии, гештальт-терапии и экзистенциального подхода. Это позволяет подобрать 
                наиболее эффективные инструменты для каждого клиента.
              </p>
              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                  <span>Более 10 лет практики в психотерапии</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                  <span>Регулярная супервизия и личная терапия</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                  <span>Конфиденциальность и безопасность</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="education" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Образование и сертификаты</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                year: '2013',
                title: 'Московский государственный университет',
                subtitle: 'Магистр психологии, клиническая психология'
              },
              {
                year: '2015',
                title: 'Институт практической психологии',
                subtitle: 'Сертификат по когнитивно-поведенческой терапии'
              },
              {
                year: '2017',
                title: 'Московский гештальт институт',
                subtitle: 'Диплом гештальт-терапевта'
              },
              {
                year: '2019',
                title: 'European Association for Psychotherapy',
                subtitle: 'Европейский сертификат психотерапевта'
              },
              {
                year: '2021',
                title: 'Институт травматерапии',
                subtitle: 'Специализация по работе с ПТСР'
              },
              {
                year: '2023',
                title: 'Ассоциация экзистенциальной терапии',
                subtitle: 'Повышение квалификации'
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{item.year}</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                      <CardDescription className="text-base">{item.subtitle}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Записаться на консультацию</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Заполните форму, и я свяжусь с вами в ближайшее время
          </p>
          <Card className="border-2">
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" className="h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите, с чем вы хотели бы поработать..."
                    className="min-h-32 resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg h-12">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <Icon name="Mail" className="mx-auto text-primary" size={32} />
              <p className="font-medium">Email</p>
              <p className="text-muted-foreground">therapy@example.com</p>
            </div>
            <div className="space-y-2">
              <Icon name="Phone" className="mx-auto text-primary" size={32} />
              <p className="font-medium">Телефон</p>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
            <div className="space-y-2">
              <Icon name="MapPin" className="mx-auto text-primary" size={32} />
              <p className="font-medium">Адрес</p>
              <p className="text-muted-foreground">Москва, ул. Примерная, 1</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border bg-muted/20">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Психотерапевтическая практика. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
