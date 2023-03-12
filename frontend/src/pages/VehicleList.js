import React from 'react'
import { Vehicles } from "../helpers/Vechicles"
import VechicleChoice from '../components/VechicleChoice'
import "../styling/vehiclelist.css"
function VehicleList() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Vehicles</h1>
      <div className='menuList'>
        {Vehicles.map((vehicleItem, key) => {
          return <VechicleChoice
            key={key}
            image={vehicleItem.image}
            name={vehicleItem.name}
            price={vehicleItem.price} />
        })}</div>
    </div>
  )
}

export default VehicleList