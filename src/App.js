

// *************************** code after route.js *******************************

import './App.css';
import "./index.css"
import   { useState   , Suspense} from "react"
import { Route, Routes, BrowserRouter , Navigate } from "react-router-dom";
import { appRoutes} from "./route.js"
import Navbar from "./components/navbar"

function App() {
  const [ username , setUsername] = useState('');
  const [ isLogged , setIsLogged] = useState(false);


  return (
    <BrowserRouter>
   <Navbar  isLogged = {isLogged}/>
   < Suspense  fallback={ ()=> <h1>Loading....</h1>}>
 <Routes>
   
  {
   appRoutes.map((route)=>{
        if(route.requireAuth && !isLogged){
           return(
            <Route 
             key = {route.path}
             exact
             path={route.path}
             element= {<Navigate replace to = {"/login"} /> }
               />
           )
        }else{
          return <Route 
              key = {route.path}  
              exact 
              path = { route.path}
              element ={
              <route.component  
               setIsLogged = {setIsLogged}
              setUsername = {setUsername}
              username = {username} 
              />}
              
              /> // jun route lai j props chainxa tyo linxa , if chinna linna
        }
   })
  }

 </Routes>
 
   </Suspense >

      </BrowserRouter>
  );
}

export default App;


 //******CODE BEFORE route.js file ***************************

// import './App.css';
// import "./index.css"
// import  Home  from "./components/home"
// import Navbar from "./components/navbar"


// // import  Users  from "./components/users"
// // import PageNotFound from "./components/notfound"
// // import UserProfile from "./components/userProfile"
// // import SearchUser from "./components/searchUser"
// // import Login from "./components/login.js"
// // import AuthProfile from "./components/authProfile"
// import { Route, Routes, BrowserRouter , Navigate } from "react-router-dom";
// import  React , { useState  , lazy , Suspense} from "react"

// //Outlet --> allow nested route
// // Link --> between pages / only change components loads

// //Lazy route

// const Users = lazy(()=> import("./components/users.js"))
// const UserProfile = lazy(()=> import("./components/userProfile"))
// const SearchUser = lazy(()=> import("./components/searchUser"))
// const Login = lazy(()=> import("./components/login.js"))
// const AuthProfile = lazy(()=> import("./components/authProfile"))
// const PageNotFound = lazy(()=> import("./components/notfound"))


// function App() {
//   const [ username , setUsername] = useState('');
//   const [ isLogged , setIsLogged] = useState(false);


//   return (
//     <BrowserRouter>
//    < Suspense  fallback={ ()=> <h1>Loading....</h1>}>
//    <Routes>
//       <Route path = '/' element = { <Navbar  isLogged = {isLogged}/>} >
//         <Route   path="/" element={<Home />} />
//         <Route path="/users" element={<Users />} />
//         <Route path= "/users/users/:usersname" element = { <UserProfile />} />
//         <Route path= "/search" element = { <SearchUser/> } />
//         <Route path = "/login" element =
//          { <Login  
//             setIsLogged = {setIsLogged}
//             setUsername = { setUsername}
//              />
//           } 
//          />
   
//      {/* Protected route */}

//         <Route 
//         path = "/authProfile" 
//         element = { 
//           isLogged ? <AuthProfile  username= { username}/> :
//           <Navigate replace to = {"/login"}/> //navigate to login
//         }
//          />

//       </Route>
//        <Route path= "*" element={<PageNotFound/>} />
//       </Routes> 
 
//    </Suspense >

//       </BrowserRouter>
//   );
// }

// export default App;

