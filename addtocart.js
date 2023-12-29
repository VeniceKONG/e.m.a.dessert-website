const product = [
    {
        id:0,
        image: 'image/f1.jpg',
        title: 'Caramel-topped Vani',
        price: 14,
    },
    {
        id:1,
        image: 'image/f2.jpg',
        title: 'Banoffee Sundae',
        price: 13,
    },
    {
        id:2,
        image: 'image/f3.jpg',
        title: 'Miracle Taco',
        price: 11,
    },
    {
        id:3,
        image: 'image/f4.jpg',
        title: 'Caramel Choco Sandwich',
        price: 16,
    },
    {
        id:4,
        image: 'image/f5.jpg',
        title: 'Classic Pudding',
        price: 17,
    },
    {
        id:5,
        image: 'image/f6.jpg',
        title: 'Waffle Candied Bacon Sundae',
        price: 12,
    },
    {
        id:6,
        image: 'image/f7.jpg',
        title: 'Choco Bomb',
        price: 18,
    },
    {
        id:7,
        image: 'image/f8.jpg',
        title: 'Biscoff Mousse',
        price: 14,
    },
    {
        id:8,
        image: 'image/f9.jpg',
        title: 'SUNDAE Family',
        price: 20,
    },
    {
        id:9,
        image: 'image/b1.jpg',
        title: 'Strawberries Limeade',
        price: 11.90,
    },
    {
        id:10,
        image: 'image/b2.jpg',
        title: 'Orange Crush(alcoholic)',
        price: 15,
    },
    {
        id:11,
        image: 'image/b3.jpg',
        title: 'Passion',
        price: 13,
    },
    {
        id:12,
        image: 'image/b4.jpg',
        title: 'Go-With-Man',
        price: 17,
    },
    {
        id:13,
        image: 'image/b5.jpg',
        title: 'Plain Water',
        price: 1.00,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image ,title ,price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+(j++) +")'></i></div>"
            );
        }).join('');
    }
}