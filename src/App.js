import React from"react";
import"./appCss/app.css";
import Clock from "./components/clock";


function App(){
  return(
    <div className="App">

<div class="contenedor">

<nav>

    <a class="logoName" href="#"><b>gtdev</b></a>
    
<div class="navegacion">
    <a href="#">Youtube</a>
    <a href="#">Discord</a>
    <a href="#">GitHub</a> 
</div>

<div class="reloj">
    <Clock></Clock>
</div>

</nav>

</div>


  
    
  </div>
    
 );
}

export default App;