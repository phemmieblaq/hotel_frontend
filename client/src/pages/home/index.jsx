import React from 'react'
import MainBackground from '../../containers/mainBackground'
import './style.css';
import HotelCard from '../../components/cards/hotelCard';
import MapContainer from '../../containers/map';
import location from '../../assets/svg/location.svg'
import gym from '../../assets/png/gym.jpeg'
import Restaurant from '../../assets/png/Restaurant.jpeg'
import Bar from '../../assets/png/Bar.jpeg'
import hall from '../../assets/png/hall.jpeg'
import house from '../../assets/svg/house.svg'
import people from '../../assets/svg/people.svg'
import castle from '../../assets/png/castle.png'
import park from '../../assets/png/park.png'
import ghostWalk from '../../assets/png/ghostWalk.png'
import broads from '../../assets/png/broads.png'
import garden from '../../assets/png/garden.png'
import collection from '../../assets/png/collection.png'
import NorwichAreas from '../../features/norwich';
// import {  useNavigate } from "react-router-dom";


const Home = () => {
  

  return (
    <div className='main-container '>
        <div className="textLogoWrapper">
            <MainBackground/>
    
        
        <h1 className='first-title-wrapper'>Choose your perfect sanctuary</h1>
        </div>
        <div className="card-wrapper">
       <HotelCard/>
       <HotelCard/>
       <HotelCard/>
       <HotelCard/>
       
        </div>
       
        <h2 className='title-wrapper'>Location</h2>
        <div className="map-wrapper">
          <div className="mapContainer">
        <MapContainer />
        </div>
        <div className="right-container">
            <div className="heading-wrapper">
            Crown Hotel
            </div>
            <div className="Image-wrapper">
                <div>
                <img src={location} alt="location" />
                </div>
                <div className="text-wrapper">
                <p>14 Avenue East East west norwich uk</p>
                <p >GPS: 52.6221° N, 1.2411° E</p>
                </div>
                
            </div>
            <div className="direction-wrapper">
           Direction
            </div>
            <div className="text-wrapper">
            <p>This single bed executive room is designed as a modern home design that help tou have a comfort luxury home experience designed to help you relax and enjoy your time</p>
            </div>
          
               
               
          

        </div>
        </div>
        <h3 className='title-wrapper'>We are beyond a palace to relax</h3>
        <div className="facilities-wrapper">
          <div className="left-container-picture">
            <img src={gym} alt="gym" className='gym-picture' />
            <div className="image-caption">
              <h4 className="facility-heading">
                Gym
              </h4>
              <p>You can continue your fitness journey  at ease while enjoying your holiday <br/>
                 &#160;</p>



            </div>
          </div>
      <div className="right-wrapper">
      <div className="first-right-container-picture">
            <img src={Restaurant} alt="gym" className='restaurant-picture' />
            <div className="image-caption">
              <h4 className="facility-heading">
              Restaurant
              </h4>
              <p>Enjoy over 12 cuisines and over 120+ meals and 5 special cocktail experience only available in our hotel.  </p>




            </div>

      </div>
      <div className="second-right-container-picture">
            <img src={Bar} alt="gym" className='bar-picture' />
            <div className="image-caption">
              <h4 className="facility-heading">
                Bar
              </h4>
              <p>We have variety of drinks available for you to relax and connect with others in our bar. le from different walks of life </p>




            </div>

      </div>

        </div>
        
        </div>
        <h3 className='title-wrapper'>We are beyond a palace to relax</h3>
         {/* hall */}
        <div className="hall-wrapper">
          <div className="hall-image-wrapper">
            <img src={hall} alt="hall" className='hall-image'/>

          </div>
         
          <div className="hall-content">
            <div className='revolve'>
            <h4>Hall Revolve</h4>
            <div id="iconWrapper">
              <div>
              <img src={house} alt="" />
              </div>
              <p>10 X 22 X 3.6</p>
           

            </div>
            <div id="iconWrapper">
              <div>
              <img src={people} alt="" />
              </div>
              <p>20-60 Adults</p>
           

            </div>
            
            </div>
            <h5>SEATING PLAN</h5>
            <div className="plan_container">
             
              <h6>Theater: 50</h6>
              <div className="dotWrapper">
                <div className="dot"/>
              <h6>Class room: 60</h6>
              </div>
              
              <div className="dotWrapper">
                <div className="dot"/>
              <h6>U shape: 45</h6>
              </div>


            </div>
            <p className="details">The larger half of the ballroom, with natural daylight, is ideal for conferences with breakout sessions. Enjoy a range of layouts and state-of-the-art equipment.</p>
          </div>
          

        </div>
        <h3 className='title-wrapper'>Explore the city</h3>
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
    </div>
  )
}

export default Home
