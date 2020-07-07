import Pizza from './assets/pizza.jpg'
import { composePageContent } from './composePageContent';

const HOME = (() => {

    const render = () => {
        const pageContent = {
            h1: 'Welcome to our pizza house',
            img: [Pizza, 'homepage-img'],
            p: ['the dough is crispy and thin'],
        };
        
        const contentContainer = document.getElementById('content');
        contentContainer.appendChild(composePageContent(pageContent));

    }
    return {render};
    
})();

export { HOME };