import React from 'react'
import { useParams } from 'react-router-dom';
import OtherBg from '../../../containers/otherBg';
import RoomDetails from '../../../features/roomDetails';

const DetailsPage = () => {
    const params = useParams();
    console.log(params)

  return (
    <div>
      <div className="topWrapper">

  
<OtherBg
title={params.roomCode==='std_t' ? 'Standard Twin':params.roomCode==='std_d'? 'Standard Double':params.roomCode==='sup_d'? 'Superior Double':params.roomCode==='sup_t'? 'Superior Twin':''} />
   </div>
   <RoomDetails/>
    </div>
  )
}

export default DetailsPage
