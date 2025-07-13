
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, Heart, Award } from "lucide-react";

export const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "Premium materials and craftsmanship"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround on all orders"
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description: "Fully customizable designs"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence"
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
