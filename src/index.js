import {HEADER} from './header'
import {HOME} from './home'
import {MENU} from './menu'
// import contact from './contact'

//landing page;
HEADER.render();
HOME.render();


HEADER.getButtons().forEach( button =>
    button.addEventListener( "click", switchTab ) )
    
    
//tab nav
function switchTab(event) {
    let selectedPage = event.target.value;
    document.getElementById("content").innerHTML = "";
    if(selectedPage === "home"){
        HOME.render();
    } else if ( selectedPage === "menu"){
        MENU.render();
    } else if (selectedPage === "contact-us") {
        console.log("render the contact page");
    }
};



