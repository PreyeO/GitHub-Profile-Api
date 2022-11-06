import React, { useState, useContext, Fragment} from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import ReactPaginate from 'react-paginate';
import  {UserFetchData}  from '../../App';
import { ToastContainer, toast } from "react-toastify";
import { useFetchData } from './useFetch'; 
import { Link } from 'react-router-dom';










const ReposData = () => {

 let datas= useContext(UserFetchData);

 const { isLoading} = useFetchData(
  "https://api.github.com/users/PreyeO"
  
);

const [pageNumber , setPageNumber] =useState(0)

const reposPerPage = 3;
const pageVisited = pageNumber * reposPerPage;
const displayReposData = datas.slice(pageVisited, pageVisited + reposPerPage)

const pageCounter= Math.ceil(datas.length/reposPerPage);

const changePage =({selected}) =>{
  setPageNumber(selected)
 }
 const [showRepo, setShowRepo] = useState({name:''})

 
 const handleShowRepo = (e) => {
  
  setShowRepo({...showRepo, [e.target.name]: e.target.value})
handleToast()
 }

 const handleToast = (e) => {
  // toast.success("no content here");
  setInterval(() => {
    window.location = "/repos";
    
    },1000 )
  
 }

 
 

  return (
    <Fragment>
        <div>
    {isLoading ? (
      <div>
        <Backdrop
          sx={{ color: "#fff",zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    ) : null}
  </div>

  
      <div className='repos-container'>
        {datas && displayReposData.map(item =>
        
        <div  key={item.id} className='repos-card'>
          
 
          <div className='repos-name'>
          <h5>Name:</h5> 
          <h1>{item.name}</h1>
          
          </div>
          <div className='repos-btns'>
          <Link to={`${item.id}`}><button>API info</button></Link>
         <span classname="btn-hide"><button name= 'name' value= {item.name} onClick= {handleShowRepo}>Manual info</button></span>
</div>


{showRepo.name === "Calculator"?
  setInterval(() => {
 window.location = "/calculator" 
 }, ): null}

 {showRepo.name === "food-app"?
    setInterval(() => {
 window.location = "/foodapp";
 }, ): null
} 
 {showRepo.name === "earth-natural-wonders"?
  setInterval(() => {
window.location = "/naturalwonders";
}, ):null 

 } 
  {showRepo.name === "CUPID-DATING-APP"?
  setInterval(() => {
window.location = "/cupidapp";
}, ):null 

 } 
  {showRepo.name === "my-business-card"?
  setInterval(() => {
window.location = "/businesscard";
}, ):null 

 } 
  {showRepo.name === "STOPWATCH"?
  setInterval(() => {
window.location = "/stopwatch";
}, ):null 

 } 
  {showRepo.name === "Black-jack-game"?
  setInterval(() => {
window.location = "/blackjack";
}, ):null 

 } 
  {showRepo.name === "Basketball-Scoreboard"?
  setInterval(() => {
window.location = "/scorecard";
}, ):null 

 } 
  {showRepo.name === "TODO-LIST-APP"?
  setInterval(() => {
window.location = "/todolist";
}, ):null 

 }  
  {showRepo.name === "ScareCrow"?
  setInterval(() => {
window.location = "/scarecrow";
}, ):null 

 } 
   {showRepo.name === "PreyeO"||"altschool-opensource-names"||"Cloudlord-and-pals"||"coders-den"?  <span style={{display:"none"}}></span>:null 

 } 

{/* <ToastContainer style={{theme:"dark" ,marginBottom:300}}/>  */}

</div>
    
         )}
         
      </div>
      
      <ReactPaginate
       previousLabel={"Prev"}
       nextLabel ={"Next"}
       pageCount={pageCounter}
       onPageChange={changePage}
       containerClassName={"pagination-btns"}
       previousClassName={"prev-btn"}
       nextClassName={"next-btn"}
       disabledClassName={"disabled-btn"}
       activeClassName={"active-btn"}
      
       />
     
  </Fragment>
  
  )


}

export  default ReposData