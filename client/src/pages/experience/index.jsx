import React from 'react'
import OtherBg from '../../containers/otherBg'
import LinkHeading from '../../containers/subheading'
import './style.css'
import NorwichAreas from '../../features/norwich'
import castle from '../../assets/png/castle.png'
import park from '../../assets/png/park.png'
import ghostWalk from '../../assets/png/ghostWalk.png'
import broads from '../../assets/png/broads.png'
import garden from '../../assets/png/garden.png'
import collection from '../../assets/png/collection.png'


const Experience = () => {
  return (
    <>
     <div className="topWrapper">

  
      <OtherBg
      title='Experience'/>
         </div>
     
   
<div>
<LinkHeading
      mainHeading='Explore the city'
      content='Immerse yourself in all that the city and its surroundings have to offer. Delve deep into the culture, nature and history; indulge in the flavors, colors, sights and sounds. '/>
    </div>
  
    <div className="experience_wrapper">
          <NorwichAreas
          leftPicture={castle}
          leftTitle='Norwich Castle'
          rightPicture={park}
          rightTitle='Wensum Park'/>
           <NorwichAreas
          leftPicture={ghostWalk}
          leftTitle='Norwich Ghost Walks'
          rightPicture={broads}
          rightTitle=' The Broads National Park'/>
           <NorwichAreas
          leftPicture={garden}
          leftTitle='The Plantation Garden'
          rightPicture={collection}
          rightTitle='The South Asia Collection'/>

        </div>
</>

  )
}
export default Experience
