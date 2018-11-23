function returnFacebookProductsFromUvLineItems(uvLineItems){
  var items = uvLineItems, 
      fb_items = [];
  for(var i = 0; i < items.length; i++){
  	fb_items.push({
    	id: item[i].product.id,
        quantity: item[i].quantity,
        item_price: item[i].product.unit_price
    });
  }
  return fb_items;	
}

//sample usage
returnFacebookProductsFromUvLineItems(window.univeral_variable.transaction.line_items);
