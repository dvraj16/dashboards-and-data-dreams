import { Download, Mail, Github, Linkedin, BarChart3, TrendingUp, Database, Brain, PieChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  console.log('HeroSection loading...');
  
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/dashboards-and-data-dreams/Alekya_Dakarapu_Resume.pdf';
    link.download = 'Alekya_Dakarapu_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <section id="home" className="hero-lusion flex items-center justify-center">
      {/* Data visualization elements */}
      <div className="data-element">
        <div className="w-16 h-16 border-2 border-primary/30 rounded-lg">
          <BarChart3 size={40} className="text-primary/40 m-2" />
        </div>
      </div>
      <div className="data-element">
        <div className="w-20 h-20 border border-accent/30 rounded-full flex items-center justify-center">
          <PieChart size={32} className="text-accent/40" />
        </div>
      </div>
      <div className="data-element">
        <div className="w-24 h-6 bg-primary/20 rounded-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-pulse"></div>
        </div>
      </div>
      <div className="data-element">
        <div className="w-14 h-14 border-2 border-accent/30 rotate-45">
          <Database size={24} className="text-accent/40 m-2 -rotate-45" />
        </div>
      </div>
      <div className="data-element">
        <div className="w-32 h-2 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full"></div>
      </div>

      <div className="container-width hero-content">
        <div className="text-center relative z-10">
          <div className="max-w-6xl mx-auto animate-fade-in-up">
            {/* Minimal tagline - properly aligned */}
            <div className="mb-8 flex justify-center">
              <p className="text-muted-foreground text-lg tracking-wider uppercase text-center">
                Beyond Data — Within Insights
              </p>
            </div>
            
            {/* Large, bold typography like Lusion */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9] tracking-tight">
              <span className="block text-foreground">Alekya</span>
              <span className="block text-primary">Dakarapu</span>
            </h1>
            
            {/* Data analyst description */}
            <div className="mb-12">
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light leading-relaxed max-w-4xl mx-auto">
                A data analyst who transforms complex datasets into 
                <span className="text-accent font-medium"> strategic insights</span>, 
                powering data-driven decisions through advanced analytics and visualization.
              </p>
            </div>
            
            {/* Tech stack - minimal badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              <span className="px-6 py-3 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Python
              </span>
              <span className="px-6 py-3 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                SQL
              </span>
              <span className="px-6 py-3 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Tableau
              </span>
              <span className="px-6 py-3 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Machine Learning
              </span>
              <span className="px-6 py-3 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Azure
              </span>
            </div>
            
            {/* Action buttons - minimal design */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                onClick={handleDownloadResume}
                className="px-12 py-6 text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-full transition-all duration-300 hover:scale-105 animate-glow-pulse"
              >
                <Download className="mr-3 h-5 w-5" />
                Download Resume
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-12 py-6 text-lg font-medium border-border hover:bg-accent hover:text-accent-foreground rounded-full transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-3 h-5 w-5" />
                Let's Connect
              </Button>
            </div>
            
            {/* Social links - clean and minimal */}
            <div className="flex justify-center space-x-12">
              <a 
                href="https://linkedin.com/in/alekyadakarapu" 
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 p-2"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/alekyadakarapu" 
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 p-2"
              >
                <Github size={24} />
              </a>
              <a 
                href="mailto:dakarapualekya@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 p-2"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          {/* Minimal scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground">
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2 tracking-wider">scroll to explore</span>
              <div className="w-px h-12 bg-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;