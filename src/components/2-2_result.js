import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
const localhost = "http://localhost:4000/";

function FSResult() {
  const [loading, setLoading] = useState(false);
  const [shape, setShape] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const getResult = (e) => {
        //e.preventDefault();
        setLoading(true);
        //document.getElementById("input_image").style = 'display:none';
        var user = document.getElementById("user_image");
        var title = document.getElementById("title");
        var result = null;
        setShape(null);
        setConfidence(null);
        title.textContent = "얼굴 분석중..."
        document.getElementById("loading_gif").src = require("../assets/spinner.gif");

        axios.get(localhost + "api/python_process").then(function(response){
            //console.log(JSON.stringify(response.data));
            result = response.data;
            console.log(JSON.stringify(response.data));
            //alert( JSON.stringify(response.data) );
        }).catch(function(error){
            console.log("실패");
        }).finally(function(){
            setLoading(false);
            document.getElementById("loading_gif").src = "#";
            user.style = 'display:initial';
            user.style.maxWidth = '250px';
            document.getElementById("title").textContent = "분석 결과";
            setShape(result.result[0]);
            setConfidence(parseInt(result.result[1]));
            //document.getElementById("result").textContent = result.result[0] + '\n' + parseFloat(result.result[1]).toFixed(2);
        })
        useEffect(() => {
        setLoading();
        setShape();
        setConfidence();
    }, [])
    };
  return (
    <div>
      <p id='title'>사진 업로드</p>
        <p>
            <img id="user_image" src="#" alt="" style={{maxWidth:'250px'}}/>
            <img id="loading_gif" src="" alt=""/>
       </p>
      {shape}상에 {confidence}% 일치!
      <p>
            {shape!=null ? '' : ''}
        </p>
        {getResult}
    </div>
  );
}

export default FSResult;