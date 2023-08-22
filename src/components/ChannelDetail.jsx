import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Box } from '@mui/material'


const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  console.log(channelDetail, videos)

  const { id } = useParams()                                                               // accessing channel Id
  // console.log(id)

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight="95vh">
    <Box>
      <div 
        style= {{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(17,99,210,1) 37%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          height: '300px'
        }}
      />
      <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
    </Box>

    <Box display='flex' p='2'>

    <Box sx={{ mr: { sm: '100px' }}} />
    <Videos videos={videos} />
    </Box>

    </Box>
  )
}

export default ChannelDetail



// margin-right(mr) will b applied to small devices and higher, not 2 extra small devices
 