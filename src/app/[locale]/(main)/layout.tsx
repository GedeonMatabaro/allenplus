import Footer from "@/components/Footer";
import { Navigation } from "@/components/navigation";

export default async function Layout({
  children,

}: Readonly<{
  children: React.ReactNode;
  
}>) {
  
  return <>
      <div className="min-h-screen min-w-[320px] overflow-hidden">
        <Navigation />
        {children}
        <Footer />
      </div>
        
     
    </>
}