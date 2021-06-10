if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready()
}
var itemCount=0
var totalAmount=0

function ready(){
   
    var addToCartButtons=document.getElementsByClassName('shop-item-button')
    for(var i=0; i<addToCartButtons.length;i++)
    {
        var button=addToCartButtons[i]
        button.addEventListener('click',addToCartCliked)
    }
    
}

function addToCartCliked(event){
   
    var button=event.target
    var shopItem=button.parentElement.parentElement.parentElement.parentElement
    var title=shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    alert("You selected item: "+title)
    var price=shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    alert("You selected item Price is: "+price)
    itemCount=itemCount+1;
    totalAmount=totalAmount+parseInt(price)
    document.getElementById('totalAmount').innerText=totalAmount
    alert("items in cart: "+itemCount)
    document.getElementById('totalItem').innerText=itemCount
    alert("hello")
}
/*function openMenu(){
    document.getElementById("side-menu").style.display="block";
    document.getElementById("menu-btn").style.display="none";
    document.getElementById("close-btn").style.display="block";
}

function closeMenu(){
    document.getElementById("side-menu").style.display="none";
    document.getElementById("menu-btn").style.display="block";
    document.getElementById("close-btn").style.display="none";
}*/


