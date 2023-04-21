document.getElementById("bottom").addEventListener("click", function () { 
  event.preventDefault(); 
   let length =document.getElementById("length").value 
   let width = document.getElementById("width").value 
  let height = document.getElementById("height").value 
  let weight = document.getElementById("weight").value 
    let deliveryDistance = document.getElementById("distance").value  
   const sum = +length + +width + +height;  

if (sum < 150 && length< 100 && width < 100 && height < 100 && weight < 10  
        && deliveryDistance < 10 && deliveryDistance > 3  
    ) {  
      console.log("Order accepted");  
    } else {  
      console.log("Order couldn't accept")  
  }  
})