import faker from 'faker';

const mount = (elem) => {
    const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;
    
    elem.innerHTML = cartText;
}

if (process.env.NODE_ENV === 'development') {
    const elem = document.querySelector('#dev-cart');

    // If in dev mode & in isolation
    if (elem) {
        mount(elem);
    }
}

export { mount };