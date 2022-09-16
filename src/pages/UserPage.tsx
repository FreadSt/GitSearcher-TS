import React,{useState, useEffect, FormEvent} from "react";
import { IData } from '../Components/interfaces';
import UserComponent from "../Components/UserComponent/UserComponent";
import ReposComponent from "../Components/UserComponent/ReposComponent";
import { Octokit } from "@octokit/rest";
import { useParams } from "react-router";


export const UserPage: React.FC = () => {
  const [userData, setUserData] = useState<IData[]>([])
  const [dataSearch, setData] = useState<string>('')
  const [userReposData, setUserReposData] = useState<IData[]>([])
  const [dataRepoSearch, setDataRepoSearch] = useState<string>('')

  const handleSearch = (param: string, secondparam: string) => {
    console.log(param, 'query')
    return fetch(`https://api.github.com/users/${param}/${secondparam}`);
  };

  const handleRepoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataRepoSearch(event.target.value)
    console.log(event.target.value)
  };
    
  useEffect(() => {
    (async () => {
      const param = encodeURIComponent(dataSearch)
      const secondparam = encodeURIComponent(dataRepoSearch)
      if(param) {
        handleSearch(param, secondparam)
          .then((response) => {
            console.log(param, "param")
            console.log(secondparam, "secondparam")
            return response.json();
          })
          .then(myJson => {
            console.log(myJson , "JSON");
            setUserData([...userData, myJson])
            return myJson;
          });
      }
    }) ();
  },[dataSearch, dataRepoSearch])

  const repoSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement
    const input = form.querySelector('#searchText') as HTMLInputElement
    setDataRepoSearch(input.value)
    input.value = "";
  }

  return (
    <div className="search-div">
        <div className="repos-container">
          <form className="form" onSubmit={event => repoSearch(event)}>
            <div className="search-input">
              <input type="text" id="searchText" onChange={handleRepoChange}/>  
            </div>
          </form>        
          <div className="data-container">
               <ReposComponent data={userReposData}/>
          </div>
        </div>
    </div>
  )
}



































































/*
{userReposData.length ?
              userReposData.map(data =>
                <ReposComponent key={data.id} data={data}/>
              ) : <ReposComponent data={userReposData}/>
            }
            {Object.keys(data).map((key,index) => {
            return(
                <div key={index}>
                    <h1>User's Repositories</h1>
                   <span>{key}:</span>
                   <span>{data[key]}</span>                         
                </div>
                )
            })
        }
import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import { IData } from '../Components/interfaces';
import "../pages/page.scss"
import { Octokit } from "@octokit/rest";
import UserComponent from "../Components/UserComponent/UserComponent";
import ReposComponent from "../Components/UserComponent/ReposComponent";

export const UserPage: React.FC = () => {
  const [userData, setUserData] = useState<IData[]>([])
  const [reposData, setReposData] = useState<IData[]>([])
  const [dataSearch, setDataSearch] = useState<string>('')
  const [repoSearch, setRepoSearch] = useState<string>('')


  const handleSearch = (param: string) => {
    return fetch(`https://api.github.com/users/${param}`)
  };

  const handleReposChange = (query: string) => {
    console.log(query, 'query')
    return fetch(`https://api.github.com/users/${query}/repos`)
  }

  const handleRepoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepoSearch(event.target.value)
    console.log(event.target.value)
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataSearch(event.target.value)
    console.log(event.target.value)
  };
     && <h1>Results for {dataSearch}...</h1>}
        </div> 
  useEffect(() => {
    (async () => {
      const param = encodeURIComponent(dataSearch)
      const query = encodeURIComponent(repoSearch)
      if(param) {
        handleSearch(param)
          .then((response) => {
            console.log(param, "param")
            return response.json();
          })
          .then(myJson => {
            console.log(myJson , "JSON");
            setUserData([...userData, myJson])
            return myJson;
          })
        handleReposChange(query)
          .then((response) => {
            console.log(query, "query")
            return response.json();
          })
          .then(qJson => {
            console.log(qJson , "queryJSON");
            setReposData([reposData, qJson])
            return qJson;
          })
      }
      console.log(userData, "uData")
    }) ()
  },[dataSearch, repoSearch])

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const input = form.querySelector('#searchText') as HTMLFormElement
    setDataSearch(input.value)
    setRepoSearch(input.value)
    input.value = "";
  }
  const searchRepos = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const input = form.querySelector('#searchText') as HTMLFormElement
    setRepoSearch(input.value)
    input.value = "";
  }

  return (
    <div className="search-div">
        <form className="form" onSubmit={event => search(event)}>
          <div className="search-input">
            <input type="text" id="searchText" onChange={handleChange}/>  
          </div>
          {dataSearch && <h1>Results for {dataSearch}...</h1>}
        </form>        
        <div className="data-container">
          {userData.length ?
            userData.map(data =>
              <UserComponent key={data.id} data={data}/>
            ) : <UserComponent data={userData}/> 
          } 
        </div>
        <form onSubmit={event => searchRepos(event)}>
        <input type="text" id="searchText" onChange={handleRepoChange}/>  
          {reposData.length ?
              reposData.map(data =>
                <ReposComponent key={data.id} data={data}/>
              ) : <ReposComponent data={reposData}/> 
            } 
        </form>
    </div>
  )
} 
*/
 