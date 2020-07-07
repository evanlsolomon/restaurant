import {HOME} from './home'
import contact from './contact'
import {HEADER} from './header'
import {ABOUT} from './about'


HEADER.render();
HOME.render();


console.log(HEADER.getButtons());
HEADER.getButtons().forEach( button =>
    button.addEventListener( "click", switchTab ) )

function switchTab(event) {
    let selectedPage = event.target.value;
    document.getElementById("content").innerHTML = "";
    if(selectedPage === "home"){
        HOME.render();
    } else if ( selectedPage === "about"){
        ABOUT.render();
    } else if (selectedPage === "contact-us") {
        console.log("render the contact page");
    }
};

// tab.render();
// contact();



