import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Repos from "./Pages/Repositories/Repos";
import Contact from "./Pages/ErrorTesting/Contact"
import Calculator from "./Components/RepoContents/Calculator";
import ScoreCard from "./Components/RepoContents/ScoreCard";
import BlackJack from "./Components/RepoContents/Blackajack";
import BusinessCard from "./Components/RepoContents/BusinessCard";
import CupidAPP from "./Components/RepoContents/CupidApp";
import FoodApp from "./Components/RepoContents/FoodApp";
import NaturalWonders from "./Components/RepoContents/NaturalWonders";
import StopWatch from "./Components/RepoContents/StopWatch";
import TodoList from "./Components/RepoContents/TodoList";
import ScareCrow from "./Components/RepoContents/ScareCrow";
import ErrorBoundary from "./Components/Errors/ErrorBoundary";
import ErrorPage from "./Pages/404ErrorPage/ErrorPage";
import React, { useState, useEffect, createContext, Fragment } from "react";
import RepoContent from "./Components/RepoContents/RepoContent";
import "react-toastify/dist/ReactToastify.css";


export const UserFetchData = createContext();

function App() {

  
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await fetch("https://api.github.com/users/PreyeO/repos");
      res
        .json()
        .then((res) => setDatas(res))

        .then((isLoading) => setIsLoading(false))
        .catch((error) => setError(error.message));
    }
    fetchData();
  });
  
  

  return (
  <Fragment>
    

      <ErrorBoundary>
     
       
        <Router> 
  
           <UserFetchData.Provider value={datas}> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/repos" element={<Repos />} />
              <Route path="/repos/:content" element={<RepoContent />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/stopwatch" element={<StopWatch />} />
              <Route path="/blackjack" element={<BlackJack />} />
              <Route path="/foodapp" element={<FoodApp />} />
              <Route path="/naturalwonders" element={<NaturalWonders />} />
              <Route path="/businesscard" element={<BusinessCard />} />
              <Route path="/cupidapp" element={<CupidAPP />} />
              <Route path="/scorecard" element={<ScoreCard />} />
              <Route path="/todolist" element={<TodoList />} />
              <Route path="/scarecrow" element={<ScareCrow />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            </UserFetchData.Provider>
        </Router>
      </ErrorBoundary>
    </Fragment>
  )
}

export default App;
