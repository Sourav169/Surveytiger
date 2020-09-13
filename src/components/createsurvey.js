import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom'
import Publish from './publish'
import './survey.css'
import { RadioButtonChecked } from '@material-ui/icons';


/*const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));*/

function Createsurvey() {

  const [option, setOption] = useState(" ");
  const [open, setOpen] = useState(false);
  const [quest, setQuest] = useState({ question: " ", one: " ", two: " ", three: " ", four: " " })
  const [quest1, setQuest1] = useState({ question: " ", one: " ", two: " " })
  const [items, setItems] = useState([]);
  const [items1, setItems1] = useState([]);
  const [add, setAdd] = useState(false);
  console.log(items)


  const Addquestion = () => {
    if (option == "multi") {
      const newItem = {
        question: quest.question,
        one: quest.one,
        two: quest.two,
        three: quest.three,
        four: quest.four
      }
      setItems([...items, newItem]);
     /* const notes=localStorage.getItem("itemstorage")
      if(notes==null){
        var myitem=[];
      }else{
        myitem=JSON.parse(notes)
      }
     
      myitem.push(newItem)
      localStorage.setItem("itemstorage",JSON.stringify(myitem))*/
      setQuest({
        question: " ",
        one: " ",
        two: " ",
        three: " ",
        four: " "
      })
    }
    else if (option == "single") {
      const newItem1 = {
        question: quest1.question,
        one: quest1.one,
        two: quest1.two,
      
      }
      setItems1([...items1, newItem1]);
     /* const notes=localStorage.getItem("itemstorage")
      if(notes==null){
        var myitem=[];
      }else{
        myitem=JSON.parse(notes)
      }
     
      myitem.push(newItem)
      localStorage.setItem("itemstorage",JSON.stringify(myitem))*/
      setQuest1({
        question: " ",
        one: " ",
        two: " ",
       
      })
    }
    
    

    

  }
  const handleChange = (event) => {
    setOption(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const publish = () => {
    setAdd(true)
  }
  const confirm=()=>{
    window.alert("your question is published")
  }
  return (
    <div>
      {
        add===false?
      <div>
        
        <Button className="btn" onClick={handleOpen} style={{ display: 'block', marginTop: "2rem" ,marginLeft:'7rem'}}>
          <h2>SELECT QUESTION TYPE</h2>
        </Button>
        <FormControl className="formControl" style={{ marginTop: "2rem", width: "25rem" }}>
          <InputLabel id="demo-controlled-open-select-label" style={{ marginBottom: "7rem", marginLeft: '8rem' }} ><h3>TYPE</h3></InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={option}
            onChange={handleChange}
            style={{ marginTop: "3rem" ,marginLeft:"8rem"}}
          >

            <MenuItem value={"multi"} >MultipleType</MenuItem>
            <MenuItem value={"single"}>SingleType</MenuItem>

          </Select>
        </FormControl>

      </div>:<div></div>
}
     
        {
          option == "multi" && add === false ?
          <div>
            <div className="controller">
              <ul className="form">
                <form >
                  <li>
                    <h2>Question?</h2>
                    <input type="text" value={quest.question} onChange={e => setQuest({ ...quest, question: e.target.value })}>

                    </input>
                  </li>
                  <li>
                    <h3>Option1</h3>
                    <input type="text" value={quest.one} onChange={e => setQuest({ ...quest, one: e.target.value })}></input>
                  </li>
                  <li>
                    <h3>Option2</h3>
                    <input type="text" value={quest.two} onChange={e => setQuest({ ...quest, two: e.target.value })}></input>
                  </li><li>
                    <h3>Option3</h3>
                    <input type="text" value={quest.three} onChange={e => setQuest({ ...quest, three: e.target.value })}></input></li>
                    <li>
                  <h3>Option4</h3>
                  <input type="text" value={quest.four} onChange={e => setQuest({ ...quest, four: e.target.value })}>

                  </input></li>
                </form>
              </ul> </div>
              <button onClick={Addquestion} style={{ marginTop: "1rem", marginLeft: "20rem", width: "10rem" }}>ADD Question</button> 
              
        
              
              <button onClick={publish} style={{ width: "10rem" }}>publish</button></div>
            : <form>

            </form>
        }
        {
          option == "single" && add==false? 
          <div>
          <div className="controller">
            <ul className="form">
              <form >
                <li>
                  <h2>Question?</h2>
                  <input type="text" value={quest1.question} onChange={e => setQuest1({ ...quest1, question: e.target.value })}>

                  </input>
                </li>
                <li>
                  <h3>Option1</h3>
                  <input type="text" value={quest1.one} onChange={e => setQuest1({ ...quest1, one: e.target.value })}></input>
                </li>
                <li>
                  <h3>Option2</h3>
                  <input type="text" value={quest1.two} onChange={e => setQuest1({ ...quest1, two: e.target.value })}></input>
                </li></form></ul></div>
                <button onClick={Addquestion} style={{ marginTop: "2rem", marginLeft: "20rem", width: "8rem" }}>ADD Question</button> 
              
        
              
              <button onClick={publish} style={{ width: "8rem" }}>publish</button> 
           
                </div> : <form>

            </form>
             
              
              
              

        }
    
    



      {
        add == true  ?
          (items.map(item => (
            <ul>
              <li style={{listStyleType:"none"}}>
                <h1>
                  {item.question}
                </h1>
                </li>
                <label>
                  <input type="checkbox"></input>
                  {item.one}
                </label>
               <li style={{listStyleType:"none"}}>
               <label>
                  <input type="checkbox"></input>
                  {item.two}
                </label>
                  </li> <li style={{listStyleType:"none"}}>
                  <label>
                  <input type="checkbox"></input>
                  {item.three}
                </label>
                  </li> <li style={{listStyleType:"none"}}>
                  <label>
                  <input type="checkbox"></input>
                  {item.four}
                </label>
                  </li>
                 
                   </ul>
                  
               ))):
                 <div></div>
                 
              }
                {
        add == true  ?
          (items1.map(item => (
            <ul>
              <li  style={{listStyleType:"none"}}>
                <h1>
                  {item.question}
                </h1>
                </li>
                <li style={{listStyleType:"none"}}>
               <label>
                  <input type="checkbox"></input>
                  {item.one}
                </label>
                  </li>   <li style={{listStyleType:"none"}}>
               <label>
                  <input type="checkbox"></input>
                  {item.two}
                </label>
                  </li>
               
                   </ul>
               ))):
                 <div></div>
                 
              }
              {
                add==true? <button onClick={confirm} style={{marginLeft:"12rem", width:"9rem"}}>Confirm</button>:<div></div>
              }
   
   </div>
          );
}
export default Createsurvey
