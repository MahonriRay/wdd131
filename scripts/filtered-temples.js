const navLinks = document.querySelectorAll('nav a');
const sectionHeading = document.querySelector('section h2');
const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('nav');

document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modified: " + 
    new Date(document.lastModified).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }) + 
    " " + 
    new Date(document.lastModified).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent the default action of the link
        // event.preventDefault();

        // Change the text of the h2 to match the text of the link
        sectionHeading.textContent = this.textContent;
    });
});

document.querySelector('#hamburger').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('open');
    this.classList.toggle('open');
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Mesa Arizona",
        location: "Mesa, Arizona, United States",
        dedicated: "1927, October, 23",
        area: 21000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mesa-arizona/400x250/mesa_arizona_temple_news_conference.jpeg"
    },
    {
        templeName: "Frankfurt Germany",
        location: "Frankfurt, Germany",
        dedicated: "1987, August, 28",
        area: 18000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/400x250/frankfurt-temple-1-2278179.jpg"
    },
    {
        templeName: "Laie Hawaii",
        location: "Laie, Hawaii, United States",
        dedicated: "1919, November, 27",
        area: 11924,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-temple-772757-wallpaper.jpg"
    }
    // Add more temple objects here...
  ];

templeCard(temples);

function filterTemples(selection) {
    const filteredTemples = temples.filter(selection);
    templeCard(filteredTemples);
}

document.querySelector('#home').addEventListener('click', () => {
    templeCard(temples);
})
document.querySelector('#old').addEventListener('click', () => {
    filterTemples(temple => new Date(temple.dedicated).getFullYear() <= 1900);
})
document.querySelector('#new').addEventListener('click', () => {
    filterTemples(temple => new Date(temple.dedicated).getFullYear() >= 2000);
})
document.querySelector('#large').addEventListener('click', () => {
    filterTemples(temple => temple.area > 90000);
})
document.querySelector('#small').addEventListener('click', () => {
    filterTemples(temple => temple.area < 10000)
})

function templeCard(templesFromObject) {
    const templesHTML = document.querySelector('.templesHTML')
    templesHTML.innerHTML = '';

    templesFromObject.forEach(temple => {
        let templeCard = document.createElement('div');
        let templeName = document.createElement('h2');
        let templeLocation = document.createElement('p');
        let templeDedicated = document.createElement('p');
        let templeArea = document.createElement('p');
        let templeImage = document.createElement('img');

        templeName.innerHTML = temple.templeName;
        templeLocation.innerHTML = `<span>Location:</span> ${temple.location}`;
        templeDedicated.innerHTML = `<span>Dedicated:</span> ${temple.dedicated}`;
        templeArea.innerHTML = `<span>Area:</span> ${temple.area.toLocaleString('en-US')} sq ft`;
        templeImage.src = temple.imageUrl;
        templeImage.alt = `${temple.templeName} Temple`;
        templeImage.loading = 'lazy';

        templeCard.appendChild(templeName);
        templeCard.appendChild(templeLocation);
        templeCard.appendChild(templeDedicated);
        templeCard.appendChild(templeArea);
        templeCard.appendChild(templeImage);

        document.querySelector('.templesHTML').appendChild(templeCard);
    });


}
