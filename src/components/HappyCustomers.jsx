
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

export const HappyCustomers = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Amazing quality and fast delivery. Highly recommended!"
    },
    {
      name: "Mike Davis",
      rating: 5,
      comment: "Perfect customization options. Exactly what I wanted."
    },
    {
      name: "Emily Chen",
      rating: 5,
      comment: "Great customer service and beautiful products."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Happy Customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <h4 className="font-semibold">{testimonial.name}</h4>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">"{testimonial.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
