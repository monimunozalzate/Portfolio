const cardContainer = document.querySelector('.card-container')

const pageList = [];
pageList.push({
    name: "Dentist Clinic",
    languages: 'React, HTML, CSS',
    image: "https://monimunozalzate.github.io/ClinicaOdontologicaReact/",
});
pageList.push({
    name: "Yard Sale",
    languages: 'HTML, CSS, JS',
    image: "https://monimunozalzate.github.io/curso-frontend-developer-js/",
});
pageList.push({
    name: "Portfolio",
    languages: 'HTML, CSS, JS',
    image: "https://monimunozalzate.github.io/Portfolio/",
});
pageList.push({
    name: "Collage",
    languages: 'HTML, CSS',
    image: "https://monimunozalzate.github.io/renovando/",
});
pageList.push({
    name: "Calculadora",
    languages: 'HTML, CSS, React',
    image: "https://monimunozalzate.github.io/calculadora/",
});
pageList.push({
    name: "Perfume",
    languages: 'HTML, CSS',
    image: "https://frontend-mentor-perfume-indol.vercel.app/",
});
pageList.push({
    name: "Insights",
    languages: 'HTML, CSS',
    image: "https://challenge2-fovypesb3-monimunozalzate.vercel.app/",
});

function renderCards(arr) {
    for (page of arr) {
        const card = document.createElement("div");
        card.classList.add("card");

        const a = document.createElement('a')
        a.setAttribute('href', page.image)

        const shownPage = document.createElement('iframe')
        shownPage.setAttribute('src', page.image)

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = page.name;

        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerText = page.languages;

        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardText)

        card.appendChild(shownPage)
        card.appendChild(a)
        a.appendChild(cardBody)
        cardContainer.appendChild(card)



    }
}
renderCards(pageList)