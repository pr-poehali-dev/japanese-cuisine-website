
import { Hero } from "@/components/ui/hero";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { FoodCard } from "@/components/FoodCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <Hero
        title="Традиционная кухня Японии"
        description="Откройте для себя аутентичные вкусы и богатые традиции японской кулинарии. Погрузитесь в мир изысканных блюд, созданных с мастерством и уважением к ингредиентам."
        linkTo="/dishes"
        linkText="Исследовать блюда"
      />

      <main className="flex-grow">
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Популярные блюда</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FoodCard
                title="Суши"
                description="Изысканные рисовые комочки с морепродуктами"
                ingredients={["Рис", "Рыба", "Нори", "Васаби"]}
                detailLink="/dishes"
              />
              <FoodCard
                title="Рамен"
                description="Питательный суп с лапшой и множеством топпингов"
                ingredients={["Бульон", "Лапша", "Свинина", "Зеленый лук"]}
                detailLink="/dishes"
              />
              <FoodCard
                title="Темпура"
                description="Хрустящие овощи и морепродукты в легком кляре"
                ingredients={["Креветки", "Овощи", "Кляр", "Соус тентсую"]}
                detailLink="/dishes"
              />
            </div>
            <div className="mt-8 text-center">
              <Button asChild>
                <Link to="/dishes">Все блюда</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-accent/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Традиции японской кухни</h2>
                <p className="text-lg mb-6">
                  Японская кухня основана на принципе "уважения к ингредиентам" 
                  и стремлении подчеркнуть их натуральный вкус. Сезонность, 
                  презентация и баланс - ключевые аспекты, делающие эту кухню особенной.
                </p>
                <Button asChild>
                  <Link to="/traditions">Узнать о традициях</Link>
                </Button>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/placeholder.svg" 
                  alt="Японская чайная церемония" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
