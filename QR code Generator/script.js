let inputBox = document.querySelector("#inputBox")
let imgBox = document.querySelector("#imgBox")
let qrImg = document.querySelector("#qrImg")


function print (){
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputBox.value;
    
    imgBox.classList.add("show-img")
    

   
}
