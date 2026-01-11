import { mount } from 'products/ProductsIndex';
import 'cart/CartShow';

console.log('container');

// Specify element in index.html where the mfe can be safely rendered
const productsMFE = document.querySelector('#products-mfe');
mount(productsMFE);