import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const infrastructureItems = [
    {
      id: 'transport',
      icon: 'Train',
      title: 'Транспорт',
      description: 'Современная транспортная сеть с интеллектуальным управлением потоками'
    },
    {
      id: 'energy',
      icon: 'Zap',
      title: 'Энергетика',
      description: 'Возобновляемые источники энергии и умные энергосети'
    },
    {
      id: 'communication',
      icon: 'Wifi',
      title: 'Связь',
      description: '5G сети и высокоскоростной интернет по всему городу'
    },
    {
      id: 'ecology',
      icon: 'Leaf',
      title: 'Экология',
      description: 'Зеленые зоны и системы очистки воздуха'
    }
  ];

  const techItems = [
    {
      id: 'ai',
      icon: 'Brain',
      title: 'Искусственный интеллект',
      description: 'ИИ-системы для управления городскими процессами'
    },
    {
      id: 'iot',
      icon: 'Network',
      title: 'IoT',
      description: 'Интернет вещей для мониторинга и автоматизации'
    },
    {
      id: 'blockchain',
      icon: 'Lock',
      title: 'Блокчейн',
      description: 'Безопасные цифровые сервисы для жителей'
    },
    {
      id: 'robotics',
      icon: 'Bot',
      title: 'Робототехника',
      description: 'Автоматизированные системы обслуживания'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-vibrant opacity-10"></div>
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[hsl(var(--vibrant))] rounded-full blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[hsl(var(--cyan))] rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[hsl(var(--orange))] rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container relative z-10 text-center px-4">
          <div className="mb-12 animate-fade-in">
            <img 
              src="/img/84f76a69-71e1-45b8-8ca5-21e50ccd4e23.jpg" 
              alt="Smart City Logo" 
              className="w-48 h-48 mx-auto mb-8 object-contain drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="gradient-text">SMART CITY</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-12 font-medium animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Город будущего уже сегодня
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="gradient-vibrant text-white font-semibold text-lg px-8 py-6 hover:scale-105 transition-transform"
              onClick={() => document.getElementById('infrastructure')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Инфраструктура
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 font-semibold text-lg px-8 py-6 hover:scale-105 transition-transform"
              onClick={() => document.getElementById('tech')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Технологии
            </Button>
          </div>
        </div>
      </section>

      <section id="infrastructure" className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
              Инфраструктура
            </h2>
            <p className="text-xl text-muted-foreground">
              Современная городская среда для комфортной жизни
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructureItems.map((item, index) => (
              <Card
                key={item.id}
                className="p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setActiveSection(activeSection === item.id ? null : item.id)}
              >
                <div className="mb-4 gradient-cool p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  <Icon name={item.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
              Технологии и инновации
            </h2>
            <p className="text-xl text-muted-foreground">
              Цифровые решения для умного города
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {techItems.map((item, index) => (
              <Card
                key={item.id}
                className="p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setActiveSection(activeSection === item.id ? null : item.id)}
              >
                <div className="flex items-start gap-6">
                  <div className="gradient-vibrant p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon name={item.icon} className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-lg">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-cool opacity-10"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
            Присоединяйтесь к будущему
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Станьте частью инновационного городского сообщества
          </p>
          <Button size="lg" className="gradient-vibrant text-white font-semibold text-lg px-12 py-6 hover:scale-105 transition-transform">
            Узнать больше
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
