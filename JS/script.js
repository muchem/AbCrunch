function toggle() {
    document.getElementById('js-menu').classList.toggle('active');
}

function initMap() {
    let uluru = { lat: 39.381266, lng: -97.922211};
    let map = new google.maps.Map(
    document.getElementById('map'), { zoom: 4, center: uluru });
    let marker = new google.maps.Marker({ position: uluru, map: map });
}


