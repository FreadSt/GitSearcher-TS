import React, {FormEvent, useEffect, useState} from "react";
import { IData } from '../Components/interfaces';
import DataComponent from "../Components/DataComponent";
import "../pages/page.scss"

/*Debounce */
export const SearchPage: React.FC = () => {
  const [userData, setUserData] = useState<IData[]>([])
  const [dataSearch, setData] = useState<string>('')

  const handleSearch = (param: string) => {
    console.log(param, 'query')
    return fetch(`https://api.github.com/users/${param}`);
  };
    
  useEffect(() => {
    (async () => {
      const param = encodeURIComponent(dataSearch)
      if(param) {
        handleSearch(param)
          .then((response) => {
            console.log(param, "qweq")
            return response.json();
          })
          .then(myJson => {
            console.log(myJson , "JSON");
            setUserData([...userData, myJson])
            return myJson;
          });
      }
      console.log(userData, "uData")
    }) ();
  },[dataSearch])

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement
    const input = form.querySelector('#searchText') as HTMLInputElement
    setData(input.value)
    input.value = "";
  }

  return (
    <div className="search-div">
        <form className="form" onSubmit={event => search(event)}>
          <div className="search-input">
            <input type="text" id="searchText"/>  
                              
          </div>
          {dataSearch && <h1>Results for {dataSearch}...</h1>}
        </form>        
        <div className="data-container">
          {userData.length ?
            userData.map(data =>
              <DataComponent key={data.name} data={data}/>
            ) : <DataComponent data={userData}/>
          }
        </div>
    </div>
  )
}
 