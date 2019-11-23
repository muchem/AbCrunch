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
        city: "Philadelphia",
        area: "Piscataway",
        address: "1327 Centennial Ave, Piscataway, NJ"
    },
    {
         city: "Philadelphia",
         area: "Clark",
        address: "140 Central Avenue, Clark, NJ"
    },
    {
        city: "Philadelphia",
        area: "Woodbridge Township",
        address: "1624 St Georges Avenue, Avenel, NJ"
    },
     {
         city: "Philadelphia",
         area: "Whippany",
         address: "30 Sylvan Way, Parsippany, NJ"
     },
     {
        city: "Austin",
        area: "William Cannon",
        address: "4625 W.William Cannon Dr., Austin, TX "
     },
     {
         city:'Austin',
         area: "Austin",
         address: "10616 Research Blvd., Austin, TX"
     },
     {
         city: "Austin",
         area: "Parmer",
         address: "12400 N IH 35, Austin, TX"
     },
     {
         city: "Austin",
         area: "Lake Creek",
         address: "13802 N HWY 183, Austin, TX"

     },
     {
         city:"Austin",
         area: "Pflugerville",
         address: "1401 Town Center Dr, Pflugerville, TX"
     },
     {
        city:"Dallas",
        area: "Addison (Dallas)",
        address: "5100 Belt Line Road, Dallas, TX"
     },
     {
        city: "Dallas",
        area: "Coit",
        address: "7622 Campbell Road, Dallas, TX"
     },
     {
        city: "Dallas",
        area: "Central & Royal (Dallas)",
        address: "11100 Central Expressway, Dallas, TX "
     },
     {
         city: "Dallas",
         area: "Mockingbird (Dallas)",
         address: "5706 East Mockingbird Lane, Dallas, TX"
     },
     {
         city: "San Jose",
         area: "San Jose ",
         address: "1610 Crane Court, San Jose, CA"
     },
     {
        city: "San Jose",
        area: "Parkmoor",
        address: "1531 Parkmoor Avenue, San Jose, CA "
     },
     {
         city:"San Jose",
         area: "Hillsdale",
         address: "1825 Hillsdale Ave, San Jose, CA"
     },
     {
        city: "San Jose",
        area: "Willow Glen",
        address: "2306 Almaden Rd Suite 140, San Jose, CA"
     },
     {
        city: "San Jose",
        area: "East Side San Jose",
        address: "2323 McKee Road, San Jose, CA "
     }
]
let searchBox = document.getElementById('search-box');
searchBox.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        document.getElementById("loc-bnt").click();
    }
});
const search = () =>{
    let input = document.getElementById('search-box').value
    let outputSec = document.getElementById('output-sec');
    let nearHeader = document.getElementById('near-by');
    let results = "";
    outputSec.style.display = "block";
    if(input == ""){
        outputSec.style.display = "none";
        alert('Please enter a city..');
    }
    let filtered = locations.filter(locoObj =>{
        return locoObj.city.toLocaleLowerCase() == input.toLocaleLowerCase();
    })
       nearHeader.style.display = "block";
       nearHeader.innerHTML = `Clubs Near ${input}`
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
        </div>
        `
    })
    outputSec.innerHTML = results;
}
