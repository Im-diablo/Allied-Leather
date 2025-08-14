import { motion } from "framer-motion";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            About <span className="text-gradient">Our Company</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading the industry with innovative solutions, premium quality, and unwavering commitment to excellence.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We are dedicated to creating premium products that combine safety, style, and innovation. 
                Our mission is to provide industry-leading solutions that protect and empower professionals 
                across various sectors.
              </p>
              <p className="text-lg text-muted-foreground">
                Through continuous research and development, we push the boundaries of what's possible, 
                ensuring our customers receive products that exceed their expectations and industry standards.
              </p>
            </div>
            <div className="card-premium">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                <Target className="w-24 h-24 text-primary animate-float" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "Striving for perfection in every product we create, ensuring the highest quality standards."
              },
              {
                icon: Users,
                title: "Customer Focus",
                description: "Putting our customers first, understanding their needs and exceeding their expectations."
              },
              {
                icon: TrendingUp,
                title: "Innovation",
                description: "Continuously pushing boundaries with cutting-edge technology and forward-thinking solutions."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-premium text-center group"
              >
                <div className="mb-6 flex justify-center">
                  <value.icon className="w-12 h-12 text-primary group-hover:animate-glow" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our diverse team of experts brings together decades of experience in product development, 
            safety engineering, and customer service.
          </p>
          <div className="card-premium">
            <div className="aspect-[2/1] bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Users className="w-20 h-20 text-primary mx-auto mb-4 animate-float" />
                <p className="text-muted-foreground">Team showcase coming soon</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;