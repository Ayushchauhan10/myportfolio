import { Banner } from "./components/banner/Banner";
import  Contact from "./components/contact/Contact";
import { Features } from "./components/features/Features";
import { Navbar } from "./components/navbar/Navbar";
import { Projects } from "./components/projects/Projects";
import  Resume from "./components/resume/Resume";
// import  Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
       <Navbar/>
    <div className="max-w-screen-2xl mx-auto px-16" > 
       <Banner/>
       <Features/>
       <Projects/>
       <Resume/>
       {/* <Testimonial/> */}
       <Contact/>
       <Footer/>
    </div>
    </div>
  );
}

export default App;
