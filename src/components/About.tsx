import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
const profilePhoto = "/lovable-uploads/122818b4-2fff-440d-8e4b-50ddda23cbbf.png";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 text-gray-900">
            About <span className="text-gradient pulse-glow">Me</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating intelligent solutions that transform possibilities into reality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <Card className="card-gradient shadow-card hover:shadow-intense transition-spring p-8 border-0 hover-lift modern-glow">
              <div className="relative mx-auto w-80 h-80 mb-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 blur-xl" />
                <img
                  src={profilePhoto}
                  alt="Sahil Jadhav - AI & Data Science Engineer"
                  className="relative w-full h-full object-cover rounded-full shadow-intense border-4 border-primary/20 hover:scale-105 transition-spring"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-accent/10" />
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-accent to-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Final Year BTech Student in AI & Data Science
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Based in Nashik, Maharashtra, I'm passionate about building innovative solutions 
                that bridge the gap between artificial intelligence and real-world applications, 
                creating technology that genuinely improves lives.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div 
                className="flex items-start space-x-4 group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0 group-hover:scale-150 transition-spring neon-glow" />
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Current Focus</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Building full-stack web applications, AI-powered solutions, and embedded systems 
                    with edge AI capabilities that push the boundaries of what's possible.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-4 group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent to-secondary mt-2 flex-shrink-0 group-hover:scale-150 transition-spring neon-glow" />
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Learning Journey</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Constantly exploring Next.js, Edge AI, and Predictive Maintenance Systems 
                    to stay at the cutting edge of technological innovation.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-4 group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-secondary to-primary mt-2 flex-shrink-0 group-hover:scale-150 transition-spring neon-glow" />
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Mission</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Driving innovation with AI to solve complex problems and create meaningful, 
                    lasting impact in the technology industry and beyond.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;