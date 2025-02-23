import React, { useState, useEffect } from 'react'
import axios from "axios"
import LineGraph from "./Linegraph/line"

import { useSelector } from "react-redux"

const pollingInterval = 5000
const BaseURL = process.env.REACT_APP_BaseURL || "https://intern-assignment-335n.onrender.com/api"


const StockDetail = () => {

    const [graphData, setGraphData ] = useState([])
    const stockId = useSelector(store => store.stock.currentStockId)
    const stock = useSelector(store => store.stock.currentStock)

    useEffect(() => {

        const getDynamicData = async () => {
            try {
                const data = await axios.post(`${BaseURL}/stocks/${stockId}`, {
                    duration: stock.duration
                })

                if(data.data.length===0){
                    setGraphData([])
                }else {
                    const newData = data.data.data
        
                    setGraphData(prev => [...prev, ...newData])
                    console.log(data.data.data)
                }

                if (data.data.status === "COMPLETE") {
                    clearInterval(interval);
                    console.log("Polling stopped: Status is COMPLETE");
                }

              } catch (error) {
                console.error("Error fetching stocks:", error);
              }
        }

        setGraphData([]);

        // Fetch immediately, then start interval
        getDynamicData();
        const interval = setInterval(getDynamicData, pollingInterval);

    
        // Cleanup interval when component unmounts
        return () => clearInterval(interval);

    }, [stock])


  return (
    <div>{graphData && <LineGraph data={graphData}/>}</div>
  )
}

export default StockDetail