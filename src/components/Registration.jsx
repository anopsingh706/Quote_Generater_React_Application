
import React from "react";
function Register(props){

return(

    <div>
        <form id="form">
          
        <label>Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your Name"
          required
        />
        <br /><br />
        <label>email</label>
        <input
          id="email"
          type="text"
          placeholder="Enter email id"
          required
        />
        <br /><br /><br /><br />

        <button id="btn2" Onclick="addbook()">Submit</button>

        <button id="btn2" Onclick="cancle()">Cancle</button>
        <h4 >Created-By: Anop Singh</h4>

      </form>
      

    </div>
    
);

}

export default Register;