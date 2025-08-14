import { motion } from "framer-motion";
import { Hand, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";

const industrialGloves = [
  {
    id: 1,
    name: "MaxGrip Cut Resistant",
    price: "$24.99",
    image: "/placeholder.svg",
    rating: 4.9,
    features: ["Cut Level A5", "Nitrile Palm", "Touchscreen Compatible", "Machine Washable"],
    description: "Superior cut resistance with excellent dexterity for precision work."
  },
  {
    id: 2,
    name: "HeatShield Thermal",
    price: "$34.99",
    image: "/placeholder.svg",
    rating: 4.8,
    features: ["Heat Resistant", "Kevlar Fiber", "Extended Cuff", "Steam Resistant"],
    description: "Advanced thermal protection for high-temperature applications."
  },
  {
    id: 3,
    name: "ChemGuard Chemical",
    price: "$29.99",
    image: "/placeholder.svg",
    rating: 4.7,
    features: ["Chemical Resistant", "Neoprene Coating", "Textured Grip", "Liquid Proof"],
    description: "Chemical-resistant gloves for handling hazardous materials safely."
  },
  {
    id: 4,
    name: "FlexFit Mechanics",
    price: "$19.99",
    image: "/placeholder.svg",
    rating: 4.6,
    features: ["Synthetic Leather", "Reinforced Palm", "Adjustable Cuff", "Breathable"],
    description: "Durable mechanics gloves with superior grip and flexibility."
  },
  {
    id: 5,
    name: "UltraGrip Disposable",
    price: "$12.99",
    image: "/placeholder.svg",
    rating: 4.5,
    features: ["Nitrile Material", "Powder Free", "Textured Fingertips", "100 Count Box"],
    description: "High-quality disposable gloves for medical and food service applications."
  },
  {
    id: 6,
    name: "ArcShield Electrical",
    price: "$89.99",
    image: "/placeholder.svg",
    rating: 4.9,
    features: ["Arc Flash Protection", "Class 00", "Leather Protectors", "ASTM Certified"],
    description: "Electrical safety gloves with certified arc flash and shock protection."
  }
];

const IndustrialGloves = () => {
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
            <Hand className="w-16 h-16 text-primary animate-glow" />
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Industrial <span className="text-gradient">Gloves</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Professional-grade hand protection for every industrial application. 
            From cut resistance to chemical protection, we have the right glove for your needs.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span>ANSI/ISEA Certified</span>
            <span className="mx-2">•</span>
            <span>Multiple Protection Levels</span>
            <span className="mx-2">•</span>
            <span>Bulk Pricing Available</span>
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industrialGloves.map((product, index) => (
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

        {/* Protection Levels Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Protection Levels Guide
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { level: "A1", description: "Light cut protection", color: "from-green-500/20 to-green-600/20" },
              { level: "A3", description: "Medium cut protection", color: "from-yellow-500/20 to-yellow-600/20" },
              { level: "A5", description: "High cut protection", color: "from-orange-500/20 to-orange-600/20" },
              { level: "A9", description: "Extreme cut protection", color: "from-red-500/20 to-red-600/20" }
            ].map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card-premium text-center bg-gradient-to-br ${level.color}`}
              >
                <div className="text-2xl font-bold text-primary mb-2">{level.level}</div>
                <p className="text-sm text-muted-foreground">{level.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center card-premium"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Bulk Orders & Custom Solutions
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Looking for bulk quantities or custom glove solutions? Contact our team for special pricing and customization options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-premium group">
              Request Bulk Quote
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="btn-outline">
              Download Catalog
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IndustrialGloves;