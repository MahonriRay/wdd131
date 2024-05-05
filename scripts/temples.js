const navLinks = document.querySelectorAll('nav a');
const sectionHeading = document.querySelector('section h2');

document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modified: " + 
    new Date(document.lastModified).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }) + 
    " " + 
    new Date(document.lastModified).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent the default action of the link
        event.preventDefault();

        // Change the text of the h2 to match the text of the link
        sectionHeading.textContent = this.textContent;
    });
});