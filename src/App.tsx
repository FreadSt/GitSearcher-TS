import React from 'react';
import './App.scss';
import { BrowserRouter as Router, 
  Route, 
  Routes, 
  useParams, } 
              from 'react-router-dom';
import {SearchPage}  from "./pages/SearchPage";
import { UserPage } from './pages/UserPage';



const App: React.FC = () => {
  return(
    <Router>
      <div className="container">
          <Routes>
            <Route path ="/userpage/:id" element={<UserPage/>} />
            <Route path="/"  element={<SearchPage/>} />
          </Routes>
      </div>
    </Router>
  )
}

export default App;


/*
  mojombo
  efunkt
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };
  const handleSearch = () => {
    if(userData){
    Axios.get(`https://api.github.com/users`)
      .then(res => {
        console.log(res.data, "res")
        setUserData([res.data, ...userData])
      })
    }
  }
  /////////////////////////////////
  useEffect(() => {
    Axios.get("https://api.github.com/users")
      .then(res => {
        console.log(res.data, "res")
        setUserData(res.data)
      })
    }, [])

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const searchTitle = e.target.value;
    setData(searchTitle);
  };
<UserList userData={userData}/>
  
*/