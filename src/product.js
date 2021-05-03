
let products=[
    {
        pid:1,
        productName:"Iphone",
        productPrice:"1,00,000",
        ratingCount:3,
        ImgSrc:"https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1.jpg"
    },
    {
        pid:2,
        productName:"samsung M50",
        productPrice:"25,000",
        ratingCount:4,
        ImgSrc:"data:image/jpeg;base64,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"

    },
    {
        pid:3,
        productName:"headphones",
        productPrice:"3,000",
        ratingCount:5 ,
        ImgSrc:"https://images-na.ssl-images-amazon.com/images/I/71s9FMKzr%2BL._SX569_.jpg"
    },
    {
        pid:4,
        productName:"earPhones",
        productPrice:"1,000",
        ratingCount:2,
        ImgSrc:"https://5.imimg.com/data5/TV/FB/MY-73596578/voy-ex007-earphones-with-mic-500x500.jpeg"
    },
    {
        pid:5,
        productName:"Redmi Note9",
        productPrice:"10,000",
        ratingCount:5,
        ImgSrc:"https://images-na.ssl-images-amazon.com/images/I/41s708mKqJL._AC_.jpg"
    },
    {
        pid:6,
        productName:"Apple Watch",
        productPrice:"2,00,000",
        ratingCount:4,
        ImgSrc:"https://static.toiimg.com/thumb/msid-54128624,width-240,resizemode-4,imgv-0/Apple-Watch.jpg"
    }

    

]
export default products;

