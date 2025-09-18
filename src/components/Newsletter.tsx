import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Mail className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Stay Updated with Latest Tech Insights
          </h2>
          
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest updates on telecommunications, 
            technology trends, and industry insights delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto items-stretch">
            <Input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 h-12 bg-white border-gray-300 text-black placeholder:text-gray-500 focus:border-primary px-4"
            />
            <Button 
              size="lg"
              className="h-12 bg-primary text-primary-foreground hover:bg-white hover:text-primary border border-primary font-semibold px-8 transition-all duration-300 whitespace-nowrap"
            >
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-black/70 mt-4">
            No spam, unsubscribe at any time. Your privacy is our priority.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;