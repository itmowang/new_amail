
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useAuth } from "@/contexts/AuthContext";

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const { isAuthenticated } = useAuth();

  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];

    const createParticles = () => {
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 0.5,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.fillStyle = theme === "dark" 
          ? `rgba(255, 255, 255, ${p.opacity})` 
          : `rgba(66, 153, 225, ${p.opacity})`;
          
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0;
      createParticles();
    };

    createParticles();
    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10"
      ></canvas>
      
      <div className="absolute inset-0 -z-10 bg-gradient-radial opacity-30"></div>
      
      <header className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="font-display font-bold text-2xl flex items-center gap-2">
            <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
              <Mail className="h-5 w-5" />
            </div>
            <span>EmailFlow</span>
          </div>
          <div className="flex gap-4 items-center">
            {isAuthenticated ? (
              <Button asChild>
                <Link to="/dashboard">Go to Dashboard</Link>
              </Button>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link to="/register">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="animate-slide-in space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight text-balance">
              Experience the Future of <span className="text-primary">Email Communication</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Seamless, intuitive, and beautifully designed. Our platform helps you manage your emails with unprecedented speed and elegance.
            </p>
          </div>

          <div className="mt-10 space-x-4 animate-slide-in" style={{ animationDelay: "200ms" }}>
            <Button size="lg" className="h-12 px-6 gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all hover:scale-105 shadow-lg hover:shadow-primary/20">
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-6 glassmorphism hover:glassmorphism">
              Learn More
            </Button>
          </div>

          <div className="mt-16 md:mt-24 w-full max-w-4xl animate-scale-in relative" style={{ animationDelay: "400ms" }}>
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-accent rounded-xl blur-sm opacity-30 animate-gentle-float"></div>
            <div className="glassmorphism overflow-hidden rounded-xl border border-white/20 shadow-glass hover:shadow-glass-hover transition-all">
              <img 
                src="https://framerusercontent.com/images/eUNkK46b0pipRjUGXJrVV9jCOE.webp" 
                alt="EmailFlow Dashboard" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-6 py-8 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 EmailFlow. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
