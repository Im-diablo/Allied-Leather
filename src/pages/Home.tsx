import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/sections/Hero";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Stats } from "@/components/sections/Stats";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <Stats />
      
      {/* Features Section */}
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
              Why Choose <span className="text-gradient">Our Products</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-leading quality, innovative design, and uncompromising safety standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Premium Protection",
                description: "Advanced safety features and certified protection standards for maximum security"
              },
              {
                icon: Award,
                title: "Award Winning",
                description: "Recognized by industry leaders for innovation and quality excellence"
              },
              {
                icon: Users,
                title: "Trusted by Thousands",
                description: "Join thousands of satisfied customers who trust our premium products"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-premium group cursor-pointer"
              >
                <div className="mb-6">
                  <feature.icon className="w-12 h-12 text-primary group-hover:animate-glow" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center card-premium"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Experience <span className="text-gradient">Premium Quality</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Explore our complete product range and find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-premium group">
              View All Products
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="btn-outline">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;