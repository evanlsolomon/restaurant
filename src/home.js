import Pizza from './assets/pizza.jpg'
import { composePageContent } from './composePageContent';

const HOME = (() => {
    const page = "home"
    const pageContent = {
        h1: 'Welcome to our pizza house',
        img: [Pizza, 'homepage-img'],
        p: ['the dough is crispy and thin'],
    };

    const render = () => {composePageContent(pageContent, page)};
    return {render};    
})();

export { HOME };