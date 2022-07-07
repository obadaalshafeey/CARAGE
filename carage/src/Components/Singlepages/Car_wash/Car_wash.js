// import React from 'react'
// import axios from 'axios';

// function Car_wash() {

//     const  create = ()=>{
//         axios.get("http://localhost/carage/carage_backend/washing.php?name=ahmad&phone_number=0777777777&car_type=bus&location=amman&wash_type=premuim&auto_order_weekly=1")
        
//         }

//   return (
//     <div>
//               <button onClick={create}>create data</button>

//     </div>
//   )
// }

// export default Car_wash

import React, { useState } from 'react';
import axios from 'axios';

function Car_wash() {

    const [name, setName] = useState('test-name');
    const [phone, setPhone] = useState('test-name');
    const [car_type, setCarType] = useState('test-email');
    const [location, setLocation] = useState(999);
    const [order, setOrder] = useState(111);
    const [auto_order, setAuto] = useState(1);


    const name_handle = (e)=>{setName(e.target.value)}
    const phone_number = (e)=>{setPhone(e.target.value)}

    const car_typee = (e)=>{setCarType(e.target.value)}
    const locationn = (e)=>{setLocation(e.target.value)}
    const order_type = (e)=>{setOrder(e.target.value)}
    const auto_order_weekly = (e)=>{setAuto(e.target.value)}


    const clickHandel = ()=>{
        axios.post('http://localhost/carage/carage_backend/washing.php?name='+name+'&phone_number='+phone+'&car_type='+car_type+'&location='+location+'&wash_type='+order+'&auto_order_weekly='+auto_order)
        .then((data) => {
            
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return (  
        <>
            
            <div>
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
        </>
    );
}

export default Car_wash;