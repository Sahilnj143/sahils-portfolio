import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Sparkles } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SmartBiz AI Dashboard",
      description: "No-Code BI Dashboard Platform powered by AI for intelligent business analytics and data visualization.",
      tech: ["React", "TensorFlow", "Python", "D3.js", "Node.js"],
      github: "https://github.com/Sahilnj143",
      demo: "#",
      featured: true
    },
    {
      title: "Gearbox Fault Detection",
      description: "Machine Learning system for predictive maintenance using vibration analysis and signal processing.",
      tech: ["Python", "Scikit-learn", "OpenCV", "Signal Processing"],
      github: "https://github.com/Sahilnj143",
      demo: "#",
      featured: true
    },
    {
      title: "Automotive E-commerce Platform",
      description: "Full-stack e-commerce platform for automotive parts with real-time inventory and secure payments.",
      tech: ["TypeScript", "React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/Sahilnj143/AutoMotive-Parts-Shoppe-Website",
      demo: "#",
      featured: true
    },
    {
      title: "MockMaster AI Interview",
      description: "AI-powered interview preparation platform with real-time feedback and performance analytics.",
      tech: ["JavaScript", "AI/ML", "Natural Language Processing"],
      github: "https://github.com/Sahilnj143/MockMaster-Ai-Interview",
      demo: "#",
      featured: false
    },
    {
      title: "AI Medical Diagnosis System",
      description: "Intelligent medical diagnosis system using machine learning for early disease detection.",
      tech: ["Python", "TensorFlow", "Medical AI", "Data Analytics"],
      github: "https://github.com/Sahilnj143/Implementation-of-AI-Powered-Medical-Diagnosis-System-P2-",
      demo: "#",
      featured: false
    },
    {
      title: "Emergency Safety App",
      description: "IoT-enabled emergency response application for human safety with real-time location tracking.",
      tech: ["IoT", "Mobile Development", "Real-time Systems"],
      github: "https://github.com/Sahilnj143/Emergency_App",
      demo: "#",
      featured: false
    }
  ];

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 60, scale: 0.9 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-muted/20 via-background to-accent/5 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8">
            Featured <span className="text-gradient pulse-glow">Projects</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Innovative solutions spanning AI, web development, and IoT systems that push the boundaries of technology
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className={`card-gradient shadow-card hover:shadow-intense transition-spring border-0 h-full group cursor-pointer hover-lift modern-glow relative overflow-hidden ${project.featured ? 'lg:col-span-1 ring-2 ring-primary/20' : ''}`}>
                {project.featured && (
                  <div className="absolute top-6 right-6 z-20">
                    <div className="bg-gradient-to-r from-primary to-accent px-3 py-2 rounded-xl flex items-center space-x-2 shadow-glow">
                      <Sparkles className="w-4 h-4 text-white animate-pulse" />
                      <span className="text-sm text-white font-bold">Featured</span>
                    </div>
                  </div>
                )}
                
                <div className="p-8 h-full flex flex-col relative z-10">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-gradient transition-spring">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-2 bg-primary/10 border border-primary/30 text-primary rounded-xl text-sm font-semibold hover:bg-primary/20 hover:scale-110 transition-spring"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 group/btn font-bold"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="mr-2 h-5 w-5 group-hover/btn:scale-125 group-hover/btn:rotate-12 transition-spring" />
                      View Code
                    </Button>
                    
                    <Button
                      variant="gradient"
                      size="lg"
                      className="flex-1 group/btn"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-5 w-5 group-hover/btn:scale-125 group-hover/btn:-rotate-12 transition-spring" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;