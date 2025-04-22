
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { FoodCard } from "@/components/FoodCard";
import { Hero } from "@/components/ui/hero";

const dishesData = [
  {
    id: 1,
    title: "Суши",
    description: "Искусно скатанные рисовые комочки с различными начинками из морепродуктов",
    ingredients: ["Рис", "Рыба (лосось, тунец)", "Нори (морские водоросли)", "Васаби", "Соевый соус"],
    imageSrc: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Сашими",
    description: "Тонко нарезанная сырая рыба, подаваемая со специальными соусами",
    ingredients: ["Свежая рыба", "Соевый соус", "Васаби", "Маринованный имбирь"],
    imageSrc: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Рамен",
    description: "Сытный суп на основе насыщенного бульона с лапшой и различными добавками",
    ingredients: ["Бульон (свиной, куриный или рыбный)", "Пшеничная лапша", "Чашу (свинина)", "Яйцо", "Зеленый лук"],
    imageSrc: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Темпура",
    description: "Морепродукты и овощи, обжаренные в легком воздушном кляре",
    ingredients: ["Креветки", "Овощи (сладкий перец, баклажан)", "Кляр", "Соус тентсую"],
    imageSrc: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Тонкацу",
    description: "Обжаренная в панировке свиная отбивная, подаваемая с капустой и соусом",
    ingredients: ["Свиная отбивная", "Панировочные сухари", "Капуста", "Соус тонкацу"],
    imageSrc: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Окономияки",
    description: "Японская жареная лепешка с различными начинками по выбору",
    ingredients: ["Капуста", "Яйца", "Мука", "Морепродукты или мясо", "Соус окономияки", "Майонез"],
    imageSrc: "/placeholder.svg"
  },
  {
    id: 7,
    title: "Удон",
    description: "Толстая пшеничная лапша, подаваемая в супе или с соусом",
    ingredients: ["Пшеничная лапша", "Бульон даши", "Зеленый лук", "Темпура (опционально)"],
    imageSrc: "/placeholder.svg"
  },
  {
    id: 8,
    title: "Мисо-суп",
    description: "Традиционный суп на основе пасты мисо и бульона даши",
    ingredients: ["Паста мисо", "Бульон даши", "Тофу", "Зеленый лук", "Водоросли вакаме"],
    imageSrc: "/placeholder.svg"
  },
  {
    id: 9,
    title: "Такояки",
    description: "Шарики из жидкого теста с кусочками осьминога внутри",
    ingredients: ["Тесто", "Осьминог", "Зеленый лук", "Имбирь", "Соус такояки", "Стружка бонито"],
    imageSrc: "/placeholder.svg"
  }
];

const Dishes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <Hero
        title="Популярные блюда Японии"
        description="Откройте для себя разнообразие и богатство вкусов традиционной японской кухни. Каждое блюдо отражает философию уважения к ингредиентам и мастерство приготовления."
      />

      <main className="flex-grow py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dishesData.map((dish) => (
              <FoodCard
                key={dish.id}
                title={dish.title}
                description={dish.description}
                ingredients={dish.ingredients}
                imageSrc={dish.imageSrc}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dishes;
