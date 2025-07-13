
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const FeaturedCategories = () => {
  const categories = [
    {
      id: "trophies",
      name: "Trophies",
      description: "Award trophies for achievements",
      image: "/placeholder.svg"
    },
    {
      id: "photo-frames",
      name: "Photo Frames",
      description: "Custom photo frames",
      image: "/placeholder.svg"
    },
    {
      id: "key-holders",
      name: "Key Holders",
      description: "Personalized key holders",
      image: "/placeholder.svg"
    },
    {
      id: "calendars",
      name: "Calendars",
      description: "Custom calendars",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={`/category/${category.id}`}>
              <Card className="hover-scale h-full">
                <CardHeader>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg mb-2">{category.name}</CardTitle>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
