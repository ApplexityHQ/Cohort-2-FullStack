
import { RevenueCard } from '../components/RevenueCard'
import './App.css'

function App() {

  return (
    <>
    {/* <div style = {{display: "flex", justifyContent: "space-evenly"}}>
      <div style = {{backgroundColor: "red"}}> hi </div>
      <div style = {{backgroundColor: "green"}}> hi </div>
      <div style = {{backgroundColor: "yellow"}}> hi </div>
      <div style = {{backgroundColor: "aqua"}}> hi </div>
      <div style = {{backgroundColor: "blue"}}> hi </div>
    </div> */}

    {/* <div className='flex justify-center' >
      <div className='bg-amber-600'> hi </div>
      <div className='bg-red-600'> hi </div>
      <div className='bg-blue-600'> hi </div>
      <div className='bg-yellow-600'> hi </div>
      <div className='bg-pink-600'> hi </div>
    </div> */}

    {/* <div className='grid grid-cols-10' >
      <div className='bg-amber-600 col-span-2'> hi </div>
      <div className='bg-red-600 col-span-2'> hi </div>
      <div className='bg-blue-600 col-span-1'> hi </div>
      <div className='bg-yellow-600 col-span-3'> hi </div>
      <div className='bg-pink-600 col-span-2'> hi </div>
    </div> */}

    {/* <div className='grid grid-cols-1 md:grid-cols-3' >
      <div className='bg-amber-600 col-span-1'> hi </div>
      <div className='bg-red-600 col-span-1'> hi </div>
      <div className='bg-blue-600 col-span-1'> hi </div>
    </div>

    <div className='bg-red-500 md:bg-indigo-500'>
      hey there
    </div> */}

    <div className="grid grid-cols-4">  
      <RevenueCard title={"Amount pending"} amount={"92,234.45"} orderCount={13}/> 
    </div>

    </>
  )
}

export default App
