import React, { Component } from "react";

export default class LoginBor extends Component {
   render() {
      return(
         <form action="" method="GET" id="LoginBor">
                  <div id="forms">
                           <center><h2>Register new Accunet</h2></center>
                           <input type='text' placeholder="Username" className="in1"/> <br/>
                           <input type='password' placeholder="Password" className="in1"/> <br/>
                           <input type='submit'  name="sub_login" className="in1" id="btn_sub"/>
                  </div>
         </form>
      );
   }
}
