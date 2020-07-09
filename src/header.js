
const HEADER = (() => {

    let headerDOM
    let navbarDOM;
    let buttonsDOM = [];

    const getButtons = () => buttonsDOM;

    const render = () => {
        headerDOM = document.createElement("header");
        navbarDOM = document.createElement("nav");

        let aboutUsButton = createNavButton("Home");
        let menuButton = createNavButton("Menu");
        let contactButton = createNavButton("Contact Us");
        
        buttonsDOM.push(aboutUsButton, menuButton, contactButton);
        
        for(let button of buttonsDOM){
            button.setAttribute("class", "button");
            navbarDOM.appendChild(button);
        }
        document.body.getElementsByTagName("header")[0].appendChild(navbarDOM);
    }

    return {render, getButtons};

})();

export {HEADER};




function createNavButton(pageName){
    let navButton = document.createElement("button");
    navButton.innerText = pageName;
    let lowerCaseHyphenPageName = pageName.toLowerCase().replace(" ", "-");
    navButton.id = `${lowerCaseHyphenPageName}-btn`
    navButton.value = lowerCaseHyphenPageName;
    return navButton;
}
