import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import loading_gif from "../assets/spinner.gif";
import user_img from "../uploads/faceimage.jpg";
const localhost = "http://localhost:4000/";

function FSResult() {
  const [init, setinit] = useState(false);
  var loading = true, shape = null, confidence = null;

  const getResult = (e) => {
    var result = null;
    axios.get(localhost + "api/python_process").then(function(response){
      result = response.data;
      console.log(JSON.stringify(response.data));
    }).catch(function(error){
      console.log("실패");
    }).finally(function(){
      loading = false;
      document.getElementById("title").textContent = "분석 결과";
      document.getElementById("result").src = user_img;
      document.getElementById("result").style.maxWidth = '250px';
      shape = result[0];
      confidence = parseInt(result[1]);
      //parseFloat(result.result[1]).toFixed(2);
      document.getElementById("paragraph").textContent = {shape}+"상에 "+{confidence}+"% 일치!";
      setinit(true);
    })
  };

  if(init==false) getResult();

  useEffect(() => {
    setinit();
  }, [])

  return (
    <div>
      <p id='title'>얼굴 분석중...</p>
      <img id="result" src={loading_gif} alt=""/>
      <p id="paragraph"></p>
    </div>
  );
}

export default FSResult;