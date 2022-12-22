 import './navigation.css'
import collageLogo from './cropped-ITG-LOGO-2-1-446x79.png'    //collageLogo Shown in nav-2

// Second Navigation Bar 
function Navigation(){
return(
    <div>

<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid d-flex">
    <img src={collageLogo} alt="" />
    
   
  </div>
</nav>
   </div>
)
}
export default Navigation;