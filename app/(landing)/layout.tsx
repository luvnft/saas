import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const LandingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="h-full  overflow-auto">
      {/* <div className="mx-auto max-w-screen-xl h-full w-full"> */}
        {children}
        <Analytics />
        <SpeedInsights />
      {/* </div> */}
    </main>
   );
}
 
export default LandingLayout;