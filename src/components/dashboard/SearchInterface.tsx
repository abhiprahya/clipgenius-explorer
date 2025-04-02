
import React, { useState } from 'react';
import { Search, Filter, Wand, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import VideoCard from '@/components/dashboard/VideoCard';

// Sample data - would come from API in real app
const sampleVideos = [
  {
    id: '1',
    title: 'Product Launch Keynote',
    thumbnail: '/placeholder.svg',
    duration: '25:42',
    date: '2 days ago',
    views: 1234,
    tags: ['keynote', 'product', 'launch']
  },
  {
    id: '2',
    title: 'Customer Interview',
    thumbnail: '/placeholder.svg',
    duration: '12:18',
    date: '1 week ago',
    views: 567,
    tags: ['interview', 'customer', 'feedback']
  },
  {
    id: '3',
    title: 'Team Meeting Recap',
    thumbnail: '/placeholder.svg',
    duration: '45:10',
    date: '3 days ago',
    views: 890,
    tags: ['meeting', 'team', 'internal']
  },
  {
    id: '4',
    title: 'Marketing Campaign Review',
    thumbnail: '/placeholder.svg',
    duration: '18:26',
    date: '5 days ago',
    views: 432,
    tags: ['marketing', 'campaign', 'review']
  }
];

const SearchInterface: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('semantic');
  
  // In a real app, this would trigger API calls
  const handleSearch = () => {
    console.log('Searching for:', searchQuery, 'using method:', activeTab);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-border p-6 bg-background">
        <h2 className="text-xl font-semibold mb-4">Search Video Content</h2>
        
        <Tabs defaultValue="semantic" className="mb-6" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="semantic">Semantic Search</TabsTrigger>
            <TabsTrigger value="visual">Visual Search</TabsTrigger>
          </TabsList>
          
          <TabsContent value="semantic" className="mt-4">
            <p className="text-muted-foreground mb-4">
              Search for content using natural language. Ask questions or describe what you're looking for in your videos.
            </p>
            <div className="flex gap-2">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="E.g., 'Find moments where our CEO discusses Q3 results'"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button className="gradient-bg" onClick={handleSearch}>
                Search
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="visual" className="mt-4">
            <p className="text-muted-foreground mb-4">
              Search for visual elements like objects, people, or scenes in your videos.
            </p>
            <div className="grid gap-4">
              <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
                <div className="mx-auto flex flex-col items-center justify-center">
                  <Wand className="h-10 w-10 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">Upload a reference image</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Drag and drop an image, or click to browse
                  </p>
                  <Button variant="outline">Browse Files</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            
            <Select defaultValue="all">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Content Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Content</SelectItem>
                <SelectItem value="videos">Videos Only</SelectItem>
                <SelectItem value="clips">Clips Only</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="newest">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="relevance">Relevance</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            Advanced Options
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Recent Videos</h3>
          <Button variant="ghost" size="sm" className="text-sm">
            View All
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleVideos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchInterface;
