import './App.css'
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import ChatSection from './ChatSection';
import NavDetails from './NavDetails';

function App() {

  return (
    <>
      <div className='App'>
      <NavBar />

      
        <NavDetails/>
       

        <Sidebar />
        <ChatSection />
      </div>
    </>
  )
}

export default App