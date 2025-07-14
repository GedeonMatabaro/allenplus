// pages/404.tsx

import Footer from "@/components/Footer";
import { Navigation } from "@/components/navigation";
import { NotFound } from "@/components/not-found/Not-Found";


export default function NotFoundPage() {
  return (
    <div className="min-h-screen">
      
      <Navigation />
      <NotFound />
      <Footer />
    </div>
  );
}