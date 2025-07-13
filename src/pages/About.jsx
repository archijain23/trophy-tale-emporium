
import { Award, Users, Heart, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "With over 15 years in custom manufacturing, Sarah founded Trophy Tale to help people celebrate life's special moments.",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      bio: "Michael brings creativity and precision to every custom piece, ensuring each item tells a unique story.",
      image: "/placeholder.svg"
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Experience Lead",
      bio: "Emily is passionate about delivering exceptional service and making every customer feel valued.",
      image: "/placeholder.svg"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "1000+", label: "Custom Items Created" },
    { number: "4.9★", label: "Average Rating" },
    { number: "5+", label: "Years of Experience" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Trophy Tale was born from a simple belief: every achievement, memory, and milestone deserves to be celebrated with something truly special and personal.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We're dedicated to creating beautiful, personalized items that capture the essence of your most important moments. Whether it's a trophy for a championship victory, a custom photo frame for a wedding, or a personalized calendar to keep your memories close, we believe every piece should tell a story.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to quality craftsmanship, attention to detail, and exceptional customer service has made us the trusted choice for thousands of customers who want to celebrate life's special occasions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/10 rounded-2xl p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Quality First</h3>
                <p className="text-sm text-gray-600">Premium materials and craftsmanship</p>
              </div>
              <div className="bg-yellow-100 rounded-2xl p-6 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Made with Love</h3>
                <p className="text-sm text-gray-600">Every piece crafted with care</p>
              </div>
              <div className="bg-green-100 rounded-2xl p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Customer Focus</h3>
                <p className="text-sm text-gray-600">Your satisfaction is our priority</p>
              </div>
              <div className="bg-blue-100 rounded-2xl p-6 text-center">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-sm text-gray-600">Striving for perfection in every detail</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Trophy Tale who make your custom creations come to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Drives Us
              </h2>
              <p className="text-xl text-gray-600">
                Our core values guide everything we do
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Craftsmanship</h3>
                <p className="text-gray-600 text-lg">
                  We believe in the power of skilled hands and attention to detail. Every piece we create is a testament to traditional craftsmanship enhanced with modern techniques.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalization</h3>
                <p className="text-gray-600 text-lg">
                  Your story is unique, and your custom items should be too. We work closely with each customer to ensure every piece perfectly captures their vision and meaning.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Excellence</h3>
                <p className="text-gray-600 text-lg">
                  From your first inquiry to the moment you receive your custom piece, we're committed to providing an exceptional experience that exceeds your expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
