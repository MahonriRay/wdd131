const products = [
    {
        id: "fc-1888",
        name: "Flux Capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power Laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time Circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low Voltage Reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp Equalizer",
        averagerating: 5.0
    }
];


document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modified: " + 
new Date(document.lastModified).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }) + 
" " + 
new Date(document.lastModified).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });

const productName = document.querySelector('#product-name');
const reviewForm = document.querySelector('#form');
const reviewCounter = document.querySelector('#reviewCount');

let reviewCounts = localStorage.getItem('reviewCount') || 0;

if (productName) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.setAttribute("value", product.id);
        option.textContent = product.name
        
        productName.appendChild(option);
    });

}

if (reviewForm) {
    reviewForm.addEventListener("submit", () => {    
        reviewCounts++;
        localStorage.setItem("reviewCount", reviewCounts);    
    });
}

if (reviewCounter) {
    reviewCounts.innerHTML = `Total reviews submitted: ${reviewCounts}`;
}