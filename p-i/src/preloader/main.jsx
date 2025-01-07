import React from 'react'
import { MainContainer, ZoomTransition } from './style'
import vec from '../../assets/download.png'
// import { Zoom } from 'react-toastify'

const PreLoading = () => {
  return (
    <MainContainer>
      <ZoomTransition>
        <h1>Welcome to PassionAI</h1>
      </ZoomTransition>
    </MainContainer>
  )
}

export default PreLoading