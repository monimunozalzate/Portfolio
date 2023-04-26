const cardContainer = document.querySelector(".card-container");

const pageList = [];
pageList.push({
    name: "Digital Booking",
    languages: "REACTJS, HTML, CSS, MySQL, Java, AWS",
    url: "http://equipo10-digitalbooking-frontend.s3-website.us-east-2.amazonaws.com/#/",
    img: "img/equipo10-digitalbooking-frontend.s3-website.us-east-2.amazonaws.com_ (1).png",
});
pageList.push({
    name: "E-Commerce detail page",
    languages: "React, HTML, CSS, MUI",
    url: "https://e-commerce-monimunozalzate.vercel.app//",
    img: "img/localhost_5173__.png",
});
pageList.push({
    name: "Countries App",
    languages: "REACTJS, HTML, CSS, Mui",
    url: "https://vercel.com/monimunozalzate/rest-countries",
    img: "img/countriesApp.png",
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