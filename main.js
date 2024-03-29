const cardContainer = document.querySelector(".card-container");

const pageList = [];
// pageList.push({
//     name: "Digital Booking",
//     languages: "REACTJS, HTML, CSS, MySQL, Java, AWS",
//     url: "http://equipo10-digitalbooking-frontend.s3-website.us-east-2.amazonaws.com/#/",
//     img: "img/equipo10-digitalbooking-frontend.s3-website.us-east-2.amazonaws.com_ (1).png",
// });
pageList.push({
    name: "Audiophile E-Commerce",
    languages: "REACTJS, REDUX, AXIOS, AWS, MUI, FORMIK, YUP ",
    url: "https://ecommerce-v1-646k.vercel.app/",
    img: "img/audiophile-mobile.png",
});
pageList.push({
    name: "Countries App",
    languages: "REACTJS, AXIOS, MUI",
    url: "https://rest-countries-puce-mu.vercel.app/",
    img: "img/countriesApp.png",
});
pageList.push({
    name: "Portfolio",
    languages: "REACTJS, MUI, FORMIK, YUP",
    url: "https://portfolio-react-rosy-zeta.vercel.app/",
    img:"img/portfolio-react-rosy-zeta.vercel.app_ (1).png",
});

pageList.push({
    name: "E-Commerce detail page",
    languages: "REACTJS, HTML, CSS, MUI",
    url: "https://e-commerce-monimunozalzate.vercel.app/",
    img: "img/localhost_5173__.png",
});
pageList.push({
    name: "Yard Sale",
    languages: "HTML, CSS, JS",
    url: "https://monimunozalzate.github.io/curso-frontend-developer-js/",
    img: "img/monimunozalzate.github.io_curso-frontend-developer-js_.png",
});

pageList.push({
    name: "Collage",
    languages: "HTML, CSS",
    url: "https://monimunozalzate.github.io/renovando/",
    img: "img/monimunozalzate.github.io_renovando_.png",
});
pageList.push({
    name: "Portfolio",
    languages: "HTML, CSS, JS, Bootstrap",
    url: "https://monimunozalzate.github.io/Portfolio/",
    img: "img/monimunozalzate.github.io_Portfolio_.png",
});

function renderCards(arr) {
    for (page of arr) {
        const card = document.createElement("div");
        card.classList.add("card");

        const a = document.createElement("a");
        a.classList.add("link");
        a.setAttribute("href", page.url);

        const shownPage = document.createElement("img");
        shownPage.classList.add("image");
        shownPage.setAttribute("src", page.img);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = page.name;

        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerText = page.languages;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);

        // a.appendChild()
        a.appendChild(shownPage);
        card.appendChild(a);
        a.appendChild(cardBody);
        cardContainer.appendChild(card);
    }
}
renderCards(pageList);