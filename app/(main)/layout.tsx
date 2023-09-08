import React from 'react';
import StepsBullets from '../_components/StepsBullets';
import { ThemeSwitcher } from '../_components/ThemeSwitcher';

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <main className="h-screen w-full max-w-screen-xl mx-auto my-0">
      <div className="h-full grid grid-cols-12">
        <div className="h-full col-span-3 flex flex-col items-center justify-between p-4 border-r-2">
          <StepsBullets />
          <ThemeSwitcher />
        </div>
        <div className="col-span-9 p-8 h-full">{children}</div>
      </div>
    </main>
  );
};

export default layout;
