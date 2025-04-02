
import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Upload Your Videos',
    description: 'Upload your video content to our secure cloud platform or connect to your existing storage solutions.'
  },
  {
    number: '02',
    title: 'AI Processing',
    description: 'Our advanced AI analyzes your videos, identifying objects, people, speech, text, actions, and more.'
  },
  {
    number: '03',
    title: 'Search & Discover',
    description: 'Use natural language to search through your videos and find exactly what you need in seconds.'
  },
  {
    number: '04',
    title: 'Generate & Share',
    description: 'Create clips, highlights, or summaries and share them directly to your preferred platforms.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Four simple steps to transform how you work with video content
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative"
            >
              {/* Arrow connector for all but last item */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 right-0 translate-x-1/2 z-10">
                  <ArrowRight className="text-muted-foreground h-6 w-6" />
                </div>
              )}
              
              <div className="bg-background rounded-lg p-6 border border-border h-full flex flex-col">
                <div className="text-4xl font-bold text-brand-purple/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Visual indicator */}
        <div className="mt-20 relative">
          <div className="h-2 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-indigo rounded-full max-w-3xl mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
