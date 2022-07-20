const pro = [{
    img : "https://static.zara.net/photos///2022/I/0/1/p/3175/202/406/12/w/302/3175202406_1_1_1.jpg?ts=1657877142921",
    title : "DENIM HALTER DRESS",
    price : 2890.00,
    size : "M",
    color : "LIGHT BLUE",
    referrence : ( Math.random()* (2000000-1500000)+ 1500000 )
},
{
    img : "https://static.zara.net/photos///2022/I/0/1/p/6688/023/406/12/w/302/6688023406_1_1_1.jpg?ts=1653474681035",
    title : "WIDE-LEG JEANS",
    price : 2990.00,
    color : "LIGHT BLUE",
    referrence : ( Math.random()* (2000000-1500000)+ 1500000 )
},
{
    img : "https://static.zara.net/photos///2022/I/0/2/p/0108/350/427/2/w/302/0108350427_1_1_1.jpg?ts=1655382023594",
    title : "BASIC DENIM JACKET",
    price : 3990.00,
    color : "MID-BLUE",
    referrence : ( Math.random()* (2000000-1500000)+ 1500000 )
},
{
    img : "https://static.zara.net/photos///2022/I/0/2/p/0840/300/406/2/w/302/0840300406_6_1_1.jpg?ts=1656661642475",
    title : "OVERSIZED DENIM JACKET",
    price : 5590.00,
    color : "LIGHT BLUE",
    referrence : ( Math.random()* (2000000-1500000)+ 1500000 )
}];
localStorage.setItem("CartItem",JSON.stringify(pro));

const init = {
    CartProduct : JSON.parse(localStorage.getItem('CartItem'))
}
// console.log(init.CartProduct);

export const cartReducer = (state=init, {type,payload})=> {
    switch (type) {
        // case value:
            
    
        default:
            return state;
    }
} 