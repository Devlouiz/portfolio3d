import { BrowserRouter } from "react-router-dom";
import { Service,Contact,Experience,Feedbacks,Hero,
Navbar,Tech,Works,StarsCanvas } from './components';
import { useState } from "react";

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className=""/*"bg-hero-pattern bg-cover 
        bg-no-repeat bg-center"*/>
          <Navbar handleFlip={handleFlip}/>
          <Hero handleFlip={handleFlip} isFlipped={isFlipped}/>
        </div>
        <Service/>
        <Experience/>
        <Tech/>
        <Works/>
        {/*<Feedbacks/>*/}
      </div>
      <div className="relative z-0 bg-primary">
        <Contact/>
        {/*<StarsCanvas/>*/}
      </div>
    </BrowserRouter>
  )
}

export default App
