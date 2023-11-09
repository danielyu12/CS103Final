import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/react-alice-carousel.css"

const Body = (props) => {
  return (
    <div>
      <AliceCarousel>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quos ratione corrupti libero deleniti atque esse officiis rerum blanditiis earum, veniam doloribus quibusdam similique accusantium illum id harum repellendus inventore excepturi laborum! Suscipit fugit praesentium adipisci quo omnis tempora qui asperiores commodi deleniti, ipsa eveniet unde nihil inventore laudantium doloremque aut. Sed voluptatum, voluptates ab adipisci earum rerum nemo at consequatur nobis aliquam quam voluptatibus illo corporis recusandae est, accusamus animi incidunt aperiam possimus veritatis. Distinctio veritatis obcaecati consectetur labore ratione delectus temporibus repellat laudantium ad quisquam officia laboriosam ipsa, dignissimos necessitatibus quasi sed commodi. Excepturi ad veritatis commodi eos.</p>
        <p><img src="{image1}" classname="sliderimg" alt="" /></p>
        <p><img src="{image1}" classname="sliderimg" alt="" /></p>
        <p><img src="{image1}" classname="sliderimg" alt="" /></p>
        <p><img src="{image1}" classname="sliderimg" alt="" /></p>
      </AliceCarousel>
    </div>
  )
}

export default Body