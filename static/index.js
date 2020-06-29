function updateMap() {
    console.log("Map has been updated");
    fetch("/static/data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data);
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                //marker on map
                var marker = new mapboxgl.Marker({
                    draggable: true
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);

            });

        });
};
let interval = 2000;
setInterval(updateMap, interval);