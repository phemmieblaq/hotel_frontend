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
title={params.roomCode==='122343389' ? 'Deluxe':params.roomCode==='122343385'? 'Suite':'Junior Suite'} />
   </div>
   <RoomDetails/>
    </div>
  )
}

export default DetailsPage
