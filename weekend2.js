const products = [
    {
      id: 1,
      name: 'foo',
      price: 7
    },
    {
      id: 2,
      name: 'bar',
      price: 2
    },
    {
      id: 5,
      name: 'bazz',
      price: 1
    },
];

const users = [
    {
      id: 1,
      name: 'moe'
    },
    {
      id: 2,
      name: 'larry'
    },
    {
      id: 3,
      name: 'curly'
    }
];


const orders = [
    {
      id: 1,
      productId: 1,
      quantity: 3,
      userId: 1
    },
    {
      id: 2,
      productId: 1,
      quantity: 7,
      userId: 1
    },
    {
      id: 3,
      productId: 5,
      quantity: 70,
      userId: 3
    },
    {
      id: 3,
      productId: 5,
      quantity: 1,
      userId: 3
    }
];
 
//Function productsPurchased go through the orders array and locate each order's productID, with the product ID, it goes to the products array, and return the product which matches the product ID.
//Function topSellingProductByQuantity goes through the orders array and locate each order's product name and quantity number, and finally return the product name which has the highest quantity number. 1st step: reduce the product array to a single element array which contains the product Id which has the highest quantity amount. 2nd step, using the pordcuctId to locate the name of the product in the product array and return the name. 
//Function usersWithOrders goes through the orders arr and return an array that contains the userid. and use the userid to go through the users array, and return the name of the users.

function productsPurchased (arr1,arr2){
  let productIdArr = arr1.reduce((accum, order)=>{
      if(!accum.includes(order.productId)){
          accum.push(order.productId)
      }
      return accum
  },[])
  return arr2.reduce((accum, product)=>{
      for(let i=0; i<productIdArr.length; ++i){
          if (productIdArr[i]===product.id){
              accum.push(product.name)
          }
      }
      return accum;
  }, [])
}

console.log(productsPurchased(orders, products)) 

function usersWithOrders(arr1,arr2){
    let userIdArr = arr2.reduce((accum, order)=>{
      if(!accum.includes(order.userId)){
        accum.push(order.userId)
      }
      return accum
    },[])
    return arr1.reduce((accum,users)=>{
      for(let i=0;i<userIdArr.length;++i){
        if(userIdArr[i]===users.id){
          accum.push(users.name)
        }
      }
      return accum;
    }, [])
}


console.log(usersWithOrders(users, orders));
  
function topSellingProductByQuantity(arr1, arr2) {
    let topQuantityOrder = arr1.reduce((accum, obj) => {
      if (accum.length === 0) { accum.push(obj) }
      if (accum.length > 0) {
        if (accum[0].quantity < obj.quantity) {
          accum[0] = obj;
        }
        return accum;
      }
    }, [])
    return arr2.reduce((accum, product) => {
      if (product.id === topQuantityOrder[0].productId) {
        accum.push(product.name)
      }
      return accum
    }, [])
}

console.log(topSellingProductByQuantity(orders, products));
