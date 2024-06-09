import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import NotFound from './components/NotFound';

const pages = [
  { path: '/', name: 'Home', component: Home },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/new-items', name: 'New Items', component: null },
  { path: '/discounts', name: 'Discounts', component: null },
  { path: '/in-stock', name: 'In Stock', component: null },
  { path: '/delivery', name: 'Delivery', component: null },
  { path: '/sign-in', name: 'Sign In', component: SignIn },
  { path: '/about', name: 'About Us', component: About }
];

const pagesDefault = pages.map(page => {
    const updatedPage = { ...page }; 
    if (!updatedPage.component) { 
      updatedPage.component = NotFound;
    }
    return updatedPage;
  });
  
export default pagesDefault;