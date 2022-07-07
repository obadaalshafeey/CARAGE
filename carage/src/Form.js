import React, { useState } from 'react';

function Example() {
  const [showForm, setShowForm] = useState(false);

  const showFormm = (e) => {
    e.preventDefault() 
    setShowForm(!showForm);

  }

  return (
    <div>
    
        <button onClick={showFormm}value='showForm' >Order</button>
     

      {showForm && (
        <form>
     <div className="container">
  <form action="/action_page.php">
    <div className="row">
      <div className="col-25">
        <label htmlFor="name"> Name</label>
      </div>
      <div className="col-75">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name.."
        />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="name"> Email</label>
      </div>
      <div className="col-75">
        <input
          type="Email"
          id="Email"
          name="Email"
          placeholder="Your Email.."
        />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="lname">Phone</label>
      </div>
      <div className="col-75">
        <input
          type="Number"
          id="Number"
          name="Number"
          placeholder="Your Number.."
        />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="country">Car Type</label>
      </div>
      <div className="col-75">
        <select id="Car Type" name="Car Type">
          <option value="car1">car1</option>
          <option value="car2">car2</option>
          <option value="car3">car3</option>
        </select>
      </div>
    </div>

    <div className="row">
      <div className="col-25">
        <label htmlFor="country">Order</label>
      </div>
      <div className="col-75">
        <select id="Order" name="Order">
          <option value="Order">Internal</option>
          <option value="Order">External</option>
       
        </select>
      </div>
    </div>
   
   
    <br />
    <div className="row">
      <input type="submit" defaultValue="Submit" />
    </div>
  </form></div></form>

      )}
    </div>
  )
}
export default Example;