
import React from "react";
import { PresentationNavigation } from "@/components/ui/presentation-navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, LaptopCode, Server, SmartphoneIcon } from "lucide-react";

const Developer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20 pb-24">
      <main className="container px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold tracking-tight md:text-5xl">Разработчик</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Создает программы, сайты и приложения, используя языки программирования и технологии
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
                    <Code className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Языки программирования</h3>
                      <p className="text-sm text-muted-foreground">JavaScript, Python, Java, C#, PHP</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Globe className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Веб-технологии</h3>
                      <p className="text-sm text-muted-foreground">HTML, CSS, React, Angular, Vue</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Server className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Бэкенд</h3>
                      <p className="text-sm text-muted-foreground">Node.js, Django, Express, Spring</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <LaptopCode className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Инструменты</h3>
                      <p className="text-sm text-muted-foreground">Git, Docker, VS Code, IntelliJ IDEA</p>
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
                  <Globe className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Веб-разработчик</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Создание веб-сайтов и веб-приложений с использованием современных фреймворков.
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">CSS</Badge>
                  <Badge variant="outline">Node.js</Badge>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="mb-2 flex items-center gap-2">
                  <SmartphoneIcon className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Мобильный разработчик</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Разработка мобильных приложений для Android и iOS платформ.
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge variant="outline">React Native</Badge>
                  <Badge variant="outline">Swift</Badge>
                  <Badge variant="outline">Kotlin</Badge>
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
                      <p className="font-semibold">70-120 тыс. ₽</p>
                    </div>
                    <div className="rounded-md bg-primary/10 px-4 py-2 text-center">
                      <span className="text-sm">Middle</span>
                      <p className="font-semibold">150-250 тыс. ₽</p>
                    </div>
                    <div className="rounded-md bg-primary/10 px-4 py-2 text-center">
                      <span className="text-sm">Senior</span>
                      <p className="font-semibold">300-500 тыс. ₽</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="mb-2 font-medium">Требуемое образование:</h3>
                  <p className="text-muted-foreground">
                    Высшее техническое образование или курсы программирования, но возможно самообучение
                  </p>
                </div>
                
                <div>
                  <h3 className="mb-2 font-medium">Востребованность:</h3>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-[90%] rounded-full bg-primary"></div>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Очень высокая (90%)
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

export default Developer;
