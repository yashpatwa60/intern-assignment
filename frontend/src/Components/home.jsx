import { Box, Typography, Card, CardHeader, Button } from '@mui/material'
import React, { useEffect } from 'react'
import AppleIcon from '@mui/icons-material/Apple';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import MemoryIcon from '@mui/icons-material/Memory';
import SendIcon from '@mui/icons-material/Send';

import { Link } from 'react-router-dom'

import axios from "axios"

import { setAllStocks } from "../Slice/stockSlice"

import { useSelector, useDispatch  } from "react-redux"

const BaseURL = process.env.REACT_APP_BaseURL || "https://intern-assignment-335n.onrender.com/api"

const Home = () => {

  const dispatch = useDispatch()

  const allStocks = useSelector(store => store.stock.allStocks)

  const getStocks = async() => {
    try {
        const { data } = await axios.get(`${BaseURL}/stocks`)
        // console.log(data)
       const newData = data.map(stock => ({...stock, duration: "5y"}))
        dispatch(setAllStocks(newData))

    }catch(e){
        console.log(e)
    }
  }

  const getIcons = (stock) => {
        if(stock.name==="Apple Inc."){
          return <AppleIcon />
        }else if(stock.name==="Microsoft Corporation"){
          return <MicrosoftIcon/>
        }else if(stock.name==="NVIDIA Corporation"){
          return <MemoryIcon/>
        }
  }

  useEffect(() => {
    getStocks()
  }, [])


  return (
    <>
     <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        <Box sx={{ height: "100vh", background: "linear-gradient(to right, #000428, #004e92);", width: "600px", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div>
                <Typography color="white" variant="h3">Welcome to Stocks Homepage</Typography>
                <Typography sx={{ mt: "10px", mb: "25px"}} color="white" variant="h6">Stay Ahead of the Market with Live Stock Updates, Real-Time Data, and In-Depth Insights</Typography>
                <Link to="/stocks"><Button color="secondary" variant="contained" endIcon={<SendIcon/>}>Stocks</Button></Link>
            </div>
        </Box>

        <Box sx={{ overflowY: "auto", "&::-webkit-scrollbar": { display: "none" }, height: "85vh", mr: 25, display: "flex", flexDirection: "column", gap: 5, my: '10px'}}>
            {allStocks && allStocks.map(stock => 
            <Card key={stock.id} sx={{p: 4, width: 200, minHeight: 100, border: "1px solid #219ebc"}}>
                <Typography>{stock.symbol}</Typography>
                <Typography variant="h6" sx={{ my: 2}}>{stock.name}</Typography>
                {getIcons(stock)}

            </Card>)}
        </Box>

      </Box>
    </>
  )
}

export default Home