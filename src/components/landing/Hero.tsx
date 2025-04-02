
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-20 relative">
          {/* Background decorations */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl opacity-60 animate-blob"></div>
          <div className="absolute top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl opacity-60 animate-blob animation-delay-2000"></div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="gradient-text">Unlock the Power</span> of Your Video Content
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            ClipGenius uses AI to analyze, search, and transform your video content. Find moments, generate clips, and gain insights from your video library in seconds.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="gradient-bg text-white">
              <Link to="/dashboard">Try For Free</Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Play size={16} />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Demo Video/Preview */}
        <div className="relative rounded-lg overflow-hidden border border-border shadow-xl">
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-brand-blue/10"></div>
            {/* This would be replaced with an actual video or app screenshot */}
            <div className="text-center p-10">
              <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8 text-white" />
              </div>
              <p className="text-lg font-medium">Video demo placeholder</p>
            </div>
          </div>
          
          {/* UI Overlay to show app interface */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-background/80 backdrop-blur-sm border-t border-border flex items-center px-6">
            <div className="w-full max-w-2xl mx-auto flex items-center gap-4">
              <div className="h-3 w-40 rounded-full bg-brand-purple/40 animate-pulse-light"></div>
              <div className="h-3 w-20 rounded-full bg-brand-blue/40 animate-pulse-light"></div>
              <div className="h-3 w-32 rounded-full bg-brand-indigo/40 animate-pulse-light"></div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">TRUSTED BY INNOVATIVE COMPANIES</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {['ACME', 'Globex', 'Hooli', 'Initech', 'Umbrella'].map((company) => (
              <div key={company} className="text-lg font-bold">{company}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
