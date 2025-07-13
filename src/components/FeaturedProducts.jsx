
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Golden Trophy",
      price: 29.99,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Custom Photo Frame",
      price: 19.99,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Wooden Key Holder",
      price: 15.99,
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover-scale">
              <CardHeader>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                <p className="text-primary font-bold text-xl mb-4">${product.price}</p>
                <Link to={`/product/${product.id}`}>
                  <Button className="w-full">View Details</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
