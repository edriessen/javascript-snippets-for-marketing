function(){
  var items = {{Data Layer - ecommerce purchase products}}, //change to make it match your GTM variable setup
      fb_items = [];
  for(var i = 0; i < items.length; i++){
   var product_id = items[i].id
    if (document.location.pathname === '/bedankt-voor-je-bestelling/'){
      product_id = items[i].brand
    }
  	fb_items.push({
      id: product_id,
      quantity: items[i].quantity,
      item_price: items[i].price
    });
  }
  return fb_items;	
}
