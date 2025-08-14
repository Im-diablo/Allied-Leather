import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Globe } from "lucide-react";

export const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Satisfied Customers",
      description: "Professionals trust our products"
    },
    {
      icon: Award,
      value: "15+",
      label: "Industry Awards",
      description: "Recognition for excellence"
    },
    {
      icon: Globe,
      value: "50+",
      label: "Countries Served",
      description: "Global reach and distribution"
    },
    {
      icon: TrendingUp,
      value: "99.8%",
      label: "Customer Satisfaction",
      description: "Based on verified reviews"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-secondary/50 to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to quality and innovation has earned us the trust of 
            professionals worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10, 
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center card-3d group perspective-container"
            >
              <div className="mb-6 flex justify-center">
                <motion.div 
                  className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center transform-3d"
                  animate={{ rotateZ: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                >
                  <stat.icon className="w-8 h-8 text-primary group-hover:animate-glow" />
                </motion.div>
              </div>
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-primary mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="font-semibold mb-2">{stat.label}</div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};