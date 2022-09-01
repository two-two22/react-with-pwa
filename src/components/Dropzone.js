import React, {useMemo, useState, useEffect, useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import axios from 'axios';
import USER from '../assets/user.png';
import { useNavigate } from 'react-router-dom';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 22,
  borderColor: '#FFFFFF',
  borderStyle: 'dashed',
  backgroundColor: '#2679C2',
  color: '#FFFFFF',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  margin: '5px',
  maxWidth: '350px',
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
const localhost = "http://localhost:4000/";


function Dropzone() {
    const [imgTo, setimgTo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [shape, setShape] = useState(null);
    const [confidence, setConfidence] = useState(null);
    const navigate = useNavigate();

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.map(file => {
            axios.defaults.baseURL = localhost;
            axios.defaults.withCredentials = true; // withCredentials 전역 설정
            // 사용자가 올린 정보를 확인해야 하므로 일단 서버로 전송합니다.
            // 폼데이터 구성
            const formData = new FormData();
            const config = {
                header: {
                    "content-type": "multipart/form-data",
                },
            };
            // 파일을 로컬 서버에 전송
            formData.append("file", file);
            axios.post(localhost + "api/uploads", formData, config).then((res) => {
                console.log("file sended");
                console.log(res);
            }).catch(error => {
                console.log(error);
            })
            // 파일리더 생성 
            var preview = new FileReader();
            // img id 값 
            preview.onload = () => {document.getElementById("user_image").src = file;};
            // input id 값 
            preview.readAsDataURL(file);
        });
        setimgTo(window.location.pathname); //현재 경로가 picture | ai | self인지 구분해서 경우에 따라 각자 다른 경로로 이동
        
    }, [])

    const {
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject,
        isDragActive,
    } = useDropzone({
        onDrop: onDrop,
        maxFiles:1,
        accept: {
            'image/*': ['.jpeg', '.png', 'jpg', '.JPEG', '.PNG', 'JPG']
        },
        parallelUploads: 1,
        uploadMultiple: false,
    });


    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {}),
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);

    useEffect(() => {
        setLoading();
        setShape();
        setConfidence();
    }, [])

    return (
        <section className="container">
        <p id='title'>사진 업로드</p>
        <p style={{
            backgroundColor: '#2679C2',
            padding: '1px',
            borderRadius: '25px',
            maxWidth: '350px',
            justifyContent: 'center',
            display: 'flex',
            margin: 'auto'
            }}>
            <p {...getRootProps({style})} id="input_image">
                <input {...getInputProps()}/>
                <img src={USER} style={{width:'128px', height:'128px'}}/>
                {isDragActive ? <p>여기에 이미지를 넣어주세요!</p> : <p>클릭하여 사진을 업로드하세요!</p>}
            </p>
        </p>
        <p id='warning'>* 사진은 AI 분석에만 사용되며 절대 저장되지 않습니다. <br/> * 화장을 한 상태에서는 결과가 정확하지 않을 수 있습니다.</p>
        {imgTo == '/2-1-1_picture' ? 
            navigate('/2-2_result')
         : imgTo == '/3-1-1_ai' ? '' : ''}
        </section>
    );
}

export default Dropzone;