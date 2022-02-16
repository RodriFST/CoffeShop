let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}



let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}


















      //    CARRITO DE COMPRA START


    //variables
let allContainerCart = document.querySelector('.box-container');
let containerBuyCart = document.querySelector('.cart-item');

let buyThings = [];



//fuctions
loadEventListeners();
function loadEventListeners(){
  allContainerCart.addEventListener('click', addProduct);

  containerBuyCart.addEventListener('click', deleteProduct);
}

function addProduct(e){
  e.preventDefault();
  if (e.target.classList.contains('btn')) {
      const selectProduct = e.target.parentElement;
      readTheContent(selectProduct);

  }
}

// Delet product start



function deleteProduct(e) {
  if (e.target.classList.contains('fa-times')) {
      const deleteId = e.target.getAttribute('data-id');
      buyThings = buyThings.filter(product => product.id !== deleteId)
      
  }
  loadHTML()
}




// Delet product end





function readTheContent(product){
  const infoProduct = {
       image: product.querySelector('img').src,
       title: product.querySelector('h3').textContent,
       price: product.querySelector('.price').textContent,
       id: product.querySelector('a').getAttribute('data-id'),
       amount: 1
  }

    // START SUMA Y RESTA DE LOS PRODUCTOS +  -

  const exist = buyThings.some(product => product.id === infoProduct.id)
  if (exist) {
      const pro = buyThings.map(product => {
        if (product.id === infoProduct.id){
            product.amount++;
          return product;     
           } else {
             return product
           }
      });
      buyThings = [...pro];
  } else {
    buyThings = [...buyThings, infoProduct]
  }

   // END SUMA Y RESTA DE LOS PRODUCTOS +  -

  
  loadHTML();
  //console.log(infoProduct);
}

function loadHTML(){
  clearHtml();
  buyThings.forEach(product => {
     const {image, title ,price ,amount, id} = product;
     const row = document.createElement('div');
     row.classList.add('cart-item');
     row.innerHTML = `
        <div class="cart-item">
        <span class="fas fa-times"></span>
              <img src="${image}" alt="">
              <div class="content">
                <h3>${title}</h3>
                <div class="price">${price}/-</div>
                <h6>Amount: ${amount}</h6>
              </div>
              </div>
              <span class="fas fa-times" data-id="${id}"></span>
     `;

     containerBuyCart.appendChild(row);
  });
}
function clearHtml(){
  containerBuyCart.innerHTML = '';
}





  

//    CARRITO DE COMPRA ENDS


























window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
