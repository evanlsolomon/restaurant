import addComponent from './addContentComponent';

function contact() {
    const pageContent = {
        h1: 'Contact us',
        address1: '735 Broad Way',
        address2: 'Far far away, FR 49285',
        phone: '0e9-9438',
        email: 'nomail@notmail.neptune'
    };
    
    const contentContainer = document.getElementById('content');
    
    for (const property in pageContent){
        // const value = pageContent[property];
        // if (property === 'h1') {
        //     contentContainer.appendChild(make)
        // }
        addComponent(property, pageContent, contentContainer)
    }
    
};

export default contact;