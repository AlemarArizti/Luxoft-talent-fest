
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingPage } from './Pages/Landing Page/LandingPage'
import { Emotions } from './Pages/Emotions/Emotions'
import { Description } from './Pages/Description/Description'

// Imports for "not" case
import { Step1 } from './Pages/Step 1/Step1'
import { Step2Mandala } from './Pages/Not - Step 2/Step2-Mandala'
import Step3 from "./Pages/Step 3/Step3";
// Imports for "yes" case
import { Step3SelfQuestions } from './Pages/Yes - Step 3/Step 3 - SelfQuestions'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes >
          <Route path='/' element={<LandingPage />} />
          <Route path='/emotions' element={<Emotions />} />
          <Route path='/description' element={<Description />} />
           <Route path='/step1' element={<Step1 />} />
          <Route path= '/not-step2' element={<Step2Mandala />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path='/yes-step3' element={<Step3SelfQuestions />} />
        </Routes>
      </BrowserRouter>
      {/* <LandingPage /> */}

    </div>
  );
}

export default App;
