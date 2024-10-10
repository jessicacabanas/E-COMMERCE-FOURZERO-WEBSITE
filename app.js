const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "T-SHIRT",
        price: 19.99,
        colors: [
            { code: "black", img: "./img/tshirt.png" },
            { code: "white", img: "./img/tshirt2.png" }
        ]
    },
    {
        id: 2,
        title: "HODDIE",
        price: 29.99,
        colors: [
            { code: "black", img: "./img/hodie.png" },
            { code: "white", img: "./img/hodie2.png" }
        ]
    },
    {
        id: 3,
        title: "TOTE BAG",
        price: 9.99,
        colors: [
            { code: "black", img: "./img/tote.png" },
            { code: "white", img: "./img/tote2.png" }
        ]
    },
    {
        id: 4,
        title: "CAP",
        price: 14.99,
        colors: [
            { code: "black", img: "./img/cap.png" },
            { code: "white", img: "./img/cap2.png" }
        ]
    }
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Cambiar la diapositiva actual
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // Cambiar el producto elegido
        choosenProduct = products[index];

        // Cambiar los textos del producto actual
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        // assing new colors 
        currentProductColors.forEach((color, index) => {
            if (choosenProduct.colors[index]) {
                color.style.backgroundColor = choosenProduct.colors[index].code;
            }
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        if (choosenProduct.colors[index]) {
            currentProductImg.src = choosenProduct.colors[index].img;
        }
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "#0056b3";
            size.style.color = "white";
        });

            size.style.backgroundColor = "white";
            size.style.color = "#0056b3";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";

});