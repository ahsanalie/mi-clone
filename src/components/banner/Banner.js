import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarouselItem } from 'react-bootstrap';

const Banner = ({banner}) => {
  return( <div>
<Carousel fade  >
    {banner.end.map((item,index)=>(
        <CarouselItem id="banner" key={item.image} interval={1000} keyboard={true} >
<img
className="d-block w-100"
id="bannerImage"
src={item.image}
alt={`${index} banner`}
/>
<Carousel.Caption>
<h3>{item.name}</h3>
<p>{item.description}</p>
<p>{item.source}</p>
<u>Read more</u>
</Carousel.Caption>
        </CarouselItem>

     ) )  }
</Carousel>

</div>
)
};

export default Banner;
