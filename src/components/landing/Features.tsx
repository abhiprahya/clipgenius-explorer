
import React from 'react';
import { 
  Search, 
  Scissors, 
  BarChart3, 
  Tag, 
  Clock, 
  Zap 
} from 'lucide-react';

const features = [
  {
    icon: <Search className="h-10 w-10 mb-4 text-brand-purple" />,
    title: 'Intelligent Search',
    description: 'Find specific moments in videos with natural language queries. Search for objects, people, actions, or even spoken content.'
  },
  {
    icon: <Scissors className="h-10 w-10 mb-4 text-brand-blue" />,
    title: 'Automated Clip Generation',
    description: 'Generate highlight clips instantly based on content, actions, emotions, or custom criteria that matter to your audience.'
  },
  {
    icon: <BarChart3 className="h-10 w-10 mb-4 text-brand-indigo" />,
    title: 'Content Analytics',
    description: 'Gain deep insights into your video content with AI-powered analytics that reveal engagement patterns and opportunities.'
  },
  {
    icon: <Tag className="h-10 w-10 mb-4 text-brand-purple" />,
    title: 'Smart Tagging',
    description: 'Automatically tag and categorize your videos based on content, making organization and discovery effortless.'
  },
  {
    icon: <Clock className="h-10 w-10 mb-4 text-brand-blue" />,
    title: 'Real-Time Processing',
    description: 'Process videos in seconds, not hours, allowing you to extract value from your content immediately.'
  },
  {
    icon: <Zap className="h-10 w-10 mb-4 text-brand-indigo" />,
    title: 'API Integration',
    description: 'Integrate ClipGenius capabilities directly into your existing workflows with our robust API.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span> for Video Management
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI-powered platform transforms how you work with video content, saving time and unlocking new possibilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background rounded-lg p-6 shadow-sm border border-border hover:border-primary/50 transition-colors"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
