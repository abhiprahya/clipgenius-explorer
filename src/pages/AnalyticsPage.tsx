
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import AnalyticsSummary from '@/components/dashboard/AnalyticsSummary';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Download, Calendar } from 'lucide-react';

const AnalyticsPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="container p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">Analytics</h1>
            <p className="text-muted-foreground">
              Track performance and insights for your video content
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Select defaultValue="30days">
              <SelectTrigger className="w-[160px]">
                <Calendar className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
                <SelectItem value="year">Last year</SelectItem>
                <SelectItem value="custom">Custom range</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="mb-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
            <TabsTrigger value="audience">Audience</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Performance Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <AnalyticsSummary />
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Videos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Array(5).fill(null).map((_, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-muted rounded w-16 h-10 flex-shrink-0 flex items-center justify-center text-sm font-medium">
                        #{index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">Video Title {index + 1}</p>
                        <p className="text-xs text-muted-foreground">
                          {(5000 - index * 800).toLocaleString()} views
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-sm">
                          {70 - index * 5}%
                        </p>
                        <p className="text-xs text-muted-foreground">
                          completion
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Engagement Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <p className="text-sm">Average Watch Time</p>
                    <p className="font-medium">6:42</p>
                  </div>
                  <div className="h-2 bg-muted rounded-full">
                    <div className="h-full bg-brand-purple rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6">
                    <p className="text-sm">Completion Rate</p>
                    <p className="font-medium">68%</p>
                  </div>
                  <div className="h-2 bg-muted rounded-full">
                    <div className="h-full bg-brand-blue rounded-full" style={{ width: '68%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6">
                    <p className="text-sm">Viewer Retention</p>
                    <p className="font-medium">72%</p>
                  </div>
                  <div className="h-2 bg-muted rounded-full">
                    <div className="h-full bg-brand-indigo rounded-full" style={{ width: '72%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6">
                    <p className="text-sm">Click-Through Rate</p>
                    <p className="font-medium">4.2%</p>
                  </div>
                  <div className="h-2 bg-muted rounded-full">
                    <div className="h-full bg-brand-purple-dark rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsPage;
