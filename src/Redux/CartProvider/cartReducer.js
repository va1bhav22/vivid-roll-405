// const pro = [{
//     img : "https://static.zara.net/photos///2022/I/0/1/p/3175/202/406/12/w/302/3175202406_1_1_1.jpg?ts=1657877142921",
//     title : "DENIM HALTER DRESS",
//     price : 2890.00,
//     Qyantity : 1,
//     size : "M",
//     color : "LIGHT BLUE",
//     referrence : ( Math.random()* (2000-1500)+ 1500 ).toFixed(3)
// },
// {
//     img : "https://static.zara.net/photos///2022/I/0/1/p/6688/023/406/12/w/302/6688023406_1_1_1.jpg?ts=1653474681035",
//     title : "WIDE-LEG JEANS",
//     price : 2990.00,
//     Qyantity : 1,
//     size : "EU 44 (UK 16)",
//     color : "LIGHT BLUE",
//     referrence :( Math.random()* (2000-1500)+ 1500 ).toFixed(3)
// },
// {
//     img : "https://static.zara.net/photos///2022/I/0/2/p/0108/350/427/2/w/302/0108350427_1_1_1.jpg?ts=1655382023594",
//     title : "BASIC DENIM JACKET",
//     price : 3990.00,
//     Qyantity : 1,
//     size : "XL (UK XL)",
//     color : "MID-BLUE",
//     referrence :( Math.random()* (2000-1500)+ 1500 ).toFixed(3)
// },
// {
//     img : "https://static.zara.net/photos///2022/I/0/2/p/0840/300/406/2/w/302/0840300406_6_1_1.jpg?ts=1656661642475",
//     title : "OVERSIZED DENIM JACKET",
//     price : 5590.00,
//     Qyantity : 1,
//     size : "EU S-M (UK S-M)",
//     color : "LIGHT BLUE",
//     referrence :( Math.random()* (2000-1500)+ 1500 ).toFixed(3)
// }];
// localStorage.setItem("CartItem",JSON.stringify(pro));

const moreProducts = [
    {
        image : "https://static.zara.net/photos///2022/I/0/2/p/0840/380/406/2/w/266/0840380406_6_1_1.jpg?ts=1652716611920",
        title : "BAGGY FIT JEANS",
        price : "2,990.00",
        tag : "MRP incl. of all taxes"
    },
    {
        image : "https://static.zara.net/photos///2022/I/1/2/p/2207/920/203/2/w/266/2207920203_6_1_1.jpg?ts=1652803793944",
        title : "MULTIPIECE SNEAKERS",
        price : "3,990.00",
        tag : "MRP incl. of all taxes"
    },
    {
        image : "https://static.zara.net/photos///2022/I/0/2/p/2750/300/800/2/w/266/2750300800_6_1_1.jpg?ts=1657186143352",
        title : "RECTANGULAR SUNGLASSES",
        price : "4,990.00",
        tag : "MRP incl. of all taxes"
    },
    {
        image : "https://static.zara.net/photos///2021/V/2/2/p/0210/016/999/2/w/266/0210016999_1_1_1.jpg?ts=1610529018840",
        title : "W/END TILL 8.00 PM W/END TILL 3:00 AM 100 ML+10..",
        price : "1,290.00",
        tag : "MRP incl. of all taxes"
    },
    {
        image : "https://static.zara.net/photos///2022/I/0/2/p/1012/304/808/2/w/266/1012304808_6_1_1.jpg?ts=1654095421676",
        title : "CONTRAST SIGNET RING",
        price : "1,590.00",
        tag : "MRP incl. of all taxes"
    },
    {
        image : "https://static.zara.net/photos///2022/I/1/1/p/2334/010/040/2/w/266/2334010040_6_1_1.jpg?ts=1657624785195",
        title : "HIGH-HEEL PLATFORM SANDALS",
        price : "5,999.00",
        tag : "MRP incl. of all taxes"
    },
    {
        image : "https://static.zara.net/photos///2021/I/0/1/p/8034/789/800/2/w/266/8034789800_6_1_1.jpg?ts=1623925508543",
        title : "TROUSERS WITH LINED BELT",
        price : "2,990.00",
        tag : "MRP incl. of all taxes"
    },
]

const init = {
    CartProduct : JSON.parse(localStorage.getItem('CartItem')),
    moreProduct : moreProducts
}

export const cartReducer = (state=init, {type,payload})=> {
    switch (type) {
        case "GET_UDATED_LOCAL_STORAGE":
            return {...state, CartProduct : payload};

        case "GET_UPDATED_ITEM_QUANTITY" : 
            return {...state,CartProduct : payload};
        default:
            return state;
    }
} 