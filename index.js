import {menuArray} from './data.js';


document.addEventListener('click', function(e){

});



function getOrderHtml(){


};

function getPayHtml(){
    let pay = `
    `

};
function getSucHtml(){

};

function render(){
    document.getElementById('order-info').innerHTML;
}

menuArray.forEach(function(menu){

})

let checkOut = `
    <div class="menu">
        <h3>Your order</h3>
        <div class="menu-check">
            <span class="">
            ${menu.name}
            </span>
            <span class="">
            ${menu.price}
            </span>
        </div>
        <div class="menu-bottom">
            <span class="">
            Total price:
            </span>
            <span class="" id=""total-price>
            $
            </span>
        </div>
        <div class="">

        </div>
        
    </div>
`