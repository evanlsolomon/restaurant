import createComponent from './createContentComponent';

let contentDiv = document.createElement('div');

const composePageContent = (contentObject) => {
    for(let contentElement in contentObject){
        let newElement = createComponent(contentElement,contentObject[contentElement]);
        contentDiv.appendChild(newElement);
    }
    return contentDiv;
}

export {composePageContent}

