import Card from "./Components/card.jsx"
import Navbar from './Components/Navbar.jsx'


const App = () => {
  
    const user = "Ilhan Madni"
  return (
   
    <>


     <>
     <Navbar/>
     <div className="parent">
       <div className="name">
         <h1> Hello Guys I am {user}</h1>
          <Card/> {/* basically this is called Components Structure */}
           
      </div>
           
      
     </div>
    </>
  
    
    </>
  

   
  )
}

export default App