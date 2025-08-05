import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating intelligent solutions that make a difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="card-gradient shadow-card hover:shadow-elegant transition-all duration-500 p-8 border-0">
              <div className="relative mx-auto w-64 h-64 mb-8">
                <img
                  src={profilePhoto}
                  alt="Sahil Jadhav"
                  className="w-full h-full object-cover rounded-full shadow-elegant"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20" />
              </div>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Final Year BTech Student in AI & Data Science
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Based in Nashik, Maharashtra, I'm passionate about building innovative solutions 
                that bridge the gap between artificial intelligence and real-world applications.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Current Focus:</strong> Building full-stack web applications, 
                  AI-powered solutions, and embedded systems with edge AI capabilities.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Learning:</strong> Next.js, Edge AI, 
                  and Predictive Maintenance Systems to stay at the forefront of technology.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Mission:</strong> Driving innovation with AI 
                  to solve complex problems and create meaningful impact in the tech industry.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;