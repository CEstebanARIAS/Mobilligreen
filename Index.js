const modal = document.getElementById("contactModal");
const openModalBtn = document.getElementById("openModal");
const closeBtn = document.getElementById(".close");


window.onload = function(){
    document.getElementById("openModal").onclick = function(){
        modal.style.display="block";
    }
    
}

window.onclick = (event) =>{
    if(event.target == modal){
        modal.style.display = "none";
    }
}
