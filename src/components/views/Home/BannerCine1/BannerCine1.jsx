import React from 'react'
import { StyleBannerCine1 } from './Bannercine1.style'
import Button from '../../../common/Button/Button'
const Bannercine1 = () => {

  return (
    <StyleBannerCine1>
        <div>
            <h1>Cine Samurai Curitiba</h1>
            <Button texto='Programação' variant='primary' />
            <Button texto='Preços' variant='primary'/>
            
        </div>
    </StyleBannerCine1>
  )
}

export default Bannercine1