
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: "Choose Your Product",
      description: "Browse our collection and select the perfect item"
    },
    {
      step: 2,
      title: "Customize",
      description: "Add your personal touch with custom text and images"
    },
    {
      step: 3,
      title: "Order & Delivery",
      description: "Place your order and receive your custom product"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <Card key={step.step} className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
