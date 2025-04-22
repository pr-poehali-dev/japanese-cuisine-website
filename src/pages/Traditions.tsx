
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Hero } from "@/components/ui/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Traditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <Hero
        title="Традиции японской кухни"
        description="Погрузитесь в богатый мир кулинарных традиций Японии, где еда — это не просто питание, а настоящее искусство, философия и образ жизни."
      />

      <main className="flex-grow py-12 bg-background">
        <div className="container mx-auto px-4">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Философия японской кухни</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">⚖️</span> Баланс и гармония
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Японская кухня стремится к идеальному балансу вкусов, текстур и цветов. 
                    Блюда создаются с учетом пяти вкусов: сладкий, кислый, соленый, горький и умами.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🌿</span> Сезонность
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Использование сезонных ингредиентов является фундаментальным принципом. 
                    Каждое время года предлагает свои особые продукты, которые считаются наиболее вкусными и питательными.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🎨</span> Эстетика
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Презентация блюд — это искусство. Японские повара уделяют огромное внимание 
                    визуальной составляющей, создавая произведения искусства из еды.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-12" />

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Особенности сервировки</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="/placeholder.svg" 
                  alt="Традиционная сервировка" 
                  className="rounded-lg shadow-lg w-full h-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Посуда и сервировка</h3>
                <p>
                  Японская посуда тщательно подбирается для каждого блюда и сезона. 
                  Лакированные черные или красные деревянные чаши, керамические тарелки 
                  различных форм и размеров, бамбуковые подносы — все это неотъемлемая 
                  часть культуры еды. Важен также принцип асимметрии и пустого пространства.
                </p>
              </div>
              
              <div>
                <img 
                  src="/placeholder.svg" 
                  alt="Чайная церемония" 
                  className="rounded-lg shadow-lg w-full h-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Чайная церемония (Тядо)</h3>
                <p>
                  Японская чайная церемония — это ритуал приготовления и употребления 
                  порошкового зеленого чая (матча). Это не просто питье чая, а целая 
                  философия, включающая принципы гармонии (ва), уважения (кэй), 
                  чистоты (сей) и спокойствия (дзяку).
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          <section>
            <h2 className="text-3xl font-bold mb-6">Этикет за столом</h2>
            <div className="bg-accent/10 p-6 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-xl">🥢</span>
                  <div>
                    <h4 className="font-semibold">Палочки (хаси)</h4>
                    <p>Никогда не втыкайте палочки вертикально в рис — это напоминает ритуал на похоронах. Не передавайте еду с палочек на палочки — это также ассоциируется с похоронным обрядом.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <span className="text-xl">🙏</span>
                  <div>
                    <h4 className="font-semibold">Итадакимас и Готисосама</h4>
                    <p>Перед едой принято говорить "Итадакимас" (Я с благодарностью принимаю), а после — "Готисосама дэсита" (Это был прекрасный пир).</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <span className="text-xl">🍵</span>
                  <div>
                    <h4 className="font-semibold">Суп и чашка</h4>
                    <p>Суп и другие жидкие блюда можно пить прямо из чашки. Твердые ингредиенты суппа вылавливаются палочками.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <span className="text-xl">🍶</span>
                  <div>
                    <h4 className="font-semibold">Наливание напитков</h4>
                    <p>Принято наливать напитки друг другу, а не себе. Это знак взаимного уважения и заботы.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Traditions;
