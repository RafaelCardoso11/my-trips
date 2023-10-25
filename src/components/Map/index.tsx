import { GetPlacesQuery } from 'graphql/generated/graphql'
import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

export const Map: React.FC<GetPlacesQuery> = ({ places }) => {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places?.map(({ id, name, location }) => {
        const { latitude, longitude } = location
        return (
          <Marker
            position={[latitude, longitude]}
            key={`place-${id}`}
            title={name}
          />
        )
      })}
    </MapContainer>
  )
}
