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
        area:'Richmond',
        address:'5721 Westheimer Rd., Houston, TX'
    },
    {  
        city: 'Houston',
        area: 'Dairy Ashford',
        address: '12553 Westheimer Road, Houston, TX'
    },
    {
        city: 'Houston',
        area: 'Galleria',
        address: '5070 Richmond Ave, Houston, TX'
    },
    {
        city:'Houston',
        area: 'Meyerland Plaza',
        address: '8650 Endicott Ln, Houston, TX'
    },
    {
        city: 'New York',
        area: 'Midtown',
        address: '153 E 53rd St, New York, NY'
    },
    {
        city: 'New York',
        area: 'Madison Square Park',
        address: '225 Fifth Avenue, New York, NY'

    },
    {
        city: 'New York',
        area: 'Kew Gardens' ,
        address: '8002 Kew Gardens, Kew Gardens, NY'
    },
    {
        city: 'New York',
        area: 'Riverdale',
        address: '298 West 231st Street, Bronx, NY'
    },
    {
        city: 'Los Angeles',
        area: 'Mid Wilshirea',
        address: '3699 Wilshire Blvd, Suite 110, Los Angeles, CA'
    },
    {
        city: 'Los Angeles',
        area: 'La Cienega',
        address: '5045 W. Slauson Ave., Los Angeles, CA'
    },
    {
        city: 'Los Angeles',
        area: 'Meyerland Plaza',
        address: '2929 31st Street,Meyerland , CA'
    },
    { 
        city: 'Los Angeles',
        area: 'West Hollywood',
        address: '8612 Santa Monica Blvd, West Hollywood, CA'
    },
    {
        city: 'Houston',
        area: 'Meyerland Plaza',
        address: '8650 Endicott Ln, Houston, TX'
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
    outputSec.style.display = "block";
    if(input == ""){
        outputSec.style.display = "none";
        alert('Please enter a city..');
    }
    let results = "";
    let filtered = locations.filter(locoObj =>{
        return locoObj.city.toLocaleLowerCase() == input;
    })
    if(filtered.length == 0){
        results = `<p>no locations found in "${input}".`;
    }
    filtered.forEach(location =>{
        results += `
        <div class = "address-box">
        <h4>${location.area}</h4>
        <h6 class = "address-txt">
        <img src ="https://p7.hiclipart.com/preview/517/350/522/paper-google-map-maker-computer-icons-world-map-location-icon.jpg">
        ${location.address}</h6>
        </div>
        `
    })
    outputSec.innerHTML = results;
}
