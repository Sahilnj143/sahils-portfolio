import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden particle-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 20, 80, 0.85), rgba(60, 30, 120, 0.85), rgba(100, 50, 150, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse floating-animation" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full blur-3xl animate-pulse floating-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-3xl animate-pulse floating-animation" style={{ animationDelay: '4s' }} />
      </div>
      
      <motion.div 
        className="container mx-auto px-6 text-center relative z-10"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        <motion.div
          variants={fadeInUp}
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-white mb-6 sm:mb-8 leading-tight drop-shadow-2xl">
            Hi, I'm{" "}
            <span className="text-gradient pulse-glow inline-block hover:scale-105 transition-spring cursor-default">
              Sahil Jadhav
            </span>
          </h1>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mb-8"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-white font-semibold mb-4 max-w-3xl mx-auto drop-shadow-lg">
            AI & Data Science Engineer
          </p>
          <p className="text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md px-4">
            Skilled in Machine Learning, Data Analytics, and Intelligent System Development. 
            Driving Innovation with AI to solve real-world problems.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
        >
          <Button 
            variant="hero" 
            size="xl"
            className="group relative overflow-hidden"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Mail className="mr-3 h-6 w-6 group-hover:scale-125 group-hover:rotate-12 transition-transform relative z-10" />
            <span className="relative z-10 font-bold">Contact Me</span>
          </Button>
          
          <Button 
            variant="cyber" 
            size="xl"
            className="group relative overflow-hidden"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/lovable-uploads/0e9c0ad0-856e-4a89-a216-7c0772b12c5b.png';
              link.download = 'Sahil_Jadhav_Resume.png';
              link.click();
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/30 via-secondary/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Download className="mr-3 h-6 w-6 group-hover:scale-125 group-hover:-rotate-12 transition-transform relative z-10" />
            <span className="relative z-10 font-bold">Download Resume</span>
          </Button>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="animate-bounce"
        >
          <ArrowDown 
            className="mx-auto h-10 w-10 text-white cursor-pointer hover:text-gray-200 transition-colors shadow-lg drop-shadow-lg"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;