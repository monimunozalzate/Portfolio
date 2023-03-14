const cardContainer = document.querySelector('.card-container')

const pageList = [];
// pageList.push({
//     name: "Booking",
//     languages: 'REACTJS, HTML, CSS, Mui, Yup, Formik',
//     image: "https://front-dental-clinic.vercel.app/",
// });
pageList.push({
    name: "Dental Clinic",
    languages: 'REACTJS, HTML, CSS, Mui, Yup, Formik',
    image: "https://front-dental-clinic.vercel.app/",
});
pageList.push({
    name: "Yard Sale",
    languages: 'HTML, CSS, JS',
    image: "https://monimunozalzate.github.io/curso-frontend-developer-js/",
});
pageList.push({
    name: "Collage",
    languages: 'HTML, CSS',
    image: "https://monimunozalzate.github.io/renovando/",
});
pageList.push({
    name: "Portfolio",
    languages: 'HTML, CSS, JS, Bootstrap',
    image: "https://monimunozalzate.github.io/Portfolio/",
});
pageList.push({
    name: "Formularios",
    languages: 'React, HTML, CSS, Formik, Yup',
    image: "https://formularios-peach.vercel.app/",
});
pageList.push({
    name: "Agregar peliculas",
    languages: 'HTML, CSS, React, JsonServer',
    image: "https://app-movies-two.vercel.app/",
});
pageList.push({
    name: "ToDo app",
    languages: 'React, HTML, CSS',
    image: "https://to-do-app-gamma-five.vercel.app/",
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