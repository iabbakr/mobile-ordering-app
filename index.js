import { menuArray } from './data.js';


document.addEventListener('click', function(e){
    if(e.target.id === 'pizza-btn'){
        handlePizzaClick(menuId);
    }else if(e.target.id === 'burger-btn'){
        handleBurgerClick();
    }else if(e.target.id === 'donut-btn'){
        handleDonutclick();
    }else if(e.target.id === 'order-btn')
        handleOrderBtnClick();
});



function handlePizzaClick(menuId){
    const targetMenuId = menuArray.filter(function(){
        return menu.id = menuId;
    })

    render();
    

};

function handleBurgerClick(){
    render();

};
function handleDonutclick(){
    render()

};

function handleOrderBtnClick(){
    render()

};

function getCheckOutHtml(){
    let checkOut = '';
    menuArray.forEach(function(menu){
        
        checkOut += `
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
                                            <span class="" id="total-price">
                                            $
                                            </span>
                                        </div>
                                        <input type="button" 
                                        id="order-btn" 
                                        class="order-btn" 
                                        value="Complete order"/>
                                        
                                    </div>
                        
                        `
    })
};

function render(){
    document.getElementById('order-info').innerHTML = getCheckOutHtml;
};

