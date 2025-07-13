
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCart } from "@/contexts/CartContext";
import { useFavourites } from "@/contexts/FavouritesContext";
import { useToast } from "@/hooks/use-toast";
import { Heart, ShoppingCart, Star, Filter } from "lucide-react";

// Mock products data
const allProducts = [
  {
    id: 1,
    name: "Golden Victory Trophy",
    price: 199.99,
    originalPrice: 249.99,
    image: "/placeholder.svg",
    category: "trophies",
    rating: 4.8,
    reviews: 124,
    description: "Premium golden trophy perfect for competitions and achievements.",
    isCustomizable: true,
  },
  {
    id: 2,
    name: "Silver Excellence Cup",
    price: 149.99,
    image: "/placeholder.svg",
    category: "trophies",
    rating: 4.6,
    reviews: 89,
    description: "Elegant silver cup for sports and academic excellence.",
    isCustomizable: true,
  },
  {
    id: 3,
    name: "Crystal Achievement Frame",
    price: 89.99,
    image: "/placeholder.svg",
    category: "photo-frames",
    rating: 4.9,
    reviews: 156,
    description: "Beautiful crystal frame for certificates and photos.",
    isCustomizable: true,
  },
  {
    id: 4,
    name: "Wooden Photo Frame",
    price: 34.99,
    image: "/placeholder.svg",
    category: "photo-frames",
    rating: 4.5,
    reviews: 67,
    description: "Classic wooden frame with personalization options.",
    isCustomizable: true,
  },
  {
    id: 5,
    name: "Metal Key Holder",
    price: 24.99,
    image: "/placeholder.svg",
    category: "key-holders",
    rating: 4.4,
    reviews: 43,
    description: "Durable metal key holder with custom engraving.",
    isCustomizable: true,
  },
  {
    id: 6,
    name: "Wall Calendar 2024",
    price: 19.99,
    image: "/placeholder.svg",
    category: "calendars",
    rating: 4.3,
    reviews: 78,
    description: "Personalized wall calendar with your photos.",
    isCustomizable: true,
  },
];

const categoryNames = {
  trophies: "Trophies",
  "photo-frames": "Photo Frames",
  "key-holders": "Key Holders",
  calendars: "Calendars",
};

const Category = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("name");
  const [filterBy, setFilterBy] = useState("all");
  const { addToCart } = useCart();
  const { addToFavourites, favourites } = useFavourites();
  const { toast } = useToast();

  useEffect(() => {
    // Filter products by category
    let filteredProducts = category 
      ? allProducts.filter(product => product.category === category)
      : allProducts;

    // Apply additional filters
    if (filterBy !== "all") {
      if (filterBy === "on-sale") {
        filteredProducts = filteredProducts.filter(product => product.originalPrice);
      } else if (filterBy === "high-rated") {
        filteredProducts = filteredProducts.filter(product => product.rating >= 4.5);
      }
    }

    // Sort products
    filteredProducts.sort((a, b) => {
      switch (sortBy) {
        case "price-low": return a.price - b.price;
        case "price-high": return b.price - a.price;
        case "rating": return b.rating - a.rating;
        case "name":
        default: return a.name.localeCompare(b.name);
      }
    });

    setProducts(filteredProducts);
  }, [category, sortBy, filterBy]);

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleAddToFavourites = (product) => {
    const favouriteItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: categoryNames[product.category] || "Product",
      rating: product.rating,
    };
    
    addToFavourites(favouriteItem);
    toast({
      title: "Added to Favourites",
      description: `${product.name} has been added to your favourites.`,
    });
  };

  const isFavourite = (productId) => {
    return favourites.some(fav => fav.id === productId);
  };

  const categoryName = category ? categoryNames[category] : "All Products";

  return (
    <Layout>
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{categoryName}</h1>
            <p className="text-gray-600">
              Discover our collection of high-quality {categoryName.toLowerCase()}.
            </p>
          </div>

          {/* Filters and Sorting */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Products</SelectItem>
                  <SelectItem value="on-sale">On Sale</SelectItem>
                  <SelectItem value="high-rated">High Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Products Grid */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      {product.originalPrice && (
                        <Badge className="absolute top-2 left-2 bg-red-500">
                          Sale
                        </Badge>
                      )}
                      <button
                        onClick={() => handleAddToFavourites(product)}
                        className={`absolute top-2 right-2 p-2 rounded-full transition-colors ${
                          isFavourite(product.id)
                            ? "bg-pink-500 text-white"
                            : "bg-white text-gray-400 hover:text-pink-500"
                        }`}
                      >
                        <Heart className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="p-4">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-semibold text-gray-900 mb-2 hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600 ml-1">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-lg font-bold text-primary">
                            ${product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through ml-2">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>
                        
                        <Button
                          size="sm"
                          onClick={() => handleAddToCart(product)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters or browse other categories.
              </p>
              <Link to="/shop">
                <Button>Browse All Products</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Category;
