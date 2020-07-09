import createComponent from './createContentComponent';
import createMenuCard from './createMenuCard';

let contentDiv = document.getElementById("content");

const composePageContent = (contentObject, page) => {
    if(page === "menu"){
        for(let menuItem of contentObject){
            let newMenuCard = createMenuCard(menuItem);
            contentDiv.appendChild(newMenuCard);
        }
    }
    else if(page === "home"){
        for(let contentElement in contentObject){
            let newElement = createComponent(contentElement,contentObject[contentElement]);
            contentDiv.appendChild(newElement);
        }
    }
    return contentDiv;
}

export {composePageContent}

