import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Dashboard2 from './components/Dashboard2/Dashboard2'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'

function App() {

  return (
    <>
      <div>
        <Navbar></Navbar>
        <h1 className='text-6xl text-purple-400 ml-11 p-2'>Hello from tailwind</h1>
        <PriceList></PriceList>
        <Dashboard></Dashboard>
        <Dashboard2></Dashboard2>
      </div>
    </>
  )
}

export default App
