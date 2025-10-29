import React from "react";

type Props = {
  title: string;
  subtitle?: string;
};

const PageHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="relative z-10 py-6 px-4">
      <div className="container mx-auto">
        <div className="bg-card/50 backdrop-blur-md px-6 py-6 rounded-2xl border border-border">
          <h1 className="text-2xl md:text-3xl font-extrabold text-foreground/90">{title}</h1>
          {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
