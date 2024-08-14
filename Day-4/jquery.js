$(function(){
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        console.log(products)
        products.map(product => {
           $(` <div class ="card p-2 m-2 w-25">
            <img src="${product.image}" width="100%" height="200px">
            <div class="card-header">
            <p style="font-size:10px">${product.price.toLocaleString('en-in', {"style":"currency","currency":"INR"})}</p>
            </div>
            <div class="card-body">
            <h6>${product.title}</h6>
            </div>
            </div>`).appendTo("main")
      }  )
    })
})