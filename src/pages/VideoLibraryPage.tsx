
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import VideoCard from '@/components/dashboard/VideoCard';
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
import { Search, Filter, Grid3X3, List } from 'lucide-react';

// Sample data - would come from API in real app
const sampleVideos = Array(12).fill(null).map((_, index) => ({
  id: `vid-${index + 1}`,
  title: `Video Title ${index + 1}`,
  thumbnail: '/placeholder.svg',
  duration: `${Math.floor(Math.random() * 60)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
  date: `${Math.floor(Math.random() * 30) + 1} days ago`,
  views: Math.floor(Math.random() * 5000),
  tags: ['tag1', 'tag2', 'tag3'].slice(0, Math.floor(Math.random() * 3) + 1)
}));

const VideoLibraryPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  return (
    <DashboardLayout>
      <div className="container p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">Video Library</h1>
            <p className="text-muted-foreground">
              Browse and manage your video collection
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" onClick={() => setViewMode('grid')} className={viewMode === 'grid' ? 'bg-accent' : ''}>
              <Grid3X3 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setViewMode('list')} className={viewMode === 'list' ? 'bg-accent' : ''}>
              <List className="h-5 w-5" />
            </Button>
            <div className="ml-2">
              <Button>Upload Video</Button>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="all">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <TabsList>
              <TabsTrigger value="all">All Videos</TabsTrigger>
              <TabsTrigger value="recent">Recently Added</TabsTrigger>
              <TabsTrigger value="popular">Most Popular</TabsTrigger>
            </TabsList>
            
            <div className="flex items-center gap-2 flex-1 md:max-w-md">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search videos..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Select defaultValue="newest">
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="popular">Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <TabsContent value="all">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {sampleVideos.map((video) => (
                  <VideoCard key={video.id} {...video} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {sampleVideos.map((video) => (
                  <div key={video.id} className="flex gap-4 border border-border rounded-md overflow-hidden bg-background">
                    <div className="w-40 h-auto bg-muted relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-1 right-1 bg-background/80 backdrop-blur-sm rounded text-xs px-2 py-0.5">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4 flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="font-medium">{video.title}</h3>
                        <p className="text-xs text-muted-foreground">
                          {video.views.toLocaleString()} views • {video.date}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {video.tags.map((tag) => (
                          <div key={tag} className="bg-muted text-muted-foreground text-xs rounded-full px-2 py-0.5">
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="recent">
            <div className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" : "space-y-4"}>
              {sampleVideos.slice(0, 5).map((video) => (
                viewMode === 'grid' ? (
                  <VideoCard key={video.id} {...video} />
                ) : (
                  <div key={video.id} className="flex gap-4 border border-border rounded-md overflow-hidden bg-background">
                    <div className="w-40 h-auto bg-muted relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-1 right-1 bg-background/80 backdrop-blur-sm rounded text-xs px-2 py-0.5">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">{video.title}</h3>
                      <p className="text-xs text-muted-foreground">
                        {video.views.toLocaleString()} views • {video.date}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {video.tags.map((tag) => (
                          <div key={tag} className="bg-muted text-muted-foreground text-xs rounded-full px-2 py-0.5">
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="popular">
            <div className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" : "space-y-4"}>
              {sampleVideos.slice(5, 10).map((video) => (
                viewMode === 'grid' ? (
                  <VideoCard key={video.id} {...video} />
                ) : (
                  <div key={video.id} className="flex gap-4 border border-border rounded-md overflow-hidden bg-background">
                    <div className="w-40 h-auto bg-muted relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-1 right-1 bg-background/80 backdrop-blur-sm rounded text-xs px-2 py-0.5">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">{video.title}</h3>
                      <p className="text-xs text-muted-foreground">
                        {video.views.toLocaleString()} views • {video.date}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {video.tags.map((tag) => (
                          <div key={tag} className="bg-muted text-muted-foreground text-xs rounded-full px-2 py-0.5">
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default VideoLibraryPage;
