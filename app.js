const mymap = L.map('mapid', { scrollWheelZoom: false }).setView(
    [34.96092776801906, -81.9349139912858],
    17
);

if (window.innerWidth < 700) {
    document.querySelector('#mapid').style.display = 'none';
    document.body.textContent =
        'This map is not optimized for tablet or mobile devices.';
}

const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

// Custom popup
const popupOptions = {
    maxWidth: '100%',
    width: '100%',
    className: 'popupCustom',
};

// Custom Icons
const athletics = L.icon({
    iconUrl: 'assets/athletics.png',

    iconSize: [50, 50], // size of the icon
    iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
    popupAnchor: [0, 0], //point from which the popup should open relative to the iconAnchor
});
const residence = L.icon({
    iconUrl: 'assets/residence.png',

    iconSize: [50, 50], // size of the icon
    // iconAnchor: [22, 94],  point of the icon which will correspond to marker's location
    // popupAnchor: [-3, -76],  point from which the popup should open relative to the iconAnchor
});

// JRIS
const JRISMarker = L.marker([34.96350290202932, -81.93361177882102], {
    icon: athletics,
}).addTo(mymap);
const JRISPopup = `
    <h1>JRIS</h1>
    <div class="about">Jerry Richardson Indoor Stadium is a college basketball arena located in Spartanburg, South Carolina on the campus of Wofford College. It became home of the Wofford Terriers men's and women's basketball teams at the start of the 2017–18 season, replacing Benjamin Johnson Arena.</div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Vtrgjg9s3YA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`;
JRISMarker.bindPopup(JRISPopup, popupOptions);

// Main
const mainMarker = L.marker([34.95883628811891, -81.9350302167112]).addTo(
    mymap
);
const mainPopup =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/FwTXcBNqT5w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
mainMarker.bindPopup(mainPopup, popupOptions);
