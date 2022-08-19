//Get product delete button 
let deleteBtns = document.querySelectorAll("#delete-button");
    
//listen to click 
for(let button of deleteBtns){}
    button.addEventListener("click" , (e) =>{
        //display confirm popup
        let result = confirm("¿Seguro desea eliminar el producto?");
    
        //confirm
        if(result == true){
            e.submit();
        }
        //cancel
        else{
            e.preventDefault();
        }
    });
};
