
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useFavourites } from "@/contexts/FavouritesContext";
import { useCart } from "@/contexts/CartContext";
import { Heart, ShoppingCart, Star, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Favourites = () => {
  const { favourites, removeFromFavourites } = useFavourites();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleRemoveFromFavourites = (item) => {
    removeFromFavourites(item.id);
    toast({
      title: "Removed from Favourites",
      description: `${item.name} has been removed from your favourites.`,
    });
  };

  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    });
    
    toast({
      title: "Added to Cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const handleMoveToCart = (item) => {
    handleAddToCart(item);
    removeFromFavourites(item.id);
    toast({
      title: "Moved to Cart",
      description: `${item.name} has been moved to your cart.`,
    });
  };

  if (favourites.length === 0) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Favourites is Empty</h1>
          <p className="text-gray-600 mb-8">
            Explore our products and add your favorites to this list.
          </p>
          <Link to="/shop">
            <Button size="lg">Start Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Favourites</h1>
          <p className="text-gray-600">
            You have {favourites.length} {favourites.length === 1 ? 'item' : 'items'} in your favourites
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favourites.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <button
                    onClick={() => handleRemoveFromFavourites(item)}
                    className="absolute top-2 right-2 p-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-colors"
                    title="Remove from favourites"
                  >
                    <Heart className="h-4 w-4 fill-current" />
                  </button>
                </div>
                
                <div className="p-4">
                  <Link to={`/product/${item.id}`}>
                    <h3 className="font-semibold text-gray-900 mb-2 hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                  </Link>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600 ml-1">
                        {item.rating}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-600">{item.category}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      ${item.price}
                    </span>
                    
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleRemoveFromFavourites(item)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleMoveToCart(item)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bulk Actions */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button
            variant="outline"
            onClick={() => {
              favourites.forEach(item => handleAddToCart(item));
              toast({
                title: "All Items Added to Cart",
                description: `${favourites.length} items have been added to your cart.`,
              });
            }}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add All to Cart
          </Button>
          
          <Link to="/shop">
            <Button variant="outline">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
