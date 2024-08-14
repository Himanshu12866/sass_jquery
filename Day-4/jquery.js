$(function(){
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        console.log(products)
        products.map(product => {
           $(` <div class ="card p-2 m-2 w-25">
            <img src="${product.image}" width="100%" height="200px">
            <div class="card-header">
            <p style="font-size:15px">${product.price.toLocaleString('en-in', {"style":"currency","currency":"INR"})}</p>
            </div>
            <div class="card-body">
            <p class="bi bi-star-fill">${product.rating.rate} Ratings & ${product.rating.count} Reviews</p>
            <i>${product.title}</i>
            <br>
            <b>${product.category.toUpperCase()}</b>
            </div>
            <div class="card-footer">
            <button  value=${product.id} id="btn-id" class="btn btn-dark w-100">Add To Cart</button>
            </div>
            </div>`).appendTo("main")
      }  )
    })
    $(document).on("click" , "#btn-id" , (e) =>{
        alert(`Product Id : ${e.target.value} : Added to the Card`)
    })
})