window.onload = function(){
    //side navigation section
    let openMenu = document.querySelector(".open-menu") ;
    let menu = document.querySelector("#menu");
    let closeMenu = document.querySelector("#close-menu") ;
    let mainBody = document.getElementById("main-body") 
    openMenu.addEventListener("click",()=>{
        menu.style.width = "70%";
        mainBody.style.filter = "brightness(0.3)"
        mainBody.style.backgroundColor = "rgba(0,0,0,0.7)" 
        mainBody.style.pointerEvents = "none" ;
    })
    closeMenu.addEventListener("click",()=>{
        menu.style.width = "0%"  ;
        mainBody.style.filter = "brightness(1)" ;
        mainBody.style.backgroundColor = "white" ;
        mainBody.style.pointerEvents = "auto" ;
    })
    //click outside menu to close menu
    document.addEventListener("click",(e)=>{
        if(window.matchMedia("(max-width:767px)").matches){
            let menuOpen = e.target.matches("[data-open-menu]");
            if(!menuOpen && e.target.closest("[data-menu]") == null){
            menu.style.width = "0%"  ;
            mainBody.style.filter = "brightness(1)";
            mainBody.style.backgroundColor = "white";
            mainBody.style.pointerEvents = "auto" ;
            }
        }        
    })  

    //image carousel section 
    let images = document.getElementsByClassName("images") ;
    let next =  document.getElementById("next") ;
    let previous = document.getElementById("previous") ;
    let imageIndex = 1;
    showImages(imageIndex);
    next.addEventListener("click",()=>{
        showImages(imageIndex += 1); 
    })
    previous.addEventListener("click",()=>{
        showImages(imageIndex += -1); 
    })
    function showImages(n) {
        let i;
      if (n > images.length) {imageIndex = 1}
      if (n < 1) {imageIndex = images.length}
      for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
      }
      images[imageIndex-1].style.display = "block";
    }

    //quantity section
    let plus = document.getElementById("plus");
    let minus = document.getElementById("minus");
    let quantityValue = document.getElementById("quantity-value");
    let value = 0
    quantityValue.innerText = value
    plus.addEventListener("click",()=>{ 
        value = value + 1 
        quantityValue.innerText = value
    })     
    minus.addEventListener("click",()=>{
       if(value == 0){
        quantityValue.innerText = 0
       } 
       else {value = value - 1 
        quantityValue.innerText = value
       }
    })

    //cart section
    let cartIcon = document.querySelector(".cart-icon");
    let cart = document.querySelector(".cart");
    let add = document.getElementById("add");
    let quantity = document.getElementById("quantity");
    let total = document.getElementById("total");
    let del = document.getElementById("delete") ;
    let emptyCart = document.getElementById("empty-cart");
    let cartItems = document.getElementById("cart-items") ; 
    let notice = document.getElementById("notice") ;
    cartIcon.addEventListener("click",()=>{
        cart.classList.toggle("open-cart");
    })
    notice.addEventListener("click",()=>{
        cart.classList.toggle("open-cart");
    })
    add.addEventListener("click",()=>{
        if(quantityValue.innerText == 0){
            cartItems.style.display = "none";
            emptyCart.style.display = "flex";
            notice.style.display = "none"; 
        }
        else{
            quantity.innerText = quantityValue.innerText;
            total.innerText = `$${125*quantity.innerText}.00`;  
            cartItems.style.display = "grid";
            emptyCart.style.display = "none";
            notice.style.display = "inline-block";
            notice.innerText = quantity.innerText;
        }
    })
    del.addEventListener("click",()=>{
            cartItems.style.display = "none";
            emptyCart.style.display = "flex";
            notice.style.display = "none";
    })  
    //lightbox section
    let lightbox = document.getElementById("lightbox");
    let closeLightbox = document.getElementById("close-lightbox") ;
    let imagesLightbox = document.getElementsByClassName("images-lightbox")  ;
    let nextLightbox =  document.getElementById("next-lightbox");
    let previousLightbox = document.getElementById("previous-lightbox") ;
    showImagesLightbox(imageIndex);
    nextLightbox.addEventListener("click",()=>{
        showImagesLightbox(imageIndex += 1); 
    })
    previousLightbox.addEventListener("click",()=>{
        showImagesLightbox(imageIndex += -1); 
    })
    let imagesL = Array.from(images) 
    imagesL.forEach(img => {img.addEventListener("click",()=>{
        lightbox.style.display = "flex";   
    }) })
    closeLightbox.addEventListener("click",()=>{
        lightbox.style.display = "none" ;
    })  
    function showImagesLightbox(n) {
        let i;
      if (n > imagesLightbox.length) {imageIndex = 1}
      if (n < 1) {imageIndex = imagesLightbox.length}
      for (i = 0; i < imagesLightbox.length; i++) {
        imagesLightbox[i].style.display = "none";
      }
      imagesLightbox[imageIndex-1].style.display = "flex";
    } 
    
    //thumbnail section
    let thumbnails = Array.from(document.getElementsByClassName("thumbnail"));
    let image = document.querySelector(".image");
    let index = 0
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", ()=>{
            image.setAttribute("src", `images/image-product-${thumbnails.indexOf(thumbnail)+1}.jpg`)
            thumbnails.forEach(e => {
                e.style.border = "none"
                e.children[0].style.opacity = "1"
            })
            thumbnail.style.border = "0.15rem solid #FF7D1B"
            thumbnail.children[0].style.opacity = "0.5"
        })
    })

    } 
    