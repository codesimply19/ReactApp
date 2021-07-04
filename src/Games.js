import React from "react";
import "./App.css";
import { dataJson } from "./dataJson";

export const Games = () => {

    const[searchTerm,setSearchTerm] = React.useState("");

    const[dataJsn,setdataJsn] = React.useState(dataJson);

    const[platform,setPlatform] = React.useState("");

    const[flag,setFlag]=React.useState(false);

    const getUnique = (arr,comp) => {
      const unique = arr.map(e=>e[comp]).map((e,i,final)=>final.indexOf(e)===i&&i).filter(e=>arr[e]).map(e=>arr[e]);

      return unique;

    }
    const filterDrop = dataJsn.filter((result)=>{
      return result.platform === platform
    })

    const handleChange = (event) => {
      setPlatform(event.target.value);
      setFlag(true);

    }
    const unique = getUnique(dataJsn,"platform");
  return (
    <>
    <div className="sefil">
     <div className = "search ">
        <input className="inputse" type="text"
         placeholder ="Search Title.. "
         onChange={(event)=>{
           setFlag(false)
            setSearchTerm(event.target.value);

         }}
         />
        </div>
        <div className="filter">
       <select  value= {platform}
       onChange={handleChange
      }
      className="sel"
      >
        {unique.map((val)=>(
          <option key = {val.title} value = {val.platform}>{val.platform}</option>

        ))}
        </select>
        </div>
        </div>
      <div className="games-list">

        {!flag ? (dataJsn.filter((val)=>{
          if(searchTerm == "")
          return val;
          else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
          }
        }).map((data, key) => {
          return (
            <div key={key} className="cardstyle">
              <div className="inner"><text className="txt">Title: </text>{data.title}</div>
              <div className="inner"><text className="txt">Platform: </text>{data.platform}</div>
              <div className="inner"><text className="txt">Score: </text>{data.score}</div>
              <div className="inner"><text className="txt">Genre: </text>{data.genre}</div>
              <div className="inner"><text className="txt">Editors choice: </text>{data.editors_choice}</div>
            </div>
          );
        })):filterDrop.map((data, key) => {
          return (
            <div key={key} className="cardstyle">
               <div className="inner"><text className="txt">Title: </text>{data.title}</div>
              <div className="inner"><text className="txt">Platform: </text>{data.platform}</div>
              <div className="inner"><text className="txt">Score: </text>{data.score}</div>
              <div className="inner"><text className="txt">Genre: </text>{data.genre}</div>
              <div className="inner"><text className="txt">Editors choice: </text>{data.editors_choice}</div>
            </div>
          );
        })

        }
      </div>

    </>
  );
};
