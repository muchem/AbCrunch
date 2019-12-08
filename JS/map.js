function initMap() {
    let uluru = {
        lat: 39.381266,
        lng: -97.922211
    };
    let map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
    let marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
let searchBox = document.getElementById('search-box');
searchBox.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        document.getElementById("loc-bnt").click();
    }
});

const search = async () => {
    const url = '../Data/locations.json';
    let response = await fetch(url);
    let locations = await response.json();
    let input = document.getElementById('search-box').value;
    let outputSec = document.getElementById('output-sec');
    let nearHeader = document.getElementById('near-by');
    let results = "";

    outputSec.style.display = "block";

    if(input == ""){
        outputSec.style.display = "none";
        alert('Please enter a city..');
    }

    let filtered = locations.filter(locoObj => {
        return locoObj.city.toLocaleLowerCase() == input.toLocaleLowerCase();
    })
       nearHeader.style.display = "block";
       nearHeader.innerHTML = `Clubs Near "${input}"`;
    

    if(filtered.length == 0){
        nearHeader.innerHTML = `No Clubs Found Near "${input}" `;
        filtered = locations.filter(locoObj => {
        return locoObj.city[0].toLocaleLowerCase() == input[0].toLocaleLowerCase();
        })
    } 

    filtered.forEach(location =>{
        results += `
        <div class = "address-box">
        <h4 class = "area-txt">${location.area}</h4>
        <h6 class = "address-txt">
        <img src ="https://p7.hiclipart.com/preview/517/350/522/paper-google-map-maker-computer-icons-world-map-location-icon.jpg">
        ${location.address}</h6>
        <button class = "join-bnt">Join Now</button>
        </div>`
    }) 

    outputSec.innerHTML = results;
}
