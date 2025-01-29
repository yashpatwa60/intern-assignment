# Welcome to alloan.ai

#### Goals
- Build a single page, dynamic and responsive UI which will show dynamically updating stock graphs.

#### What to do -
- There are 2 APIs
- `/api/stocks` which will give you information about stocks available in dataset
- `/api/stocks/:id` this gives you data that you need to show in the graphs
  * This api will give you results dynamically i.e you will not receive the data in one go, but will receive with time.
  * example - 
    * In 1st api call you might get empty data.
    * In susequent calls with time, you will recieve more and more data and that should automatically update the UI (maybe polling).
- There should be a dropdown from where we can switch the selected stocks.
- For each stock there are data in durations like 6 month or 1 year or 5 years. 
- You should give option to select the for which duration user wants to see the data.

#### How to run backend 
- Go to backend folder
- Use `yarn` or `npm` to install all the dependencies and `yarn start` or `npm start` to start the server
- Server will start on `http://localhost:8080`

#### What is expected in frontend 
Must 
- Use Redux Toolkit for managing global state, thunk for api calls.
- Not drill props beyond level 2.
- Use pre built components and libraries to speedup and innovate (we use MUI and react-chartjs, but no restrictions).
- Make sure the UI is dynamic, responsive and screen agnostic.
  
Bonus Points
- If you can show more than one graph at the same time.
- If you can host it and share us a link
- If you can create a basic 2FA implementation (we use Firebase).
- If the UI is modern, sleek and user friendly.
