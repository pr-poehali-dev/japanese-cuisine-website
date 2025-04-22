
import React from "react";
import { ProfessionCard } from "@/components/ProfessionCard";
import { PresentationNavigation } from "@/components/ui/presentation-navigation";
import { Code, Database, Shield, Layers, Palette } from "lucide-react";

const ITPresentation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20 pb-20">
      <header className="py-16 text-center">
        <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-5xl">
          Топ-5 востребованных IT-профессий
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Обзор самых перспективных профессий в сфере информационных технологий, их особенности и требуемые навыки
        </p>
      </header>

      <main className="container px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProfessionCard
            title="Разработчик"
            description="Создаёт программное обеспечение, веб-сайты и мобильные приложения с использованием различных языков программирования."
            icon={<Code className="h-6 w-6" />}
            skills={["JavaScript", "Python", "Java", "React", "Node.js"]}
            linkTo="/it-professions/developer"
            salary="от 100 000 ₽"
          />
          
          <ProfessionCard
            title="Дата-сайентист"
            description="Анализирует большие объёмы данных для получения ценных выводов и создания предиктивных моделей."
            icon={<Database className="h-6 w-6" />}
            skills={["Python", "R", "SQL", "Machine Learning", "Statistics"]}
            linkTo="/it-professions/data-scientist"
            salary="от 150 000 ₽"
          />
          
          <ProfessionCard
            title="DevOps-инженер"
            description="Объединяет процессы разработки и эксплуатации, автоматизируя их и обеспечивая непрерывную интеграцию."
            icon={<Layers className="h-6 w-6" />}
            skills={["CI/CD", "Docker", "Kubernetes", "Linux", "AWS/Azure"]}
            linkTo="/it-professions/devops"
            salary="от 180 000 ₽"
          />
          
          <ProfessionCard
            title="UI/UX дизайнер"
            description="Создаёт удобные и привлекательные интерфейсы для цифровых продуктов, ориентируясь на пользовательский опыт."
            icon={<Palette className="h-6 w-6" />}
            skills={["Figma", "Adobe XD", "Прототипирование", "User Research", "CSS"]}
            linkTo="/it-professions/ui-ux-designer"
            salary="от 120 000 ₽"
          />
          
          <ProfessionCard
            title="Специалист по кибербезопасности"
            description="Защищает информационные системы от взломов, утечек данных и других угроз безопасности."
            icon={<Shield className="h-6 w-6" />}
            skills={["Penetration Testing", "Криптография", "Networking", "Security Auditing"]}
            linkTo="/it-professions/cybersecurity"
            salary="от 160 000 ₽"
          />
        </div>
      </main>
      
      <PresentationNavigation />
    </div>
  );
};

export default ITPresentation;
