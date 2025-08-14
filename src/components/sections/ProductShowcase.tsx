import { motion } from "framer-motion";
import { ArrowRight, Shield, Hand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const ProductShowcase = () => {
  const products = [
    {
      title: "Protective Shoes",
      description: "Premium safety footwear with steel toe protection, slip resistance, and all-day comfort for industrial environments.",
      icon: Shield,
      image: "/placeholder.svg",
      link: "/protective-shoes",
      features: ["Steel Toe Protection", "Slip Resistant", "Waterproof", "Electrical Hazard Protection"]
    },
    {
      title: "Industrial Gloves",
      description: "Professional-grade hand protection with cut resistance, chemical protection, and superior grip for every application.",
      icon: Hand,
      image: "/placeholder.svg",
      link: "/industrial-gloves",
      features: ["Cut Resistant", "Chemical Protection", "Superior Grip", "Multiple Protection Levels"]
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Our <span className="text-gradient">Product Lines</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of premium safety equipment, 
            each designed to meet the highest industry standards.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card-premium group hover:scale-[1.02] transition-all duration-500"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <product.icon className="w-8 h-8 text-primary group-hover:animate-glow" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-3">{product.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </div>
              </div>

              {/* Product Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl mb-6 flex items-center justify-center">
                <product.icon className="w-20 h-20 text-primary/50 animate-float" />
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {product.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to={product.link}>
                <Button className="btn-premium w-full group">
                  Explore {product.title}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};