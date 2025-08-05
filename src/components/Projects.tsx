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
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions spanning AI, web development, and IoT systems
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className={`card-gradient shadow-card hover:shadow-elegant transition-all duration-500 border-0 h-full group cursor-pointer relative overflow-hidden ${project.featured ? 'lg:col-span-1' : ''}`}>
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-primary to-accent px-2 py-1 rounded-full flex items-center space-x-1">
                      <Sparkles className="w-3 h-3 text-white" />
                      <span className="text-xs text-white font-medium">Featured</span>
                    </div>
                  </div>
                )}
                
                <div className="p-6 h-full flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gradient transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                    
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 group/btn"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      Demo
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