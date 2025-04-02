
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Play, Search, Scissors, BarChart3 } from 'lucide-react';
import VideoCard from '@/components/dashboard/VideoCard';
import AnalyticsSummary from '@/components/dashboard/AnalyticsSummary';

const sampleRecentVideos = [
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

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="container p-6 space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Button className="gradient-bg gap-2">
            <Upload className="h-4 w-4" />
            Upload Video
          </Button>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-gradient-to-br from-brand-purple/10 to-brand-blue/5 hover:from-brand-purple/20 hover:to-brand-blue/10 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Search className="h-5 w-5 mr-2 text-brand-purple" />
                AI Search
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Search through your videos using natural language queries.
              </p>
              <Button variant="outline" className="w-full">
                <Search className="h-4 w-4 mr-2" />
                Search Content
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-brand-blue/10 to-brand-indigo/5 hover:from-brand-blue/20 hover:to-brand-indigo/10 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Scissors className="h-5 w-5 mr-2 text-brand-blue" />
                Clip Creator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Automatically generate clips and highlights from your videos.
              </p>
              <Button variant="outline" className="w-full">
                <Scissors className="h-4 w-4 mr-2" />
                Create Clips
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-brand-indigo/10 to-brand-purple/5 hover:from-brand-indigo/20 hover:to-brand-purple/10 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-brand-indigo" />
                Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Get insights and analytics on your video performance.
              </p>
              <Button variant="outline" className="w-full">
                <BarChart3 className="h-4 w-4 mr-2" />
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Videos</CardTitle>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                  {sampleRecentVideos.slice(0, 4).map((video) => (
                    <VideoCard key={video.id} {...video} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full gap-2 justify-start">
                  <Upload className="h-4 w-4" />
                  Upload New Video
                </Button>
                <Button variant="outline" className="w-full gap-2 justify-start">
                  <Play className="h-4 w-4" />
                  Continue Watching
                </Button>
                <Button variant="outline" className="w-full gap-2 justify-start">
                  <Scissors className="h-4 w-4" />
                  Recent Clip Project
                </Button>
                <Button variant="outline" className="w-full gap-2 justify-start">
                  <Search className="h-4 w-4" />
                  Saved Searches
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <AnalyticsSummary />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
