Smart Goal Planner
==================

Overview
--------

The Smart Goal Planner is a web application designed to help users manage and track their savings goals. It provides features for adding, viewing, updating, and deleting financial goals, along with an overview of their savings progress.

The application's frontend is built with React, and it communicates with a json-server backend for data persistence.

Features
--------

*   **Goal Management:**
    
    *   Add new savings goals.
        
    *   View detailed progress for each goal (saved amount, target, visual bar).
        
    *   Make deposits to increase saved amounts.
        
    *   Edit existing goal details.
        
    *   Delete goals.
        
*   **Savings Overview:**
    
    *   Displays total goals and total money saved.
        
    *   Highlights completed goals.
        
    *   Provides deadline status indicators.
        

Technologies
------------

*   **Frontend:** React, Vite, HTML, CSS (Deployed on Vercel)
    
*   **Backend:** json-server (Deployed on Render)
    

Live Application
----------------

*   **Frontend:** [https://smart-goal-planner-rosy.vercel.app/](https://smart-goal-planner-rosy.vercel.app/)
    
*   **Backend:** [https://smart-goal-planner-1-9tjm.onrender.com/goals](https://smart-goal-planner-1-9tjm.onrender.com/goals)
    

Local Development
-----------------

To run the app locally:

### Prerequisites

*   Node.js
    
*   npm or Yarn
    
*   json-server (installed globally: npm install -g json-server)
    

### Steps

1.  git clone smart-goal-planner-frontendgit clone smart-goal-planner-backend
    
2.  cd smart-goal-planner-backendnpm installjson-server --watch db.json --port 3000
    
3.  cd smart-goal-planner-frontendnpm installnpm run devEnsure API\_URL in src/App.jsx is set to http://localhost:3000/goals for local testing.
    

Usage
-----

*   View existing goals.
    
*   Use the form to add new goals.
    
*   Deposit funds into goals.
    
*   Edit or delete goals as needed.
    
*   Review the savings overview.
    

Contributing
------------

Contributions are welcome. Please fork the repository and submit pull requests.

License
-------

This project is open-source under the MIT License.