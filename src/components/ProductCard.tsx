import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
  features: string[];
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, rotateY: 5, rotateX: 5 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="card-3d group cursor-pointer h-full flex flex-col perspective-container"
    >
      {/* Enhanced 3D Product Image */}
      <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative transform-3d">
        <motion.div 
          className="text-center"
          whileHover={{ scale: 1.1, rotateY: 10 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:animate-glow transform-3d"
            animate={{ rotateZ: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-10 h-10 bg-primary/50 rounded" />
          </motion.div>
          <p className="text-xs text-muted-foreground">Product Image</p>
        </motion.div>
        
        {/* 3D Overlay Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "fill-primary text-primary"
                    : "text-muted-foreground/50"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({product.rating})</span>
        </div>

        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {product.description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <div className="grid grid-cols-2 gap-2">
            {product.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-xs">
                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground truncate">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price and Button */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl font-bold text-primary">{product.price}</div>
            <div className="text-xs text-muted-foreground">Per Unit</div>
          </div>
          
          <Button className="w-full btn-premium group">
            View Details
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};