
import React, { useState } from 'react';
import { 
  Scissors, 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  Tag,
  Wand,
  Download,
  Share2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ClipCreator: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(45);
  const [startTime, setStartTime] = useState(45);
  const [endTime, setEndTime] = useState(75);
  
  // Toggle play state
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  // In a real app these would control the video player
  const skipBackward = () => {
    setCurrentTime(Math.max(0, currentTime - 10));
  };
  
  const skipForward = () => {
    setCurrentTime(Math.min(180, currentTime + 10));
  };
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Video Preview Section */}
      <div className="lg:col-span-2 space-y-6">
        <div className="rounded-lg border border-border bg-background overflow-hidden">
          <div className="aspect-video bg-muted flex items-center justify-center">
            {/* This would be a video player in the real app */}
            <div className="text-center">
              <Play className="h-16 w-16 mx-auto mb-4 opacity-20" />
              <p className="text-lg text-muted-foreground">Video player placeholder</p>
            </div>
          </div>
          
          {/* Video Controls */}
          <div className="p-4">
            <div className="mb-4">
              <Slider 
                value={[currentTime]} 
                max={180} 
                step={1}
                onValueChange={(value) => setCurrentTime(value[0])}
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>00:00:{currentTime.toString().padStart(2, '0')}</span>
                <span>03:00</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={skipBackward}>
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-10 w-10 rounded-full"
                  onClick={togglePlay}
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5 ml-0.5" />
                  )}
                </Button>
                <Button variant="ghost" size="icon" onClick={skipForward}>
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
              
              <Select defaultValue="1.0">
                <SelectTrigger className="w-[80px]">
                  <SelectValue placeholder="Speed" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0.5">0.5x</SelectItem>
                  <SelectItem value="0.75">0.75x</SelectItem>
                  <SelectItem value="1.0">1.0x</SelectItem>
                  <SelectItem value="1.5">1.5x</SelectItem>
                  <SelectItem value="2.0">2.0x</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        {/* Clip Timeline */}
        <div className="rounded-lg border border-border bg-background p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium flex items-center">
              <Scissors className="mr-2 h-4 w-4" />
              Clip Selection
            </h3>
            <div className="flex items-center gap-2 text-xs">
              <span>Start: 00:00:{startTime.toString().padStart(2, '0')}</span>
              <span>End: 00:01:{(endTime - 60).toString().padStart(2, '0')}</span>
              <span className="text-muted-foreground">Duration: 00:00:30</span>
            </div>
          </div>
          
          <div className="relative h-16 bg-muted rounded-md mb-2">
            {/* Simplified timeline visualization */}
            <div className="absolute inset-y-0 left-0 right-0 bg-muted">
              {/* Markers representing frames/scenes would go here */}
              {Array.from({ length: 12 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute top-0 bottom-0 w-px bg-border/60"
                  style={{ left: `${(i + 1) * 8.33}%` }}
                ></div>
              ))}
            </div>
            
            {/* Selection range */}
            <div 
              className="absolute inset-y-0 bg-brand-purple/20 border-l-2 border-r-2 border-brand-purple"
              style={{ 
                left: `${(startTime / 180) * 100}%`, 
                right: `${100 - ((endTime / 180) * 100)}%` 
              }}
            ></div>
            
            {/* Current position */}
            <div 
              className="absolute inset-y-0 w-0.5 bg-brand-purple z-10"
              style={{ left: `${(currentTime / 180) * 100}%` }}
            ></div>
          </div>
          
          <div className="flex gap-4">
            <Slider 
              value={[startTime, endTime]} 
              min={0}
              max={180} 
              step={1}
              onValueChange={(values) => {
                setStartTime(values[0]);
                setEndTime(values[1]);
              }}
              className="flex-1"
            />
          </div>
        </div>
      </div>
      
      {/* Clip Options Section */}
      <div className="space-y-6">
        <div className="rounded-lg border border-border bg-background p-6">
          <h2 className="text-lg font-semibold mb-4">Clip Details</h2>
          
          <Tabs defaultValue="manual">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="manual">Manual</TabsTrigger>
              <TabsTrigger value="ai">
                <Wand className="h-4 w-4 mr-1" />
                AI Assist
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="manual" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Clip Title</Label>
                <Input id="title" placeholder="Enter a title for your clip" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe your clip" 
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <div className="flex items-center gap-2">
                  <Input id="tags" placeholder="Add a tag" />
                  <Button variant="outline" size="icon">
                    <Tag className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {['interview', 'highlight'].map(tag => (
                    <div key={tag} className="bg-muted text-muted-foreground rounded-full px-2 py-1 text-xs flex items-center">
                      {tag}
                      <button className="ml-1 text-muted-foreground hover:text-foreground">×</button>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ai" className="space-y-4">
              <p className="text-muted-foreground text-sm mb-4">
                Let our AI analyze the clip content and suggest optimal details.
              </p>
              
              <div className="space-y-2">
                <Label>AI Suggestion Type</Label>
                <Select defaultValue="auto">
                  <SelectTrigger>
                    <SelectValue placeholder="Select suggestion type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">Automatic (All)</SelectItem>
                    <SelectItem value="title">Title Only</SelectItem>
                    <SelectItem value="description">Description Only</SelectItem>
                    <SelectItem value="tags">Tags Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="w-full gradient-bg gap-2">
                <Wand className="h-4 w-4" />
                Generate Suggestions
              </Button>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="rounded-lg border border-border bg-background p-6">
          <h2 className="text-lg font-semibold mb-4">Export & Share</h2>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Export Format</Label>
              <Select defaultValue="mp4">
                <SelectTrigger>
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mp4">MP4 (H.264)</SelectItem>
                  <SelectItem value="webm">WebM</SelectItem>
                  <SelectItem value="mov">QuickTime (MOV)</SelectItem>
                  <SelectItem value="gif">GIF</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Resolution</Label>
              <Select defaultValue="1080p">
                <SelectTrigger>
                  <SelectValue placeholder="Select resolution" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="original">Original</SelectItem>
                  <SelectItem value="1080p">1080p</SelectItem>
                  <SelectItem value="720p">720p</SelectItem>
                  <SelectItem value="480p">480p</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex gap-3">
              <Button className="flex-1 gap-2">
                <Download className="h-4 w-4" />
                Export
              </Button>
              <Button variant="outline" className="flex-1 gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClipCreator;
