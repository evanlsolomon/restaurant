
function addComponent(htmlType, propertyObject, contentContainer) {
    const element = document.createElement(htmlType);
    const value = propertyObject[htmlType];
    
    if(htmlType === 'h1'){
        element.textContent  = value;
    } else if (htmlType === 'img'){
        element.src = value[0];
        element.style.height = "400px"
    } else if (htmlType === ('p' || 'address1' || 'address2') ) {
        for (let i = 0; i< value.length-1; i++){
            const extra = document.createElement(htmlType);
            extra.textContent = value[i];
            parent.appendChild(extra);
        }
        element.textContent = value[value.length - 1];
    } else {
        console.error('UNKNOWN PROP TYPE')
    }
    contentContainer.appendChild(element);
}
export default addComponent;
