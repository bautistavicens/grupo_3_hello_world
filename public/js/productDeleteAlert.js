//@Author: Bautista

//Get product delete button 
const deleteBtn = document.querySelectorAll("#delete-button");
    
//listen to click 
deleteBtn.forEach(btn => {
    addEventListener("click" , (e) =>{
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
});
