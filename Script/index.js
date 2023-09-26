document.querySelector("#form").addEventListener('submit',myFunction)

var productData  = JSON.parse(localStorage.getItem("dataOfProduct"))||[]

function myFunction(){
    event.preventDefault()
   
    var obj={
           proName : document.querySelector('#name').value,
            proQty  : document.querySelector('#qty').value,
            proPrio : document.querySelector('#priority').value,
    }

    productData.push(obj)
    
    localStorage.setItem("dataOfProduct",JSON.stringify(productData))
}

