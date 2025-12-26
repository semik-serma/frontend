'use client'

import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { FaMapMarkerAlt } from "react-icons/fa";
import L from 'leaflet'
import '@/lib/leafletIcon'

const Page = () => {
  const [location, setLocation] = useState(null)

useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      },
      (error) => {
        console.error(error)
      }
    )
  }, [])

  if (!location) {
    return <div>Loading map...</div>
  }

  return (
    <div>
      <div>{JSON.stringify(location)}</div>

      <MapContainer
        center={[location.latitude, location.longitude]}
        zoom={13}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[location.latitude, location.longitude]}>
          <Popup>
            Your location
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Page
