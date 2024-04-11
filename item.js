fetch('products.json')
  .then(response => response.json())
  .then(data => {
    // Process the product inventory data
    console.log(data);
  });