import oysters from './assets/oysters.jpg'
import steaksalad from './assets/steaksalad.jpg'
import pizza from './assets/pizza.jpg'
import sausageEggplantFried from './assets/sausageEggplantFried.jpg'
import cookies from './assets/chocolateOliveOilCookies.jpg'
import { composePageContent } from './composePageContent';

const menuItems = [
    {
        h4: "Oysters",
        p: ['8'],
        img: [oysters, "oysters"],
    },
    {   h4: "Steak Salad",
        p: ['9'],
        img: [steaksalad, 'steak-salad']
    },
    {   h4: "Pizza",
        p: ['11'],
        img: [pizza, 'homemade-pizza']
    },
    {   h4: "Sausage Eggplant Stir-fry",
        p: ['7'],
        img: [sausageEggplantFried, 'sausage-and-veggie-stirfry']
    },
    {   h4: "Cookies",
        p: ['12'],
        img: [cookies, 'cookies']
    }
];

const MENU = (() => {
        const page = "menu";
        const pageContent = menuItems;

    const render = () => {composePageContent(pageContent, page)};
    return {render};    
})();

export {MENU};




