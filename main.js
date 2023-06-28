
const galleryImages = [
    {
        src: "./assets/gallery/img1.png",
        alt: "Thumbnail Image 1"
    },
    {
        src: "./assets/gallery/qomalogo.jpg",
        alt: "Thumbnail Image 1"
    },
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbnail Image 1"
    },
    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnail Image 2"
    },

    {
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnail Image 3"
    },
];

const products = [
    {
        title: "Astrofiction",
        author: "John Doe",
        price: 49.9,
        image: "./assets/products/img6.png"
    },
    {
        title: "Space Odissey",
        author: "Marie Anne",
        price: 35,
        image: "./assets/products/img1.png"
    },
    {
        title: "Doomed City",
        author: "Jason Cobert",
        price: 0,
        image: "./assets/products/img2.png"
    },
    {
        title: "Black Dog",
        author: "John Doe",
        price: 85.35,
        image: "./assets/products/img3.png"
    },
    {
        title: "Banana's Burger",
        author: "Pão Brioche, Blend de fraldinha(150g), creme de queijo de manteiga, banana grelhada, maionese, mel de engenho e alface",
        price: 28,
        image: "./assets/products/bananasburger.png"
    },
    {
        title: "Double Cheese",
        author: "Pão Brioche, Blend de fraldinha(150g), cebola caramelizada, tomate, alface, creme de queijo de manteiga e creme de gorgonzola",
        price: 28,
        image: "./assets/products/double_cheese.png"
    },
    {
        title: "Black Cheddar",
        author: "Pão Australiano, Blend de fraldinha(150g), queijo cheddar, Bacon crocante, maionese da casa e cebola caramelizada",
        price: 30,
        image: "./assets/products/black_cheddar.png"
    },
    {
        title: "Gorgon Burger",
        author: "Pão Australiano, Blend de Fraldinha(150g), farofa de Bacon, creme de gorgonzola, maionese, rúcula e geléia de framboesa",
        price: 30,
        image: "./assets/products/gorgon.png"
    },
    {
        title: "Qoma Burger",
        author: "Pão Brioche, Blend de fraldinha(150g), maionese da casa com mostarda em grãos, bacon crocante, blend de queijos, cebola amanteigada, tomate e alface",
        price: 30,
        image: "./assets/products/qoma_burger.png"
    }

];

// Menu Section

function menuHandler() {
    document.querySelector("#open-nav-menu").addEventListener("click", function () {
        document.querySelector("header nav .wrapper").classList.add("nav-open");
    });

    document.querySelector("#close-nav-menu").addEventListener("click", function () {
        document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });
}

// Temperature

function celsiusToFahr(temperature) {
    let fahr = (temperature * 9 / 5) + 32;
    return fahr;
}
// Greeting Section

function greetingHandler() {
    const greetingText = "Good afternoon";
    const weatherCondition = "sunny";
    const userLocation = "Jampa";
    let temperature = 28;

    let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)} C outside.`;
    let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(1)} F outside.`;

    document.querySelector("#greeting").innerHTML = greetingText;
    document.querySelector("p#weather").innerHTML = celsiusText;

    document.querySelector(".weather-group").addEventListener("click", function (e) {


        if (e.target.id == "celsius") {
            document.querySelector("p#weather").innerHTML = celsiusText;
        } else if (e.target.id == "fahr") {
            document.querySelector("p#weather").innerHTML = fahrText;
        }

    });
}

// Local time Section

function clockHandler() {
    setInterval(function () {
        let localTime = new Date();
        document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2, "0");
        document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2, "0");;
        document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2, "0");;
    }, 1000);
}


// Gallery Section
//C:/assets/gallery/image1.jpg

function galleryHandler() {
    let mainImage = document.querySelector("#gallery > img");
    let thumbnails = document.querySelector("#gallery .thumbnails");

    mainImage.src = galleryImages[0].src;
    mainImage.alt = galleryImages[0].alt;

    // <img src="./assets/gallery/image1.jpg" 
    // alt="Thumbnail Image 1" 
    // data-array-index="0" data-selected="true">

    galleryImages.forEach(function (image, index) {
        let thumb = document.createElement("img");
        thumb.src = image.src;
        thumb.alt = image.alt;
        thumb.dataset.arrayIndex = index;
        thumb.dataset.selected = index === 0 ? true : false;

        thumb.addEventListener("click", function (e) {
            let selectedIndex = e.target.dataset.arrayIndex;
            let selectedImage = galleryImages[selectedIndex];
            mainImage.src = selectedImage.src;
            mainImage.alt = selectedImage.alt;
            thumbnails.querySelectorAll("img").forEach(function (img) {
                img.dataset.selected = false;
            });
            e.target.dataset.selected = true;

        });
        thumbnails.appendChild(thumb);
    });

}
// novas img do qoma


// Product Section

/* 
<div class="product-item">
          <img src="./assets/products/img6.png" alt="AstroFiction">
          <div class="product-details">
            <h3 class="product-title">AstroFiction</h3>
            <p class="product-author">John Doe</p>
            <p class="price-title">Price</p>
            <p class="product-price">$ 49.90</p>
          </div>
        </div>
 */


// Products Section

function populateProducts(productList) {

    let productsSection = document.querySelector(".products-area");
    productsSection.textContent = "";

    // Run a loop through the products and create a HTML element (product-item) for each of them
    products.forEach(function (product, index) {

        // Create the HTML element for the individual product
        let productElm = document.createElement("div");
        productElm.classList.add("product-item");

        //create product image
        let productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = "Image for " + product.title;

        // create the product details section
        let productDetails = document.createElement("div");
        productDetails.classList.add("product-details");

        // Create product title, author, pricetitle and price
        let productTitle = document.createElement("h3");
        productTitle.classList.add("product-title");
        productTitle.textContent = product.title;

        let productAuthor = document.createElement("p");
        productAuthor.classList.add("product-author");
        productAuthor.textContent = product.author;

        let productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.textContent = product.price > 0 ? "$" + product.price.toFixed(2) : "Free";

        // Append the product details
        productDetails.append(productTitle);
        productDetails.append(productAuthor);
        productDetails.append(productPrice);



        // Add all child HTML elementos for product
        productElm.append(productImage);
        productElm.append(productDetails);


        // add complete individual products to the product section
        productsSection.append(productElm);
    });

}

function productsHandler() {


    let freeProducts = products.filter( item => !item.price || item.price <= 0 );
   
    let paidProducts = products.filter( item =>  item.price > 0 );
   

    populateProducts(products);

    document.querySelector(".products-filter label[for=all] span.product-amount").textContent = products.length;
    document.querySelector(".products-filter label[for=paid] span.product-amount").textContent = paidProducts.length;
    document.querySelector(".products-filter label[for=free] span.product-amount").textContent = freeProducts.length;

    let productsFilter = document.querySelector(".products-filter");

    productsFilter.addEventListener("click", function(e){
        if (e.target.id === "all") {
            populateProducts(products);

        } else if (e.target.id === "paid") {
            populateProducts(paidProducts);

        } else if (e.target.id === "free") {
            populateProducts(freeProducts);

        }

    });


}

function footherHandler() {
    let currentYear = new Date().getFullYear();
    document.querySelector("footer").textContent = `Qoma Burger ${currentYear} - Todos os direitos Reservados`;
    //2023 - All rights reserved

}

navigator.geolocation.getCurrentPosition(position => {
    fetch("https://opentdb.com/api.php?amount-1")
    .then(response => response.json())
    .then(data => console.log(data));
});

// Page Load

menuHandler();
greetingHandler();
clockHandler();
galleryHandler();
productsHandler();
footherHandler();