const cardContainer = document.querySelector('.card-container')

const pageList = [];
pageList.push({
    name: "Digital Booking",
    languages: 'REACTJS, HTML, CSS, MySQL, Java, AWS',
    url: "http://equipo10-digitalbooking-frontend.s3-website.us-east-2.amazonaws.com/#/",
    img: 'img/equipo10-digitalbooking-frontend.s3-website.us-east-2.amazonaws.com_ (1).png'
});
pageList.push({
    name: "E-Commerce detail page",
    languages: 'React, HTML, CSS, MUI',
    url: "https://e-commerce-monimunozalzate.vercel.app//",
    img: 'img/localhost_5173__.png'
});
pageList.push({
    name: "Dental Clinic",
    languages: 'REACTJS, HTML, CSS, Mui, Yup, Formik',
    url: "https://front-dental-clinic.vercel.app/",
    img: 'img/front-dental-clinic.vercel.app_.png'
});
pageList.push({
    name: "DataBase dental clinic",
    languages: 'Java, sprintBoot, Sprint security, Boostrap/ user: admin@gmail.com, pass: digital ',
    url: "https://dentistclinicproject-production.up.railway.app",
    img: 'img/dentistclinicproject-production.up.railway.app_post_odontologo.html.png'
});
pageList.push({
    name: "Yard Sale",
    languages: 'HTML, CSS, JS',
    url: "https://monimunozalzate.github.io/curso-frontend-developer-js/",
    img: 'img/monimunozalzate.github.io_curso-frontend-developer-js_.png'
});
// pageList.push({
//     name: "Agregar peliculas",
//     languages: 'HTML, CSS, React, JsonServer',
//     url: "https://app-movies-two.vercel.app/",
//     img: ''
// });
pageList.push({
    name: "Collage",
    languages: 'HTML, CSS',
    url: "https://monimunozalzate.github.io/renovando/",
    img: 'img/monimunozalzate.github.io_renovando_.png'
});
pageList.push({
    name: "Portfolio",
    languages: 'HTML, CSS, JS, Bootstrap',
    url: "https://monimunozalzate.github.io/Portfolio/",
    img: 'img/monimunozalzate.github.io_Portfolio_.png'
});
// pageList.push({
//     name: "Formularios",
//     languages: 'React, HTML, CSS, Formik, Yup',
//     url: "https://formularios-peach.vercel.app/",
// img: ''
// });

// pageList.push({
//     name: "ToDo app",
//     languages: 'React, HTML, CSS',
//     url: "https://to-do-app-gamma-five.vercel.app/",
// img: ''
// });

function renderCards(arr) {
    for (page of arr) {
        const card = document.createElement("div");
        card.classList.add("card");

        const a = document.createElement('a')
        a.classList.add('link')
        a.setAttribute('href', page.url)

        const shownPage = document.createElement('img')
        shownPage.classList.add('image')
        shownPage.setAttribute('src', page.img)

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

        // a.appendChild()
        a.appendChild(shownPage)
        card.appendChild(a)
        a.appendChild(cardBody)
        cardContainer.appendChild(card)



    }
}
renderCards(pageList)