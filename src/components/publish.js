import React ,{useContext}from 'react'
import { Usercontext } from './createsurvey'

class Publish extends React.Component {
  
   render(){
    const {items}=this.props;
    
    return (
        <>
        <h1>questions are</h1>
           {
               
            items.map(item=>(
                <h1>
                    {item.question}
                </h1>
            ))
              
           }
        </>
    )
    }
}
export default Publish