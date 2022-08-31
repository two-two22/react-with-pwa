import React, {useMemo, useState, useEffect} from 'react';
import {useDropzone} from 'react-dropzone';
import axios from 'axios';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  margin: '20px',
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
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
    } = useDropzone({accept: {'image/*': []}});

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);
    
    const sendImgToServer = (e) => {
        axios.defaults.baseURL = "http://localhost:4000/";
        axios.defaults.withCredentials = true; // withCredentials 전역 설정
        // 사용자가 올린 정보를 확인해야 하므로 일단 서버로 전송합니다.
        // 제목 같은 건 폼을 제출한 이후에 달아주도록 합시다.
        // 폼데이터 구성

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

        axios.post("http://localhost:4000/uploads", formData, config).then((res) => {
            console.log("file sended");
            console.log(res);
        }).catch(error => {
            console.log(error);
        }); //Axios Error: Network Error 해결

        // 파일리더 생성 
        var preview = new FileReader();
         // img id 값 
        preview.onload = (e) => {document.getElementById("user_image").src = e.target.result;};
        // input id 값 
        preview.readAsDataURL(e.target.files[0]);
    };

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <section className="container">
        {/* <form encType="multipart/form-data" method="post" type='file'>
            <div {...getRootProps({style})}>
                <input type="file" onChange={saveImg} name="img" {...getInputProps()}/>
                { isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop some files here, or click to select files</p> }
            </div>
            <button type="submit" onClick={sendImgToServer}>내 얼굴형 분석하기</button>
        </form> */}
        <form encType="multipart/form-data" method="post" type='file'>
                <input accept="image/*" type="file" onChange={sendImgToServer} name="img" id="user_face_img"/>
                <button type="submit">내 얼굴형 분석하기</button>
        </form>
        <aside>
            <h4>Files</h4>
            <ul>{files}</ul>
            <img id="user_image" src="#" alt="" />
        </aside>
        </section>
    );
}

export default Dropzone;