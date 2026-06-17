import { Bookmark } from "lucide-react"
const Card = (props)=>{

  console.log(props)
  return (
    <>
      <div className="card">
      <div className="top">
        <img className="img" src={props.logo} alt="" />
        <button className='btn'>Save  <Bookmark size={15}/></button>
      </div>

      <div className="center">
        <h3>{props.company} <span className='span'>{props.date}</span></h3>
        <h2> {props.post}</h2>
        <div className='boxes'> 
          <button>{props.tag1}</button>
          <button>{props.tag2}</button>
        </div>
         
         

      </div>
      <div className="bottom">

         <div className='details'>
           
            <h3>{props.pay}</h3>
            <p>{props.loc}</p>
          
          
          </div> 
         
           <button>Apply Now</button>
       
      </div>

     </div>

    </>
  )
}

export default Card 