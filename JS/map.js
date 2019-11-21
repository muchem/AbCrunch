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
let locations = [
    {
        city:'Houston',
        state:'Texas'
    },
    {
        city:'New York'
    },
    {
        city:'Tampa'
    }
]
let searchBox = document.getElementById('search-box');
searchBox.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        document.getElementById("loc-bnt").click();
    }
});
const search = () =>{
    let input = document.getElementById('search-box').value.toLocaleLowerCase();
    let outputSec = document.getElementById('output-sec');
    let results = "";
    let filtered = locations.filter(locoObj =>{
        return locoObj.city.toLocaleLowerCase() == input;
    })
    filtered.forEach(location =>{
        results += `
        <h4>${location.city}</h4>
        `
    })
    outputSec.innerHTML = results;
}
