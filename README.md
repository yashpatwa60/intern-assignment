# Welcome to alloan.ai

#### Goals
- Create a single page application where you have to show a dynamically updating stocks graph.

#### What to do -
- There are 2 APIs
- `/api/stocks` which will give you information about stocks available in dataset
- `/api/stocks/:id` this gives you data that you need to show in the graphs
  * This api will give you results dynamically i.e you will not receive the data in one go, but will receive with time.
  * example - 
    * at 1st api call you will get empty data.
    * 2nd api call you might receive some data but this might be unfinished data.
    * In 3rd call you might receive full data.
    * all of these states be dynamically updated on frontend and the graphs should be updated as we are receiving these data. (No button or component that user will clicks and get the result)
- There should be a dropdown from where we can select stocks
- For each stock there are data in durations like 6 month or 1 year or 5 years. 
- You should give option to select the for which duration user wants to see the data.

#### How to run backend 
- go to backend folder
- run `yarn` or `npm install` to install all the dependencies
- run `yarn start` or `npm start` to start the server
- server will start on `http://localhost:8080`


#### What is expected in frontend 

Must
- Use Redux Toolkit for managing global state
- Use thunk for making api calls
- Use ContextAPI if required
- Don't drill props beyond level 2
- Confirm that graphs are automatically updated no user input is required for refreshing graph data
- Don't make api call if you already have full graph data of a stock
- Use MUI Components to work faster
- Use `react-chart.js` lib for creating charts.
- Ensure graphs size are responsive and scales well with screen sizes.
  
Bonus
- Give functionality to show more than 1 realtime graphs on the same time.
- Create a basic firebase authentication layer