
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProfessionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
  linkTo: string;
  salary?: string;
}

export const ProfessionCard: React.FC<ProfessionCardProps> = ({
  title,
  description,
  icon,
  skills,
  linkTo,
  salary
}) => {
  return (
    <Card className="h-full overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="rounded-full bg-primary/10 p-3 text-primary">
          {icon}
        </div>
        <div>
          <CardTitle>{title}</CardTitle>
          {salary && <CardDescription className="mt-1">Зарплата: {salary}</CardDescription>}
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="secondary" className="bg-secondary/50">
              {skill}
            </Badge>
          ))}
          {skills.length > 3 && (
            <Badge variant="outline">+{skills.length - 3}</Badge>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={linkTo} className="flex items-center justify-center gap-2">
            Подробнее <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
