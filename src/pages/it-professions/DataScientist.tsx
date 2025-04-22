
import React from "react";
import { PresentationNavigation } from "@/components/ui/presentation-navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Database, BarChart, LineChart, Brain, Telescope } from "lucide-react";

const DataScientist = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20 pb-24">
      <main className="container px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold tracking-tight md:text-5xl">Дата-сайентист</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Анализирует большие объёмы данных для получения ценных выводов и создания предиктивных моделей
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="overflow-hidden">
            <div className="bg-primary px-6 py-4 text-primary-foreground">
              <h2 className="text-xl font-semibold">Ключевые навыки</h2>
            </div>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Database className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Работа с данными</h3>
                      <p className="text-sm text-muted-foreground">SQL, Pandas, ETL-процессы, BigData</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Brain className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Машинное обучение</h3>
                      <p className="text-sm text-muted-foreground">Scikit-learn, TensorFlow, PyTorch</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <LineChart className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Статистика</h3>
                      <p className="text-sm text-muted-foreground">A/B-тесты, регрессия, вероятность</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <BarChart className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Визуализация</h3>
                      <p className="text-sm text-muted-foreground">Matplotlib, Seaborn, Tableau, PowerBI</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="bg-primary px-6 py-4 text-primary-foreground">
              <h2 className="text-xl font-semibold">Направления специализации</h2>
            </div>
            <CardContent className="grid gap-4 p-6">
              <div className="rounded-lg border p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">ML-инженер</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Создание и внедрение моделей машинного обучения в производственную среду.
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge variant="outline">TensorFlow</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Kubernetes</Badge>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Telescope className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Аналитик данных</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Анализ и интерпретация данных для принятия бизнес-решений.
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge variant="outline">SQL</Badge>
                  <Badge variant="outline">Tableau</Badge>
                  <Badge variant="outline">Excel</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Перспективы и зарплаты</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-medium">Средняя зарплата:</h3>
                  <div className="flex items-center gap-4">
                    <div className="rounded-md bg-primary/10 px-4 py-2 text-center">
                      <span className="text-sm">Junior</span>
                      <p className="font-semibold">100-150 тыс. ₽</p>
                    </div>
                    <div className="rounded-md bg-primary/10 px-4 py-2 text-center">
                      <span className="text-sm">Middle</span>
                      <p className="font-semibold">180-300 тыс. ₽</p>
                    </div>
                    <div className="rounded-md bg-primary/10 px-4 py-2 text-center">
                      <span className="text-sm">Senior</span>
                      <p className="font-semibold">350-600 тыс. ₽</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="mb-2 font-medium">Требуемое образование:</h3>
                  <p className="text-muted-foreground">
                    Высшее образование в области математики, статистики, информатики или смежных областях
                  </p>
                </div>
                
                <div>
                  <h3 className="mb-2 font-medium">Востребованность:</h3>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-[85%] rounded-full bg-primary"></div>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Очень высокая (85%)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <PresentationNavigation />
    </div>
  );
};

export default DataScientist;
