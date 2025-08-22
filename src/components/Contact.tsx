import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sj747251@gmail.com",
      href: "mailto:sj747251@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9021077932",
      href: "tel:+919021077932"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Nashik, Maharashtra, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-background via-accent/5 to-primary/10 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-primary/15 to-accent/15 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-accent/15 to-secondary/15 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }} />
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
            Get In <span className="text-gradient pulse-glow">Touch</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next groundbreaking AI project? Let's build something extraordinary together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold mb-8 text-gradient">Let's Connect</h3>
            
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <Card className="card-gradient shadow-card hover:shadow-intense transition-spring border-0 p-6 group cursor-pointer hover-lift modern-glow">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-spring neon-glow">
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground group-hover:text-gradient transition-spring">{info.title}</h4>
                      <p className="text-muted-foreground text-lg">{info.value}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="card-gradient shadow-card hover:shadow-intense border-0 p-10 modern-glow hover-lift">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-lg font-bold text-foreground mb-3">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-14 text-lg bg-background/50 border-2 border-primary/30 focus:border-primary hover:border-primary/60 transition-spring rounded-xl"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-lg font-bold text-foreground mb-3">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-14 text-lg bg-background/50 border-2 border-primary/30 focus:border-primary hover:border-primary/60 transition-spring rounded-xl"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-lg font-bold text-foreground mb-3">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="text-lg bg-background/50 border-2 border-primary/30 focus:border-primary hover:border-primary/60 transition-spring resize-none rounded-xl"
                    placeholder="Tell me about your project or how we can collaborate to create something amazing..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="xl" 
                  className="w-full group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Send className="mr-3 h-6 w-6 group-hover:scale-125 group-hover:-rotate-12 transition-spring relative z-10" />
                  <span className="relative z-10 font-bold text-lg">Send Message</span>
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;