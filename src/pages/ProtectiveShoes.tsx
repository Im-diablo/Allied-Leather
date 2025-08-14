import { motion } from "framer-motion";
import { Shield, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";

const protectiveShoes = [
  {
    id: 1,
    name: "SafeGuard Pro Steel Toe",
    price: "$149.99",
    image: "/placeholder.svg",
    rating: 4.8,
    features: ["Steel Toe Protection", "Slip Resistant", "Waterproof", "Electrical Hazard Protection"],
    description: "Premium steel toe boots designed for maximum protection in industrial environments."
  },
  {
    id: 2,
    name: "ComfortShield Composite",
    price: "$129.99",
    image: "/placeholder.svg",
    rating: 4.9,
    features: ["Composite Toe", "Lightweight", "Breathable", "Anti-Fatigue"],
    description: "Lightweight composite toe shoes that don't compromise on protection or comfort."
  },
  {
    id: 3,
    name: "FlexGuard Athletic",
    price: "$109.99",
    image: "/placeholder.svg",
    rating: 4.7,
    features: ["Athletic Design", "Memory Foam", "Quick Dry", "Puncture Resistant"],
    description: "Athletic-style safety shoes perfect for active work environments."
  },
  {
    id: 4,
    name: "MaxProtect Heavy Duty",
    price: "$189.99",
    image: "/placeholder.svg",
    rating: 4.9,
    features: ["Metatarsal Guard", "Chemical Resistant", "Insulated", "Vibram Sole"],
    description: "Heavy-duty protection for the most demanding industrial applications."
  },
  {
    id: 5,
    name: "UltraComfort Slip-On",
    price: "$119.99",
    image: "/placeholder.svg",
    rating: 4.6,
    features: ["Easy Slip-On", "Ergonomic Design", "Non-Marking", "Machine Washable"],
    description: "Convenient slip-on design with professional-grade protection."
  },
  {
    id: 6,
    name: "WeatherShield All-Season",
    price: "$159.99",
    image: "/placeholder.svg",
    rating: 4.8,
    features: ["All-Weather", "Insulated", "Gore-Tex", "Aggressive Tread"],
    description: "All-season protection with superior weatherproofing technology."
  }
];

const ProtectiveShoes = () => {
  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-primary animate-glow" />
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Protective <span className="text-gradient">Shoes</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Premium safety footwear designed to protect while providing all-day comfort. 
            Each pair meets or exceeds industry safety standards.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span>Certified Safety Standards</span>
            <span className="mx-2">•</span>
            <span>Professional Grade Quality</span>
            <span className="mx-2">•</span>
            <span>Industry Leading Warranty</span>
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {protectiveShoes.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center card-premium"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Need Help Finding the Right Shoe?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our safety experts are here to help you find the perfect protective footwear for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-premium group">
              Contact Our Experts
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="btn-outline">
              Download Size Guide
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProtectiveShoes;