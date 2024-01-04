import React from 'react'
import Card from '../../Configurations/cardcomponent/Card'
import Button from '../../Configurations/Buttoncomponent/Button'
import {CardData, ButtonData} from './EmployeeContent'

const EmployeeComponent = () => {
  return (
    <div>
        <div className='card'>
        <Card Configs={CardData} />    
        </div>

        <div>
        <Button Configs={ButtonData} />
        </div>
    </div>
  )
}

export default EmployeeComponent

