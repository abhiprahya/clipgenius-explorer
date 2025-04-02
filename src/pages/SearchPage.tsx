
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import SearchInterface from '@/components/dashboard/SearchInterface';

const SearchPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="container p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Video Search</h1>
          <p className="text-muted-foreground">
            Find specific moments and content across your video library
          </p>
        </div>
        
        <SearchInterface />
      </div>
    </DashboardLayout>
  );
};

export default SearchPage;
