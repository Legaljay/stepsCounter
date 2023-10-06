import { useState } from 'react';
import './App.css'
import { DateCounter } from '../public/components/dateCounter';


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
   const [step, setStep] = useState(1)
   const [isOpen, setIsOpen] = useState(true)

   function toggle(){
    setIsOpen(is => !is);
   }
  function handlePrevious(){
    setStep((prev) => prev == 1? 1: prev - 1)
  }

  function handleNext(){
    setStep((prev) => prev >= 3 ? 3: prev + 1)
  }
  return (
    <>
      <button className="close" onClick={toggle}>&times;</button>
      {isOpen && (<div className='steps'>
        <div className='numbers'>
          <div className={step >= 1 ? 'active': ''}>1</div>
          <div className={step >= 2 ? 'active': ''}>2</div>
          <div className={step >= 3 ? 'active': ''}>3</div>
        </div>

        <p className='message'>Step {step}: {messages[step - 1]}</p>

        <div className="buttons">
          <button style={{backgroundColor: "#7950f2", color: "#fff"}} onClick={handlePrevious}>Previous</button>
          <button style={{backgroundColor: "#7950f2", color: "#fff"}} onClick={handleNext}>Next</button>
        </div>

      </div>)}
      <DateCounter />
    </>
  )
}

export default App
 