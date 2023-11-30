import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/react-alice-carousel.css"

const Body = (props) => {
  return (
    <div>
      <p>{props}</p>
      <AliceCarousel>
        <p><img src="{image1}" classname="sliderimg" alt="" /></p>
        <p><img src="{image1}" classname="sliderimg" alt="" /></p>
        <p><img src="{image1}" classname="sliderimg" alt="" /></p>
        <p><img src="{image1}" classname="sliderimg" alt="" /></p>
      </AliceCarousel>
    </div>
  )
}

export default Body