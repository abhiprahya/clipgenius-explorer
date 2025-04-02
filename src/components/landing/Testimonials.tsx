
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "ClipGenius has completely transformed our content workflow. What used to take our team days now happens in minutes.",
    name: "Sarah Johnson",
    title: "Content Director at MediaStream",
    avatar: "SJ"
  },
  {
    quote: "The search functionality is mind-blowing. I can find exactly what I need in our vast library of videos without wasting hours scrubbing through footage.",
    name: "Michael Chen",
    title: "Video Editor at CreativeForce",
    avatar: "MC"
  },
  {
    quote: "We've increased our content output by 300% while maintaining the same team size. The ROI has been incredible for our business.",
    name: "Alisha Patel",
    title: "Marketing Lead at TechInnovate",
    avatar: "AP"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            <span className="gradient-text">What Our Users Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Companies are transforming their video workflows with ClipGenius
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border">
              <CardContent className="p-6">
                <div className="mb-6">
                  <Quote className="h-10 w-10 text-brand-purple/30" />
                </div>
                <p className="mb-6 italic text-foreground">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" alt={testimonial.name} />
                    <AvatarFallback className="bg-brand-purple/10 text-brand-purple">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
