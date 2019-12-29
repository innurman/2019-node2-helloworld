const express = require('./node_modules/express/');
const app = express();
const host = '127.0.0.1';
const port = 3000;
// POST thru express-4.0's body-parser
const bodyParser = require("body-parser"); // Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 지정한 public 폴더를 client가 접근 가능한 정적 폴더로 만든다
app.use("/", express.static("./public"));

app.listen(port, () => {
    console.log(`http://${host}:${port}`);
});


///////////////////////////////////////////////////////////////////
// GET
///////////////////////////////////////////////////////////////////

// app.get("/", (req, res) => {
//     res.send("<h1>Hello World</h1>");
// });

app.get("/hello", (req, res) => {
    res.send("<h1>Hello World2~~~~~~----------~~~~~~</h1>");
});

// http://127.0.0.1:3000/home?name=booldook
app.get("/home", (req, res) => {
    let name = req.query.name;
    res.send(`<h1>${name}님 반갑습니다. Home 입니다</h1>`);
});

app.get("/api/user", (req, res) => {
    let users = {
        user: [
            {id: 1, name: "홍길동1", age: 25}, 
            {id: 2, name: "홍길동2", age: 35}, 
            {id: 3, name: "홍길동3", age: 25}, 
        ],
        cnt: 3
    };
    res.json(users);
});


///////////////////////////////////////////////////////////////////
// GET params
///////////////////////////////////////////////////////////////////
app.get("/blog/:category/:id", (req, res) => {
    let category = req.params.category;
    let id = req.params.id;
    res.send(`category: ${category}, id: ${id}`);
});


app.get("/home2", (req, res) => {
    //res.sendFile("./index.html");
    //res.sendFile("./public/index2.html");
});


///////////////////////////////////////////////////////////////////
// POST
///////////////////////////////////////////////////////////////////
app.post("/join", (req, res) => {
    // GET
    //   + req.query
    //   + req.params

    // POST
    //   + http://127.0.0.1:3000/form.html
    let userid = req.body.userid;
    let userpw = req.body.userpw;
    res.send(`userid: ${userid} / userpw: ${userpw}`);
});