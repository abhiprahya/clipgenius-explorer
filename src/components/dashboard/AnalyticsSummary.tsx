
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Bar
} from 'recharts';
import { ArrowUpRight, Clock, Eye, FileText } from 'lucide-react';

// Sample data - would come from API in real app
const viewsData = [
  { name: 'Jan', total: 1200 },
  { name: 'Feb', total: 1900 },
  { name: 'Mar', total: 1400 },
  { name: 'Apr', total: 2300 },
  { name: 'May', total: 2900 },
  { name: 'Jun', total: 3200 },
  { name: 'Jul', total: 3800 },
];

const contentTypeData = [
  { name: 'Interviews', value: 35 },
  { name: 'Tutorials', value: 25 },
  { name: 'Product Demos', value: 20 },
  { name: 'Webinars', value: 15 },
  { name: 'Other', value: 5 },
];

const watchTimeData = [
  { name: 'Mon', total: 240 },
  { name: 'Tue', total: 380 },
  { name: 'Wed', total: 320 },
  { name: 'Thu', total: 410 },
  { name: 'Fri', total: 290 },
  { name: 'Sat', total: 180 },
  { name: 'Sun', total: 210 },
];

const AnalyticsSummary: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Views
            </CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15.8K</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1 text-green-600">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              <span>12% from last month</span>
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Watch Time
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32.4K min</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1 text-green-600">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              <span>8% from last month</span>
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Content
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>98 Videos</span>
              <span>44 Clips</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Avg. Completion
            </CardTitle>
            <div className="h-4 w-4 text-muted-foreground font-semibold text-xs">%</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <div className="h-2 bg-muted rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-brand-purple rounded-full" style={{ width: '68%' }}></div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Charts */}
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Views Overview</CardTitle>
            <CardDescription>View trends over the past 7 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={viewsData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                <XAxis 
                  dataKey="name" 
                  tickLine={false} 
                  axisLine={false}
                  tickMargin={8}
                  fontSize={12}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                  fontSize={12}
                />
                <Tooltip />
                <Line 
                  type="monotone" 
                  strokeWidth={2}
                  dataKey="total" 
                  activeDot={{ r: 6, fill: '#8B5CF6' }}
                  stroke="#8B5CF6"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Content Breakdown</CardTitle>
            <CardDescription>Distribution by content type</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={contentTypeData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                <XAxis 
                  dataKey="name" 
                  tickLine={false} 
                  axisLine={false}
                  tickMargin={8}
                  fontSize={12}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}%`}
                  fontSize={12}
                />
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                <Bar dataKey="value" fill="#6366F1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Watch Time */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Watch Time</CardTitle>
          <CardDescription>Minutes watched per day this week</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={watchTimeData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <XAxis 
                dataKey="name" 
                tickLine={false} 
                axisLine={false}
                tickMargin={8}
                fontSize={12}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value} min`}
                fontSize={12}
              />
              <Tooltip formatter={(value) => [`${value} minutes`, 'Watch Time']} />
              <Line 
                type="monotone" 
                strokeWidth={2}
                dataKey="total" 
                activeDot={{ r: 6, fill: '#3B82F6' }}
                stroke="#3B82F6"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsSummary;
