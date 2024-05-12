const indonesia = {
    area: 1904569,
    population: 273523615,
    capital: "Jakarta",
    language: "Indonesian",
    currency: "Rupiah",
    timeZone: "UTC+7",
    callingCode: "+62",
    internetLTD: ".id",
    conditions: "Perfect day to catch a wave brah"
};

let temp = 28;
let windSpeed = 5;

function calcWind(temp, windSpeed) {
    if(temp >= 10 && windSpeed >= 5){
        return (35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) + "°C";
    } else {
        return "N/A";
    }
}

document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modified: " + 
    new Date(document.lastModified).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }) + 
    " " + 
    new Date(document.lastModified).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });


document.getElementById('area').textContent = indonesia.area.toLocaleString('en-US') + " sq km";
document.getElementById('population').textContent = indonesia.population.toLocaleString('en-US');
document.getElementById('capital').textContent = indonesia.capital;
document.getElementById('language').textContent = indonesia.language;
document.getElementById('currency').textContent = indonesia.currency;
document.getElementById('timeZone').textContent = indonesia.timeZone;
document.getElementById('callingCode').textContent = indonesia.callingCode;
document.getElementById('internet').textContent = indonesia.internetLTD;

document.getElementById('temperature').textContent = temp + "°C";
document.getElementById('conditions').textContent = indonesia.conditions;
document.getElementById('windSpeed').textContent = windSpeed + " km/h";
document.getElementById('windChill').textContent = calcWind(temp, windSpeed);

console.log("area: " + indonesia.area.toLocaleString('en-US'));