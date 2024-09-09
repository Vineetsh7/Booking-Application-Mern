import Footer from "../components/Footer.component";
import Header from "../components/Header.component";
import Hero from "../components/Hero.component";

 
interface Props{
children:React.ReactNode
}


const Layout = ({children}:Props) => {
  return (
    <div className="flex flex-col min-h-screen">
     <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-500 to-slate-800">
     <Header />
     <Hero/>
     </div>
     <div className="container mx-auto py-10 flex-1">{children}</div>
      <Footer/>
    </div>
  );
};

export default Layout;
