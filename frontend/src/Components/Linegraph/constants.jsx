const options =  {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: { 
          display: false,
        },
        border: { color: "black", width: 2 },
        title: {
          display: true,
          text: 'Month',
          color: '#47008F',
          font: {
            family: 'Comic Sans MS',
            size: 20,
            weight: 'bold',
            lineHeight: 1.2, },
            padding: {top: 20, left: 0, right: 0, bottom: 0}
          }
        },
      y: {
          grid: {
              display: false
          },
          display: true,
          border: { color: "black", width: 2 },
          title: {
            display: true,
            text: 'Stock price',
            color: '#47008F',
            font: {
              family: 'Comic Sans MS',
              size: 20,
              weight: 'bold',
              style: 'normal',
              lineHeight: 1.2
            },
            padding: {top: 30, left: 20, right: 20, bottom: 10}
          }
       }
      }
  }
   



export default options