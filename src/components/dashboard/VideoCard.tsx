
import React from 'react';
import { Play, Clock, MoreVertical } from 'lucide-react';
import { 
  Card, 
  CardContent
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  date: string;
  views: number;
  tags?: string[];
  className?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  id,
  title,
  thumbnail,
  duration,
  date,
  views,
  tags = [],
  className,
}) => {
  return (
    <Card className={cn("overflow-hidden group cursor-pointer", className)}>
      <div className="relative">
        <div className="aspect-video bg-muted overflow-hidden">
          <img 
            src={thumbnail} 
            alt={title}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
        </div>
        <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded text-xs px-2 py-1 flex items-center">
          <Clock className="mr-1 h-3 w-3" />
          {duration}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black/30 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
            <Play className="h-6 w-6 text-foreground" />
          </div>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-base truncate mb-1">{title}</h3>
            <p className="text-xs text-muted-foreground">
              {views.toLocaleString()} views • {date}
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex h-8 w-8 items-center justify-center rounded-md border border-input bg-transparent hover:bg-accent hover:text-accent-foreground">
              <MoreVertical className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Generate clips</DropdownMenuItem>
              <DropdownMenuItem>Analyze content</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {tags.slice(0, 3).map((tag) => (
              <div key={tag} className="bg-muted text-muted-foreground text-xs rounded-full px-2 py-0.5">
                {tag}
              </div>
            ))}
            {tags.length > 3 && (
              <div className="bg-muted text-muted-foreground text-xs rounded-full px-2 py-0.5">
                +{tags.length - 3}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VideoCard;
