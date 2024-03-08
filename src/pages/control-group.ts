import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

import './style.css';

const scale = 10;
const width = 800;
const height = 600;

const scalerElement = document.querySelector<HTMLDivElement>("#scaler")!;
scalerElement.style.width = `${width * scale}px`;
scalerElement.style.height = `${height * scale}px`;
scalerElement.style.transform = `scale(${1 / scale})`;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [-30, 20], // starting position [lng, lat]
    zoom: 0, // starting zoom
    accessToken: import.meta.env.VITE_MAPBOX_TOKEN,
    style: {
        'version': 8,
        'sources': {
            'raster-tiles': {
                'type': 'raster',
                'tiles': ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
                'tileSize': 256,
                'attribution':
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }
        },
        'layers': [
            {
                'id': 'simple-tiles',
                'type': 'raster',
                'source': 'raster-tiles',
                'minzoom': 0,
                'maxzoom': 22
            }
        ]
    },
});

new mapboxgl.Marker({
    color: "#FF0000",
}).setLngLat([-100, 40]).addTo(map);

console.log(map)
