import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { cityCoords } from '../utils/cityCoords';
import 'leaflet/dist/leaflet.css';

function CityMap({ cities }) {
  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={4}
      style={{ height: '400px', width: '600px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {cities.map((city) => {
        const coords = cityCoords[city];

        if (!coords) return null;

        return (
          <Marker key={city} position={coords}>
            <Popup>{city}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default CityMap;