import React from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

import { Box, Card, Typography, Button, MenuItem, FormControl, InputLabel, Select } from "@mui/material"

import { useSelector, useDispatch } from "react-redux"
import { setCurrentStock } from "../../Slice/stockSlice"

import options from "./constants"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineGraph = ({data}) => {

  const dispatch = useDispatch()
  const stock = useSelector(store => store.stock.currentStock)

  const handleChange = (value) => {
    const newStock = { ...stock, duration: value }
    dispatch(setCurrentStock(newStock))
  }


  const chartData = {
    labels: data.map(stock => stock.timestamp),
    datasets: [
        {
            label: "Stock Prices",
            data: data.map(stock => stock.price),
            borderColor: "#47008F",
            backgroundColor: "rgba(0, 123, 255, 0.5)",
            tension: 0.3,
            pointRadius: 0,
        },
    ]
  }

  return (
    <Box sx={{ display: "flex", gap: 5}}>
      <Box sx={{ p: 4 }}>
        <Card key={stock.id} sx={{ p: 4, width: 200, minHeight: 100, border: "1px solid #219ebc" }}>
                <Typography>{stock.name}</Typography>
                <Box sx={{ mt: 5, display: "flex", justifyContent: "center", alignItems: "center", gap: 5}}>
                    <Box sx={{ minWidth: 120, height: "5px"}}>
                        <FormControl fullWidth size="small">
                            <InputLabel >Duration</InputLabel>
                            <Select
                            value={stock.duration}
                            label="Duration"
                            onChange={(e) => handleChange(e.target.value)}
                            >
                                {stock.available.map(dur =>  <MenuItem value={dur}>{dur}</MenuItem>)}
                               
                            </Select>
                        </FormControl>
                    </Box> 
                </Box>
            </Card>
      </Box>
      <Box sx={{ height: "600px", width: "800px"}}><Line options={options} data={chartData}/></Box>
    </Box>
  )
}

export default LineGraph