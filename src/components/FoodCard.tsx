
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface FoodCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  ingredients?: string[];
  detailLink?: string;
}

const FoodCard = ({
  title,
  description,
  imageSrc = "/placeholder.svg",
  ingredients,
  detailLink,
}: FoodCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {ingredients && (
        <CardContent>
          <h4 className="text-sm font-medium mb-2">Ингредиенты:</h4>
          <ul className="list-disc list-inside text-sm text-muted-foreground">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </CardContent>
      )}
      {detailLink && (
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link to={detailLink}>Подробнее</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export { FoodCard };
