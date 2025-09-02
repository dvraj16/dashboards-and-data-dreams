import { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting form data:', formData);
      
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      console.log('Function response:', { data, error });

      if (error) {
        throw error;
      }

      if (data?.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data?.error || 'Failed to send message');
      }
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to Send Message",
        description: error.message || "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dakarapualekya@gmail.com",
      href: "mailto:dakarapualekya@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "London, UK",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "alekyadakarapu",
      href: "https://linkedin.com/in/alekyadakarapu"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "alekyadakarapu",
      href: "https://github.com/alekyadakarapu"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next data project? Let's discuss how we can turn your data into actionable insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Let's Connect</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center p-4 card-elegant">
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg mr-4">
                    <item.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-[var(--transition-smooth)]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
              <h4 className="font-semibold text-foreground mb-2">Open to Opportunities</h4>
              <p className="text-muted-foreground text-sm">
                I'm actively seeking data analyst positions where I can contribute to data-driven decision making 
                and continue growing my expertise in machine learning and analytics.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="btn-primary w-full" 
                disabled={isSubmitting}
              >
                <Send className="mr-2 h-5 w-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;