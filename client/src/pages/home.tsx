import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Home, 
  Palette, 
  Bolt, 
  Lightbulb, 
  Heart, 
  Sprout,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  Menu,
  Youtube,
  Instagram,
  Facebook
} from "lucide-react";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }, 1500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-serif font-bold text-sage">Petal & Plank</h1>
                <p className="text-xs text-warm-taupe">LLC</p>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-charcoal hover:text-sage px-3 py-2 text-sm font-medium transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-charcoal hover:text-sage px-3 py-2 text-sm font-medium transition-colors">About</button>
                <button onClick={() => scrollToSection('services')} className="text-charcoal hover:text-sage px-3 py-2 text-sm font-medium transition-colors">Services</button>
                <button onClick={() => scrollToSection('gallery')} className="text-charcoal hover:text-sage px-3 py-2 text-sm font-medium transition-colors">Gallery</button>
                <button onClick={() => scrollToSection('contact')} className="text-charcoal hover:text-sage px-3 py-2 text-sm font-medium transition-colors">Contact</button>
              </div>
            </div>
            
            <div className="md:hidden">
              <button className="text-charcoal hover:text-sage p-2">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative">
        <div 
          className="h-96 md:h-[500px] bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(44, 44, 44, 0.4), rgba(44, 44, 44, 0.4)), url('https://images.unsplash.com/photo-1556912173-46c336c7fd55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">Transform Your Home, Transform Your Life</h1>
              <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">Expert home improvement guidance and lifestyle inspiration to help you create the space of your dreams</p>
              <div className="space-x-4">
                <Button 
                  onClick={() => scrollToSection('services')} 
                  className="bg-sage hover:bg-sage/90 text-white px-8 py-3 text-lg font-medium transition-all transform hover:scale-105"
                >
                  Explore Our Content
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-3 text-lg font-medium transition-all"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">About Petal & Plank</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Welcome to Petal & Plank LLC, where home improvement meets lifestyle inspiration. We're passionate about helping homeowners discover the perfect balance between functional design and beautiful living spaces that reflect their unique personality.</p>
                
                <p>Our comprehensive video content and lifestyle guidance covers everything from weekend DIY projects to major home renovations. Whether you're looking to refresh a single room or transform your entire home, we provide the expertise, inspiration, and step-by-step guidance you need to bring your vision to life.</p>
                
                <p>At Petal & Plank, we believe that every home has the potential to be extraordinary. Our mission is to empower homeowners with the knowledge, confidence, and creativity to create spaces that not only look beautiful but also enhance their daily lives and well-being.</p>
              </div>
              <div className="mt-8">
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  className="bg-terracotta hover:bg-terracotta/90 text-white px-6 py-3 font-medium transition-colors"
                >
                  Start Your Journey
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Cozy modern living room" 
                className="rounded-xl shadow-lg w-full h-64 object-cover" 
              />
              <img 
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="Modern home office with plants" 
                className="rounded-xl shadow-lg w-full h-40 object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">Our Content & Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From beginner-friendly tutorials to advanced renovation projects, we cover every aspect of home improvement and lifestyle design</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-sage rounded-lg flex items-center justify-center mb-4">
                  <Bolt className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">DIY Projects</h3>
                <p className="text-gray-600 mb-4">Step-by-step video tutorials for weekend projects that make a big impact. From simple decor updates to functional improvements.</p>
                <button className="text-sage font-medium hover:text-sage/80 transition-colors">Learn More →</button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-terracotta rounded-lg flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Home Renovations</h3>
                <p className="text-gray-600 mb-4">Comprehensive guides for major home improvement projects, including planning, budgeting, and execution strategies.</p>
                <button className="text-sage font-medium hover:text-sage/80 transition-colors">Learn More →</button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-golden rounded-lg flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Interior Design</h3>
                <p className="text-gray-600 mb-4">Lifestyle content focused on creating beautiful, functional spaces that reflect your personal style and enhance daily living.</p>
                <button className="text-sage font-medium hover:text-sage/80 transition-colors">Learn More →</button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-warm-taupe rounded-lg flex items-center justify-center mb-4">
                  <Sprout className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Outdoor Living</h3>
                <p className="text-gray-600 mb-4">Transform your outdoor spaces with landscaping tips, patio design ideas, and seasonal maintenance guides.</p>
                <button className="text-sage font-medium hover:text-sage/80 transition-colors">Learn More →</button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-sage rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Smart Solutions</h3>
                <p className="text-gray-600 mb-4">Modern home technology integration, energy-efficient upgrades, and innovative storage solutions for every room.</p>
                <button className="text-sage font-medium hover:text-sage/80 transition-colors">Learn More →</button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-terracotta rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Lifestyle Tips</h3>
                <p className="text-gray-600 mb-4">Daily inspiration for creating a home that supports your lifestyle, from organization hacks to wellness-focused design.</p>
                <button className="text-sage font-medium hover:text-sage/80 transition-colors">Learn More →</button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">Project Showcase</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore our latest home improvement projects and lifestyle transformations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Person painting wall with modern colors" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Interior Painting Guide</h4>
                  <p className="text-sm opacity-90">Modern Color Techniques</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Modern kitchen renovation with island" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Kitchen Renovation</h4>
                  <p className="text-sm opacity-90">Complete Transformation</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Person installing wooden flooring" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Flooring Installation</h4>
                  <p className="text-sm opacity-90">Hardwood & Laminate</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Beautifully decorated bedroom with plants" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Bedroom Styling</h4>
                  <p className="text-sm opacity-90">Cozy & Modern</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Garden landscaping with outdoor seating" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Garden Design</h4>
                  <p className="text-sm opacity-90">Outdoor Living Spaces</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Modern bathroom renovation with fixtures" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Bathroom Remodel</h4>
                  <p className="text-sm opacity-90">Spa-Like Retreat</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Minimalist living room with neutral tones" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1556912173-46c336c7fd55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Modern kitchen with white cabinets and marble" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Cozy reading nook with built-in shelving" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Modern home exterior with landscaping" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Get In Touch</h2>
              <p className="text-lg mb-8 opacity-90">Ready to transform your home? We'd love to hear about your project and discuss how we can help bring your vision to life.</p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <p className="opacity-90">hello@thepetalandplank.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <p className="opacity-90">(707) 687-9285</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Response Time</h4>
                    <p className="opacity-90">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <Label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">Your Name *</Label>
                    <Input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">Email Address *</Label>
                    <Input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors"
                      placeholder="Enter your email address"
                      required
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors resize-vertical"
                      placeholder="Tell us about your project or ask us a question"
                      required
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-terracotta hover:bg-terracotta/90 text-white font-medium py-3 px-6 transition-colors transform hover:scale-105 focus:ring-2 focus:ring-terracotta focus:ring-offset-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-serif font-bold mb-4">Petal & Plank LLC</h3>
              <p className="text-gray-300 mb-6 max-w-md">Your trusted partner for home improvement inspiration, expert guidance, and lifestyle content that transforms houses into dream homes.</p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-sage rounded-lg flex items-center justify-center hover:bg-sage/80 transition-colors">
                  <Youtube className="h-5 w-5" />
                </button>
                <button className="w-10 h-10 bg-sage rounded-lg flex items-center justify-center hover:bg-sage/80 transition-colors">
                  <Instagram className="h-5 w-5" />
                </button>
                <button className="w-10 h-10 bg-sage rounded-lg flex items-center justify-center hover:bg-sage/80 transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="w-10 h-10 bg-sage rounded-lg flex items-center justify-center hover:bg-sage/80 transition-colors">
                  <Facebook className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors">Our Content</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-white transition-colors">Project Gallery</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><button className="text-gray-300 hover:text-white transition-colors">DIY Tutorials</button></li>
                <li><button className="text-gray-300 hover:text-white transition-colors">Home Renovations</button></li>
                <li><button className="text-gray-300 hover:text-white transition-colors">Interior Design</button></li>
                <li><button className="text-gray-300 hover:text-white transition-colors">Lifestyle Content</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm">&copy; 2025 Petal & Plank LLC. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <button className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</button>
                <button className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Service</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
