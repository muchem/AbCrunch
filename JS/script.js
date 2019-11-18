function toggle() {
    document.getElementById('js-menu').classList.toggle('active');
}

function initMap() {
    // The location of Uluru
    let uluru = { lat: 39.381266, lng: -97.922211};
    // The map, centered at Uluru
    let map = new google.maps.Map(
    document.getElementById('map'), { zoom: 4, center: uluru });
    // The marker, positioned at Uluru
    let marker = new google.maps.Marker({ position: uluru, map: map });
}


