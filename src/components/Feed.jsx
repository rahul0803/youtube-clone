import React, {useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import SideBar from './SideBar'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'


const Feed = () => {
const [selectedCategory, setSelectedCategory] = useState('New')
const [videos, setVideos] = useState([])

  useEffect(()=> {
  fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  .then((data)=>setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{flexDirection: {sx: 'column', md: 'row'} }}>
    <Box sx={{height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2 }}}>

      <SideBar 
        selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
      />

      <Typography className='copyright' variant='body2' sx={{mt: 1.5, color: '#fff '}}>
      Copyright 2022 BITW
      </Typography>

    </Box>

    <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
      <Typography variant='h4' fontWeight= 'bold' mb= {2} sx={{color: 'whitesmoke'}}>
     {selectedCategory} <span style={{color: '#FC1503'}}> videos </span>
      </Typography>

      <Videos videos={videos} />

    </Box>
    </Stack>
  )
}

export default Feed



// feed == left part (sidebar) & video feed (the full main page)
// Stack will wrap d sidebar nd the main part
// md == on medium devices nd higher the flexDirection property will b row (column in mobile)
// px = padding horizontal
// Typography == simple component used for all text elements, instead of 'p' tags & headings
// flex 2 == will take more space than the sidebar