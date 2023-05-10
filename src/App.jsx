import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'

function App() {

  return (
    <>
      <div>
        <Navbar></Navbar>
        <h1 className='text-6xl text-purple-400 ml-11 p-2'>Hello from tailwind</h1>
        <PriceList></PriceList>
      </div>
    </>
  )
}

export default App
