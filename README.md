Smart Goal Planner
==================

Overview
--------

The Smart Goal Planner is a web application designed to help users manage multiple savings goals, allocate deposits across them, and track progress toward each goal. This tool provides a dashboard where users can add, track, update, and delete their financial objectives, offering a clear overview of their savings activity.

The application is built with React for the frontend and uses json-server to simulate a local REST API for data persistence, allowing for full Create, Read, Update, and Delete (CRUD) functionality.

Features
--------

*   **Goal Management (CRUD):**
    
    *   **Add New Goals:** Create new financial goals with a name, target amount, category, and deadline.
        
    *   **Track Progress:** View the total amount saved for each goal against its target, remaining amount, and a visual progress bar.
        
    *   **Make Deposits:** Add funds to any existing goal, updating its savedAmount and progress.
        
    *   **Update Goals:** Modify existing goals including their name, target amount, category, and deadline.
        
    *   **Delete Goals:** Remove goals that are no longer needed.
        
*   **Overview Dashboard:**
    
    *   Displays the total number of goals.
        
    *   Shows the total money saved across all goals.
        
    *   Highlights the number of completed goals.
        
    *   Provides status indicators for each goal based on its deadline (e.g., "Warning" for goals within 30 days, "Overdue" if the deadline has passed).
        

Technologies Used
-----------------

*   **Frontend:**
    
    *   React (Functional Components with Hooks)
        
    *   Vite (for fast development server and build)
        
    *   HTML, CSS
        
    *   **Deployment: Vercel**
        
*   **Backend (Simulated):**
    
    *   json-server (for local REST API simulation)
        
    *   **Deployment: Render**
        

Live Application
----------------

*   **Frontend (on Vercel):** [https://smart-goal-planner-rosy.vercel.app/](https://smart-goal-planner-rosy.vercel.app/)
    
*   **Backend (on Render):** _(This URL will be provided by Render after your backend deployment)_
    

Local Development Setup
-----------------------

Follow these steps to get the Smart Goal Planner running on your local machine.

### Prerequisites

*   Node.js (LTS version recommended)
    
*   npm (Node Package Manager) or Yarn
    
*   npm install -g json-server# or# yarn global add json-server
    

### Steps

1.  git clone smart-goal-planner-frontendgit clone smart-goal-planner-backend
    
2.  **Backend Setup:**
    
    *   cd smart-goal-planner-backend
        
    *   npm install
        
    *   json-server --watch db.json --port 3000Keep this terminal window open and running. This will serve your API at http://localhost:3000/goals.
        
3.  **Frontend Setup:**
    
    *   Open a **new terminal window**.
        
    *   cd smart-goal-planner-frontend
        
    *   npm install
        
    *   npm run devThis will typically open your application in your browser at http://localhost:5173 (or another available port).
        
    *   **Important:** For local development, ensure your src/App.jsx API\_URL is set to http://localhost:3000/goals. When deploying, you will change this to your live backend URL.
        

Deployment
----------

This application is deployed with the frontend on Vercel and the backend on Render.

### 1\. Backend Deployment (on Render)

1.  **Repository:** Ensure your db.json and backend package.json are in a dedicated Git repository.
    
2.  "scripts": { "start": "json-server --watch db.json --host 0.0.0.0 --port $PORT"}
    
3.  **Render Setup:**
    
    *   Go to [Render.com](https://render.com/) and create a new "Web Service".
        
    *   Connect to your backend Git repository.
        
    *   **Build Command:** npm install
        
    *   **Start Command:** npm start
        
    *   **Runtime:** Node
        
    *   **Instance Type:** Free (for testing)
        
    *   After deployment, **copy the generated URL** (e.g., https://your-backend-name.onrender.com). You will use this in your frontend.
        

### 2\. Frontend Deployment (on Vercel)

1.  **Repository:** Ensure your React application code is in its own Git repository.
    
2.  "scripts": { "start": "npm run build && vite preview --port $PORT"}
    
3.  // Example:const API\_URL = 'https://your-backend-name.onrender.com/goals'; // REPLACE with your actual Render backend URL**Commit and push this change to your frontend repository.** This is crucial for your deployed frontend to communicate with the backend.
    
4.  **Vercel Setup:**
    
    *   Go to [Vercel.com](https://vercel.com/) and log in.
        
    *   Click "Add New..." -> "Project" and import your frontend Git repository.
        
    *   Vercel should auto-detect "Vite" as the framework.
        
    *   **Build Command:** npm run build (default)
        
    *   **Output Directory:** dist (default)
        
    *   Click "Deploy".
        
    *   Your frontend will be live at a URL like https://smart-goal-planner-rosy.vercel.app/.
        

### 3\. CORS Configuration (if needed)

json-server usually handles basic CORS. If you encounter CORS errors (e.g., "No 'Access-Control-Allow-Origin' header"), you might need to create a custom server.js file in your backend repository and adjust the start script to run node server.js. Refer to json-server documentation for advanced CORS setup if necessary.

Usage
-----

Once the application is running (either locally or deployed):

*   **View Goals:** See all your existing savings goals displayed as cards.
    
*   **Add a Goal:** Use the "Add New Goal" form to create a new financial objective.
    
*   **Deposit:** Enter an amount in the deposit field on a goal card and click "Deposit" to add funds.
    
*   **Edit Goal:** Click the "Edit" button on a goal card to modify its details (name, target, category, deadline).
    
*   **Delete Goal:** Click the "Delete" button on a goal card to remove it.
    
*   **Overview:** The dashboard provides a summary of your total goals, total savings, and completed goals.
    

Contributing
------------

Feel free to fork the repository, make improvements, and submit pull requests.

License
-------

This project is open-source and available under the [MIT License](LICENSE.md).