import React from 'react';
import { ArrowLeft, Compass } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 sm:py-32 bg-[#F5F4EF] min-h-[60vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#315FEA]/10 text-[#315FEA] flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#778397]">
            404 • Page Not Found
          </span>
          <h1 className="font-heading text-3xl font-bold text-[#101C32]">
            Lost in the Market
          </h1>
          <p className="font-body text-sm text-[#778397]">
            The requested page does not exist or has been relocated within the academy catalog.
          </p>
        </div>

        <div className="pt-2 flex justify-center">
          <Button to="/" variant="secondary" size="md" icon={<ArrowLeft className="w-4 h-4" />}>
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};
