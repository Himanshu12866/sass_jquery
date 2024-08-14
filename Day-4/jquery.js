$(function(){
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        console.log(products)
        products.map(product => {
           $(` <div class"card" width="200px">
            <img src="${product.image}" width="150px" height="200px">
            <div class="card-header>
            <p>${product.title}</p>
            </div>
            </div>`).appendTo("main")
      }  )
    })
})