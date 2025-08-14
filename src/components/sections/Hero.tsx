import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slideshow } from "@/components/Slideshow";
import { Link } from "react-router-dom";

export const Hero = () => {
  const heroSlides = [
    {
      id: 1,
      title: "Premium Safety Solutions",
      description: "Industry-leading protective equipment designed for professionals who demand excellence, safety, and uncompromising quality.",
      image: "/placeholder.svg",
      cta: {
        text: "Explore Products",
        action: () => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
      }
    },
    {
      id: 2,
      title: "Protective Footwear Excellence",
      description: "Steel toe boots and safety shoes engineered for maximum protection without compromising comfort or style.",
      image: "/placeholder.svg",
      cta: {
        text: "View Shoes",
        action: () => window.location.href = "/protective-shoes"
      }
    },
    {
      id: 3,
      title: "Industrial Grade Hand Protection",
      description: "Cut-resistant gloves and industrial hand protection with superior grip and durability for demanding applications.",
      image: "/placeholder.svg",
      cta: {
        text: "View Gloves",
        action: () => window.location.href = "/industrial-gloves"
      }
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Enhanced 3D Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl float-3d" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl float-3d" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl float-3d" style={{ animationDelay: '-1.5s' }} />
        
        {/* Additional 3D floating elements */}
        <motion.div
          animate={{ rotateY: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-20 h-20 bg-primary/20 transform-3d"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
        <motion.div
          animate={{ rotateX: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-primary/15 rounded-lg transform-3d"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <motion.div
                animate={{ rotateY: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="transform-3d"
              >
                <Shield className="w-12 h-12 text-primary" />
              </motion.div>
              <Award className="w-12 h-12 text-primary animate-glow" style={{ animationDelay: '1s' }} />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Premium <span className="text-gradient">Safety</span>
              <br />Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Industry-leading protective equipment designed for professionals who demand 
              excellence, safety, and uncompromising quality in every product.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-8">
              <Link to="/protective-shoes">
                <Button className="btn-premium group text-lg px-8 py-4">
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="btn-outline text-lg px-8 py-4">
                  Contact Sales
                </Button>
              </Link>
            </div>

            {/* Enhanced Stats with 3D cards */}
            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
              {[
                { icon: Star, text: "Certified Standards", delay: 0 },
                { icon: Zap, text: "10,000+ Professionals", delay: 0.5 },
                { icon: Award, text: "Industry Leading", delay: 1 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: item.delay, duration: 0.5 }}
                  className="flex items-center gap-2 card-3d p-3 rounded-lg"
                >
                  <item.icon className="w-4 h-4 text-primary animate-pulse" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="perspective-container"
          >
            <Slideshow 
              slides={heroSlides} 
              autoPlay={true} 
              interval={6000}
              className="h-[500px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};