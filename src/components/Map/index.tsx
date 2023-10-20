import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

type Place = {
  id: number
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}
export type MapProps = {
  places?: Place[]
}
export const Map: React.FC<MapProps> = ({ places }) => {
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
