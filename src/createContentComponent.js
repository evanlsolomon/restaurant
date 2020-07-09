const createComponent = (htmlType, value) => {

    const element = document.createElement(htmlType);
    
    if(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(htmlType)){
        element.textContent  = value;
    } else if (htmlType === 'img'){
        element.src = value[0];
        element.style.height = "400px"
    } else if (['p', 'address1', 'address2'].includes(htmlType)) {

        for (let i = 0; i< value.length-1; i++){
            const extra = document.createElement(htmlType);
            extra.textContent = value[i];
            parent.appendChild(extra);
        }
        element.textContent = value[value.length - 1];
    } else {
        console.error('UNKNOWN PROP TYPE')
    }
    return element;
};
export default createComponent;
