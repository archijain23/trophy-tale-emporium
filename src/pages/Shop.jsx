
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Search, Filter, Grid, List } from "lucide-react";
import { useFavourites } from "@/contexts/FavouritesContext";
import { useToast } from "@/hooks/use-toast";

const products = [
  {
    id: "1",
    name: "Golden Achievement Trophy",
    price: 29.99,
    image: "/placeholder.svg",
    rating: 4.8,
    category: "Trophies",
    description: "Beautiful golden trophy perfect for celebrating achievements and victories.",
    isNew: true
  },
  {
    id: "2",
    name: "Elegant Photo Frame",
    price: 24.99,
    image: "/placeholder.svg",
    rating: 4.9,
    category: "Photo Frames",
    description: "Premium wooden frame with custom engraving options for your precious memories.",
    isNew: false
  },
  {
    id: "3",
    name: "Wooden Key Holder",
    price: 19.99,
    image: "/placeholder.svg",
    rating: 4.7,
    category: "Key Holders",
    description: "Handcrafted wooden key holder with personalized text and design options.",
    isNew: true
  },
  {
    id: "4",
    name: "Custom Photo Calendar",
    price: 15.99,
    image: "/placeholder.svg",
    rating: 4.6,
    category: "Calendars",
    description: "Personalized calendar featuring your favorite photos and important dates.",
    isNew: false
  },
  {
    id: "5",
    name: "Silver Sports Medal",
    price: 22.99,
    image: "/placeholder.svg",
    rating: 4.8,
    category: "Trophies",
    description: "Professional silver medal with custom ribbon and engraving options.",
    isNew: false
  },
  {
    id: "6",
    name: "Decorative Picture Frame",
    price: 18.99,
    image: "/placeholder.svg",
    rating: 4.5,
    category: "Photo Frames",
    description: "Ornate decorative frame perfect for displaying special photographs.",
    isNew: true
  }
];

const categories = ["All", "Trophies", "Photo Frames", "Key Holders", "Calendars"];

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid");
  const { addToFavourites, removeFromFavourites, isFavourite } = useFavourites();
  const { toast } = useToast();

  const handleToggleFavourite = (product) => {
    if (isFavourite(product.id)) {
      removeFromFavourites(product.id);
      toast({
        title: "Removed from Favourites",
        description: `${product.name} has been removed from your favourites.`,
      });
    } else {
      addToFavourites(product);
      toast({
        title: "Added to Favourites",
        description: `${product.name} has been added to your favourites.`,
      });
    }
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop Our Products</h1>
        <p className="text-xl text-gray-600">Discover our wide range of customizable products</p>
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-500" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded px-3 py-2 text-sm"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="flex rounded-lg border p-1">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("grid")}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Products Grid/List */}
      {filteredAndSortedProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
        </div>
      ) : (
        <div className={viewMode === "grid" 
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          : "space-y-4"
        }>
          {filteredAndSortedProducts.map((product) => (
            <Card key={product.id} className={`hover:shadow-lg transition-shadow ${
              viewMode === "list" ? "flex flex-row" : ""
            }`}>
              <div className={viewMode === "list" ? "w-48 flex-shrink-0" : ""}>
                <div className="relative aspect-square bg-gray-100 overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {product.isNew && (
                    <Badge className="absolute top-2 left-2 bg-primary">New</Badge>
                  )}
                  <button 
                    onClick={() => handleToggleFavourite(product)}
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                  >
                    <Heart className={`h-4 w-4 ${isFavourite(product.id) ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                  </button>
                </div>
              </div>
              
              <div className={viewMode === "list" ? "flex-1" : ""}>
                <CardHeader className={viewMode === "list" ? "pb-2" : ""}>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{product.category}</Badge>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription className={viewMode === "list" ? "" : "line-clamp-2"}>
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className={viewMode === "list" ? "pt-0" : ""}>
                  <div className={`flex items-center ${viewMode === "list" ? "justify-between" : "justify-between"}`}>
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <Button size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
