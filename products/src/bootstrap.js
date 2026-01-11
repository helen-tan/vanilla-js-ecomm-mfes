import faker from 'faker';


const mount = (elem) => {
    let products = '';
    
    for (let i=0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    }
    
    elem.innerHTML = products;
};

// Problem with writing the line:
// document.querySelector("#dev-products").innerHTML = products;

// Situation #1
// --------------
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFINITELY has an element with an id of 'dev-products'
// We want to immediately render our app into that element

// Check if products is running in isolation
if (process.env.NODE_ENV === 'development') { // env var that is set automatically by webpack, as we have added a mode : 'development' in our webpack file
    const elem = document.querySelector('#dev-products');

    // If running in isolation (running only products project)
    if (elem) {        // assuming container doesnt have an element of id='dev-products'
        mount(elem);
    }
}


// Situation #2
// -------------
// We are running this file in development or production
// through the CONTAINER aoo
// NO GUARANTEE that an element with an id of 'dev-products' exist
// We DO NOT WANT to try to immediately render the app
export { mount };