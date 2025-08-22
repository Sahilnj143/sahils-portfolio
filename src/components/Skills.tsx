import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Core",
      skills: ["Python", "JavaScript", "TypeScript", "C/C++", "SQL"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Web & Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "AI/ML & Data",
      skills: ["TensorFlow", "Scikit-learn", "OpenCV", "Pandas", "NumPy"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "Node.js", "MongoDB"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "IoT & Embedded",
      skills: ["Arduino", "ESP8266", "Raspberry Pi", "Sensors", "Edge AI"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Design & UI/UX",
      skills: ["Shadcn UI", "Framer Motion", "Figma", "Responsive Design", "User Experience"],
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 40, scale: 0.9 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <section id="skills" className="py-32 bg-gradient-to-br from-background via-background/80 to-primary/5 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-full blur-3xl" />
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
            Tech <span className="text-gradient pulse-glow">Stack</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive arsenal of cutting-edge technologies for building innovative AI and web solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="card-gradient shadow-card hover:shadow-intense transition-spring border-0 h-full group cursor-pointer hover-lift modern-glow">
                <div className="p-8 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} mb-6 flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-spring neon-glow`}>
                    <div className="w-8 h-8 bg-white rounded-xl opacity-90 shadow-lg" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-gradient transition-spring">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary hover:bg-primary/20 hover:border-primary hover:text-primary hover:scale-110 transition-spring cursor-pointer font-medium shadow-card hover:shadow-glow"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;