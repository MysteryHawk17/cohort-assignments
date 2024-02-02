import { useState } from 'react'
import './colorChanger.css'

const ColorChanger = () => {
    const [color,setColor]=useState("WHITE")
    const colors=['RED','YELLOW','GREEN','BLUE','ORANGE','BLACK','WHITE']
    const handleClick=(e)=>{
        console.log(e.target.innerHTML);
        const colo=e.target.innerHTML=="DEFAULT"?"WHITE":e.target.innerHTML
        setColor(colo)
    }
    return (
        <div className='ColorChanger'>
            <div className="container">
                <div className="display" style={{backgroundColor:color}} >

                </div>
                <div className="panel">
                     {colors.map((e,index)=>{
                        return (<div className='but' onClick={handleClick} key={index} style={{backgroundColor:e,color:e=='WHITE'||e=='YELLOW'?'BLACK':'WHITE'}}>
                             {e=='WHITE'?'DEFAULT':e}   

                        </div>)
                     })}   
                </div>
            </div>
        </div>
    )
}

export default ColorChanger