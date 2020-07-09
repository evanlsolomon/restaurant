import createComponent from "./createContentComponent";

function createMenuCard(menuItem) {

    const card = document.createElement("div");

    for (let element in menuItem){
        console.log(element);
        let newElement = createComponent(element,menuItem[element]);
        card.appendChild(newElement);
    }

    return card;
};
export default createMenuCard;
