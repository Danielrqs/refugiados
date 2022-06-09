
function toggleMapa(){
    let mapElement = document.getElementById('map');
    let inputElement = document.getElementById('buttonMap');
    let titlemapElement = document.getElementById('titlemap');

    if (mapElement.style.display === 'flex') {
        mapElement.style.display = 'none';
        inputElement.value = "Ver Mapa";
        titlemapElement.style.display - 'none';
    }
    else {
        mapElement.style.display = 'flex';
        titlemapElement.style.display = 'flex';
        inputElement.value = "Fechar Mapa";
    }

}

function iniciarMap(){
    var coord = {lat:-20.3420985 ,lng: -40.3122348};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}