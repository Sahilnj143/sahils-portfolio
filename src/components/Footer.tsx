import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Sahilnj143",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sahil-namdev-jadhav-914196204/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:sahilnj143@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gradient">Sahil Jadhav</span>
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              AI & Data Science Engineer passionate about creating innovative solutions 
              that make a meaningful impact.
            </p>
          </div>

          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
                  onClick={() => window.open(link.href, '_blank')}
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-border pt-8"
          >
            <p className="text-muted-foreground flex items-center justify-center space-x-2">
              <span>© 2024 Sahil Jadhav. Built with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>and React</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;