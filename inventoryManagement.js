// Write your code here
const products = ['Laptop', 'Phone', 'Headphones', 'Monitor']; 
console.log(products);

function logFirstProduct (name) {
  products[0]
};

function addProduct(productName){
  productName: productName
  products.push('Mouse');
}
console.log(addProduct);

function updateProductName(productName){
  productName: productName
}
products[1] = 'Smartphone'
console.log(products);

function removeLastProduct(){

};
products.pop()

console.log(products);



// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};