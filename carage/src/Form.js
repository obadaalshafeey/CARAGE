import React, { useState } from 'react';
import axios from 'axios';
import DateTimePicker from 'react-datetime-picker';
import './Components/Singlepages/Car_wash/Form2.css';

function Form() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [car_type, setCarType] = useState('');
  const [location, setLocation] = useState(999);
  const [order, setOrder] = useState(111);
  const [auto_order, setAuto] = useState(1);
  const[time_picker,setTime]=useState(new Date());
// Error////////////////
  const [nameErr,setNameErr] = useState({});
  // const [PhoneErr,setPhoneErr] = useState({});
  // const [TimeErr,setTimeErr] = useState({});



  const name_handle = (e)=>{setName(e.target.value)}
  const phone_number = (e)=>{setPhone(e.target.value)}

  const car_typee = (e)=>{setCarType(e.target.value)}
  const locationn = (e)=>{setLocation(e.target.value)}
  const order_type = (e)=>{setOrder(e.target.value)}
  
  
  const auto_order_weekly = (e)=>{setAuto(e.target.value)}
  const clickHandel = ()=>{
    axios.post('http://localhost/carage/carage_backend/washing.php?name='+name+'&phone_number='+phone+'&car_type='+car_type+'&location='+location+'&wash_type='+order+'&auto_order_weekly='+auto_order+'&time_picker='+time_picker)
    .then((data) => {
        
    })
    .catch((error) => {
        console.error(error);
    });
}


  const showFormm = (e) => {
    e.preventDefault() 
    setShowForm(!showForm);
    const isValid = formValidation();

  }
const formValidation = () =>{
const nameErr ={};
// const PhoneErr ={};
// const TimeErr ={};
let isValid = true;

if(name.trim().length <5){
  nameErr.nameShort="Name is to short";
  isValid =false;
}
setNameErr(nameErr);



}
  return (
    <div>
    
        <button onClick={showFormm}value='showForm' >Order</button>
     

      {showForm && (
        <>


         
<div className="main-block">
  <h1>Car Wash Form</h1>
    <div className="info">
 
    <label>Name</label>      
    <input type={'text'} value ={name} onChange={(e)=>{setName(e.target.value)}}  placeholder="Full Name" />
<br/>{Object.keys(nameErr).map((key)=>
   <div style={{color :"red"}}>{nameErr[key]}</div>)
}
    {/* <input type={'text'} onChange={name_handle}  placeholder="Full Name" /> */}

    <input type={'number'} onChange={phone_number}  placeholder="Phone number" />
      <input type={'text'} onChange={locationn}  placeholder="Event location" />
   
      <select onChange={car_typee}>  
        Type of Car
        <option  type='text' value="Sedan" >Sedan</option>
        <option  type='text' value="CUV" >CUV</option>
        <option  type='text' value="Hatchback">Hatchback</option>
        <option  type='text' value="Coupe"> Coupe</option>
        <option  type='text' value="Roadster"> Roadster</option>
      </select>
      <select onChange={order_type} value="Type of Wash">
      Type of Wash
        <option type={'text'} value="Internal">Internal</option>
        <option type={'text'} value="Externel">Externel</option>
      </select>
      
       
       

     <div > <div className="info">
        <p>Time picker</p> </div> 
      <DateTimePicker
      onChange={setTime}
      value={time_picker}/>
    </div>



    
    </div>
    {/* Auto Order Input */}
    <h3>Auto Order?</h3>
    <div className="metod">
      <div>
        <input type="radio" id="radioOne" name="metod" value="1" onChange={auto_order_weekly}/>
        <label htmlFor="radioOne" className="radio"> Yas</label>
      </div>
      <div>
        <input type="radio" defaultValue="0" id="radioTwo" name="metod"  value="0" onChange={auto_order_weekly} />
        <label htmlFor="radioTwo" className="radio">No</label>
      </div>
    </div>
        {/* Submit Button */}

    <button  onClick={clickHandel}>
      Submit
    </button>
 { car_type+"   "}
 {order}


</div>

  {/* <div>
  <label>NAME: </label>
  <br/>
  <input type={'text'} onChange={name_handle} />
  </div>
  <div>
  <label>Phone number </label>
  <br/>
  <input type={'number'} onChange={phone_number} />
  </div>
  <div>
  <label>EMAIL: </label>
  <br/>
  <input type={'text'} onChange={car_typee} />
  </div>
  <div>
  <label>AGE: </label>
  <br/>
  <input type={'text'} onChange={locationn} />
  </div>
  <div>
  <label>order: </label>
  <br/>
  <input type={'text'} onChange={order_type} />
  </div>
  <div>
  <label>Order weekly </label>
  <br/>
  <input type={'number'} onChange={auto_order_weekly} />
  </div>
  <button onClick={clickHandel}>Insert</button>
</> */}
</>
      )}
    </div>
  )
}
export default Form;