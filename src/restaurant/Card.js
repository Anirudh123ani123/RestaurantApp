import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PlaceholderImage from './small-image.jpg'
import 'react-lazy-load-image-component/src/effects/blur.css';
import './style.css'
import '../index.css'
const Card = ({card}) => {
  return (
    <div className='card'>
    <div className='circle'>{card.id}</div>
    <p>{card.category}</p>
    <h4>{card.name}</h4>
    
    <hr className='horizontal-line'/>
    
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores natus a, qui dolorem accusamus officia?</p>
    <hr className='horizontal-line'/> 
    <LazyLoadImage src={card.image} className='lazyLoadImage'
    placeholderSrc={PlaceholderImage}
    alt="Image Alt"
    effect="blur"
/>
    </div>
  )
}

export default Card
// <LazyLoadImage src="images/small-image.jpg" alt=""  loading="lazy" height='70%' width='90%'
//       PlaceholderSrc={card.image} effect="blur"
//      />