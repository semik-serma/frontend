'use client'
import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { Marker } from 'react-leaflet'
import { Popup } from 'react-leaflet'
const page = () => {
    const [location,setlocation]=useState(null)
    navigator.geolocation.getCurrentPosition(((position)=>{
        setlocation({
            latitude:position.coords.latitude,
            longitude:position.coords.longitude,
            accuracy:position.coords
        })
    }))
    useEffect(()=>{
      console.log(location)
    },[location])

return (
    <div>
      <div>{JSON.stringify(location)}</div>
      <MapContainer center={[location?.latitude,location?.longitude]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </div>

  )
}

export default page
