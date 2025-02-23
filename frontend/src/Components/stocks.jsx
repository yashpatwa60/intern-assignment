import { useEffect } from 'react'
import { useNavigate } from "react-router"

import axios from 'axios'

import {Card, Box, Typography, Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material"

import { useDispatch, useSelector } from "react-redux"
import { setAllStocks, setCurrentStock, setStockId } from "../Slice/stockSlice"

const BaseURL = process.env.REACT_APP_BaseUrl || "https://intern-assignment-335n.onrender.com/api"

const Stocks = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    const handleChange = (id, duration) => {
        const newAllStock = allStocks.map((stock) => {
            if(id === stock.id){
                return { ...stock, duration }
            }

            return stock;
        })  
        
        dispatch(setAllStocks(newAllStock))
      };

    const handleClick = async(stock) => {
        dispatch(setStockId(stock.id))
        dispatch(setCurrentStock(stock))
        navigate(`/stocks/${stock.id}`)
    }

    useEffect(() => {
        getStocks()
    }, [])
    

  return (
    <div>
        <Box sx={{ display: "flex", gap: 5, mt: '10px', mx: "10px"}}>
            {allStocks.map(stock => 
            <Card key={stock.id} sx={{ p: 4, width: 200, minHeight: 100, border: "1px solid #219ebc"}}>
                <Typography>{stock.name}</Typography>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 5}}>
                    <Button onClick={() => handleClick(stock)} sx={{ mt: 5}} variant="outlined">View</Button>
                    <Box sx={{ minWidth: 120, height: "5px"}}>
                        <FormControl fullWidth size="small">
                            <InputLabel >Duration</InputLabel>
                            <Select
                            value={stock.duration}
                            label="Duration"
                            onChange={(e) => handleChange(stock.id, e.target.value)}
                            >
                                {stock.available.map(dur =>  <MenuItem value={dur}>{dur}</MenuItem>)}
                               
                            </Select>
                        </FormControl>
                    </Box> 
                </Box>
            </Card>)}
        </Box>
    </div>
  )
}

export default Stocks