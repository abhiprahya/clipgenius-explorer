
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="rounded-2xl gradient-bg p-8 md:p-16 text-white text-center relative overflow-hidden">
          {/* Background design elements */}
          <div className="absolute top-0 left-0 right-0 bottom-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Video Workflow?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Join thousands of content creators and media teams who are saving time and unlocking new possibilities with ClipGenius.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-brand-purple-dark hover:bg-white/90">
                <Link to="/dashboard">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                <Link to="/demo">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
