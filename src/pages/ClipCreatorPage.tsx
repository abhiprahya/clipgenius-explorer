
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ClipCreator from '@/components/dashboard/ClipCreator';

const ClipCreatorPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="container p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Clip Creator</h1>
          <p className="text-muted-foreground">
            Create and edit clips from your videos using our powerful tools
          </p>
        </div>
        
        <ClipCreator />
      </div>
    </DashboardLayout>
  );
};

export default ClipCreatorPage;
