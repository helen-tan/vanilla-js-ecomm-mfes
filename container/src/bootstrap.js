import { mount as mountProducts } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartShow';

console.log('container');

// Specify element in index.html where the mfe can be safely rendered
const productsMFE = document.querySelector('#products-mfe');
mountProducts(productsMFE);

const cartMFE = document.querySelector('#cart-mfe');
mountCart(cartMFE);