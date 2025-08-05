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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(55, 48, 163, 0.8), rgba(126, 34, 206, 0.7)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Sahil Jadhav
            </span>
          </h1>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
            AI & Data Science Engineer
          </p>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Skilled in Machine Learning, Data Analytics, and Intelligent System Development. 
            Driving Innovation with AI to solve real-world problems.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button 
            variant="hero" 
            size="xl"
            className="group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Contact Me
          </Button>
          
          <Button 
            variant="glass" 
            size="xl"
            className="group"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/resume.pdf';
              link.download = 'Sahil_Jadhav_Resume.pdf';
              link.click();
            }}
          >
            <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="animate-bounce"
        >
          <ArrowDown 
            className="mx-auto h-8 w-8 text-white/70 cursor-pointer hover:text-white transition-colors"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;