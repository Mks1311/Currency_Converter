import { useEffect, useState } from 'react'
import './App.css'
import InputText from "./InputText.jsx"
import InputSelect from "./InputSelect.jsx"
import useCurrencyConverter from "./hooks/useCurrencyConverter.js"

function App() {
  const [Amount, SetAmount] = useState("1");
  const [From, SetFrom] = useState("USD");
  const [To, SetTo] = useState("INR");
  const currencyInfo = useCurrencyConverter(From)
  const options = Object.keys(currencyInfo);
  const [ConvertedAmount, SetConvertedAmount] = useState(0);

  useEffect(() => {
    SetConvertedAmount(Number(Amount) * Number(currencyInfo[To]));
  }, [Amount, From, To, currencyInfo])

  const swap=()=>{
    SetFrom(To);
    SetTo(From);
  }
  return (
    <>
      <div className='h-full w-full flex flex-wrap items-center justify-center font-Barlow'>
        <div className='mx-5 px-3 py-5 flex flex-wrap items-center bg-white text-black 
        rounded-lg text-xl font-medium  justify-start w-full gap-3 max-w-sm'
        style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 60px 40px -7px"}}
        >
          <div className='flex flex-wrap gap-5 justify-start w-full '>
            <InputText
              value={Amount}
              setAmount={SetAmount}
            />
            <div className='w-full flex flex-wrap max-w-sm'>
              <InputSelect
                label="From"
                currency={From}
                options={options}
                setCurr={SetFrom}
                useCurrencyConverter={useCurrencyConverter}
              />
              <div className='h-10 w-10 m-3 cursor-pointer'
              onClick={swap}
              >
                <img src='img1.png'></img>
              </div>
              <InputSelect
                label="To"
                currency={To}
                options={options}
                setCurr={SetTo}
              />
            </div>

          </div>
          <div className=' w-full flex flex-wrap'>
            <div className='w-full text-lg'>
              {Amount} {From} =
            </div>
            <div className='w-full text-4xl'>
              {ConvertedAmount} {To}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
