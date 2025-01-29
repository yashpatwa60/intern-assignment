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
- Use Redux Toolkit for managing global state, thunk for api calls
- Not drill props beyond level 2.
- Use pre built components and libraries to speedup and innovate (we use MUI and react-chartjs, but no restrictions)
- Make sure the UI is dynamic, responsive and screen agnostic.
  
Bonus Points
- If you can show more than one graph at the same time.
- If you can create a basic 2FA implementation (we use Firebase)
- If the UI is modern, sleek and user friendly
