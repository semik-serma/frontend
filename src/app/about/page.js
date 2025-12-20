'use client'
import React, { useState } from 'react'

const page = () => {
    const [location,setlocation]=useState(null)
    navigator.geolocation.getCurrentPosition(((position)=>{
        setlocation({
            latitude:position.coords.latitude,
            longitude:position.coords.longitude,
            accuracy:position.coords
        })
    }))

return (
    <div>
      <div>{JSON.stringify(location)}</div>
    </div>
  )
}

export default page
