
// Toggle icon
let list = document.querySelector('#nav-list')

list.style.maxHeight = "0px";

function toggleIcon(){
  if (list.style.maxHeight == "0px") {
    list.style.maxHeight = "200px";
  } else {
    list.style.maxHeight = "0px";
  }
};


// Scroll Top
function scrollTop(){
    let scrollTop = document.querySelector('#scrollTop');
  
    if ( this.scrollY >= 560){
      scrollTop.classList.add('show-arrow');
    }else{
      scrollTop.classList.remove('show-arrow');
    }
}
window.addEventListener('scroll', scrollTop);


// change product info images
let productInfoImg = document.querySelector('#p-info-img');
let productInfoSmallImg = document.querySelectorAll('.p-small-img');

productInfoSmallImg[0].onclick = function (){
  productInfoImg.src = productInfoSmallImg[0].src;
}
productInfoSmallImg[1].onclick = function (){
  productInfoImg.src = productInfoSmallImg[1].src;
}
productInfoSmallImg[2].onclick = function (){
  productInfoImg.src = productInfoSmallImg[2].src;
}
productInfoSmallImg[3].onclick = function (){
  productInfoImg.src = productInfoSmallImg[3].src;
}