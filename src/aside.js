import React from "react";
import './css/main.css';
import Login_title from './components/Title';
import LoginBor from './components/LoginBor';
export default function aside() {
   return(
      // Insert Compoenet Here [Title | LoginBorder]
      <div id="about_aside">
            <Login_title />
            <LoginBor />
      </div>
   );
}
