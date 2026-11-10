import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const UFSC: [number, number] = [-27.59997679211042, -48.517804077343015];

export const Map: React.FC = () => {
  return (
    <div className="w-full h-screen relative">
      <MapContainer
        center={UFSC}
        zoom={5}
        scrollWheelZoom={true}
        className="w-full h-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/*Marcador na UFSC */}
        <Marker position={UFSC}>
          <Popup>
            <div className="p-1 text-center">
              <h3 className="font-bold text-gray-800">UFSC</h3>
              <p className="text-xs text-gray-600">Universidade Federal de Santa Catarina</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};