const express = require('express');
const multer = require('multer');
var cors = require('cors');
const fs = require('fs');
const path = require('path'); 

const app = express();
var router = express.Router(); //웹 서비스 규모가 크지 않으므로 라우팅 파일을 따로 만들 필요는 없다.
const port = 4000;
const { createProxyMiddleware } = require('http-proxy-middleware');
const { nextTick } = require('process');

// app.use('/api/', createProxyMiddleware({ 
//     target: 'http://localhost:3000', //original url
//     changeOrigin: true, 
//     //secure: false,
//     onProxyRes: function (proxyRes, req, res) {
//        proxyRes.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000';
//        proxyRes.headers['Access-Control-Allow-Credentials'] = 'true';
//     }
// }));

// https://stackoverflow.com/questions/16046364/origin-http-localhost-is-not-allowed-by-access-control-allow-origin
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:3000");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
};
app.use(allowCrossDomain);
    
fs.readdir('src/uploads', (error) => {
    // uploads 폴더 없으면 생성
    if (error) {
        fs.mkdirSync('src/uploads');
    }
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(__dirname)
    cb(null, __dirname+"/src/uploads") //생성해놓은 폴더 이름. uploads폴
  },
  filename: function (req, file, cb) {
    //filename = new Date().toISOString() + file.originalname;
    //cb(null, filename)
    cb(null, "faceimage.jpg")
  }
})
const upload = multer({ storage: storage });


// const fileStorageEngine = multer.diskStorage({
//     destination: (req, file, cb) => { //cb:callback
//         cb(null, './uploads'); //사진 저장할 로컬 파일 위치
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '--' + file.originalname);
//         // const ext = path.extname(file.originalname);
//         // cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
//     },
// })
// const upload = multer({storage: fileStorageEngine});

// define the about route
app.get('/api/python_process', function(req, res) {
  var PythonShell = require('python-shell');
  // var filename = req.query.filename;
  var options = {
    mode: 'text',
    pythonPath: '',
    pythonOptions: ['-u'],
    scriptPath: '',
    args: ['value1', 'value2', 'value3']
  };
  PythonShell.PythonShell.run('python/test.py', options, function (err, results) {
    if (err) throw err;
    console.log( results );
    res.send({result: results});
  });
});
// define the about route
// app.get('/api/uploads', function(req, res) {
//   res.send("single file upload success");
// });
// define the about route
app.post("/api/uploads", upload.single("file"), (req, res) => {
    console.log(req.file);
    //res.render('StyledDropzone', { file:req.file, files:null }); //이거 쓰라고 express에는 나와있던데... 쓰니까 문제있다. 안 쓰니까 해결됨. 뭐가 문제지?
    res.send("single file upload success");
});

//app.use(cors());

// let corsOptions = {
//     origin: 'http://localhost:3000',
//     credentials: true
// }
// app.use(cors(corsOptions));
// app.use(express.static(__dirname));
// app.use('/', (req, res) => {
//   //res.sendFile(path.join(__dirname+ '/src/StyledDropzone.js'));
//   console.log("입장");
//   res.send("얼굴 분석 결과 출력");
// });

app.listen(port, () =>{
    console.log(`${port}번 포트 서버 실행`);
})