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
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative AI and web solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="card-gradient shadow-card hover:shadow-elegant transition-all duration-500 border-0 h-full group cursor-pointer">
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-6 h-6 bg-white rounded opacity-80" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-gradient transition-colors">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-300 cursor-pointer"
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