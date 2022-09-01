//Dropzone 사진 업로드랑 받기만 수행하도록 수정

import React, { useMemo, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Spinner from "../assets/loading.png";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  margin: "20px",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function Dropzone(props) {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    isDragActive,
  } = useDropzone({ accept: { "image/*": [] } });
  const [loading, setLoading] = useState(false);

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  const sendImgToServer = (e) => {
    axios.defaults.baseURL = "http://localhost:4000/";
    axios.defaults.withCredentials = true; // withCredentials ???? ????
    // ?????? ?��? ?????? ?????? ???? ??? ?????? ????????.
    // ???? ???? ?? ???? ?????? ???��? ???????? ????.
    // ???????? ????

    const formData = new FormData();
    const config = {
      header: {
        "content-type": "multipart/form-data",
      },
    };

    console.log("file received");
    console.log(e.target.files[0]);
    formData.append("file", e.target.files[0]);

    // var oReq = new XMLHttpRequest();
    // oReq.addEventListener("load", function() {
    //     if(oReq.status == 200){
    //         location.href = "/uploads";
    //     }
    // });
    // oReq.open("POST", "/reservation/api/reservations/"+reservationInfoId+"/comments",true);
    // oReq.send(formData);

    axios
      .post("http://localhost:4000/api/uploads", formData, config)
      .then((res) => {
        console.log("file sended");
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      }); //Axios Error: Network Error ???

    // ??????? ????
    var preview = new FileReader();
    // img id ??
    preview.onload = (e) => {
      document.getElementById("user_image").src = e.target.result;
    };
    // input id ??
    preview.readAsDataURL(e.target.files[0]);
  };

  const getResult = (e) => {
    //e.preventDefault();
    setLoading(true);
    if (loading == true) {
      var container = document.getElementsByClassName("container");
      container.style.display = "none";
      var loading = document.createElement("img");
      loading.src = { Spinner };
    }
    axios
      .get("http://localhost:4000/api/python_process")
      .then(function(response) {
        console.log(JSON.stringify(response.data));
        //alert( JSON.stringify(response.data) );
      })
      .catch(function(error) {
        console.log("????");
      });
    setLoading(false);
  };

  useEffect(() => {
    getResult();
  }, []);

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <section className="container">
      {/* <form encType="multipart/form-data" method="post" type='file'>
>>>>>>> Stashed changes
            <div {...getRootProps({style})}>
                <input type="file" onChange={saveImg} name="img" {...getInputProps()}/>
                { isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop some files here, or click to select files</p> }
            </div>
            <button type="submit" onClick={sendImgToServer}>?? ???? ?��????</button>
        </form> */}
      <form encType="multipart/form-data" method="post" type="file">
        <input
          accept="image/*"
          type="file"
          onChange={sendImgToServer}
          name="img"
          id="user_face_img"
        />
        <button type="button" onClick={getResult}>
          내 얼굴형 분석하기
        </button>
      </form>
      <div>
        <img id="user_image" src="#" alt="" style={{ maxWidth: "300px" }} />
      </div>
    </section>
  );
}

export default Dropzone;
