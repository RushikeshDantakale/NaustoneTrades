const express = require("express");
const app = express();
const port = 4000; 


const dummyData = [{
"no":1 ,
"account_no":23,
"country":"US",
"legacy_no":12,
"legacy_division":433

},{
    "no":2 ,
    "account_no":24,
    "country":"CA",
    "legacy_no":13,
    "legacy_division":456
}]

app.get("/data", (req,res)=>{
res.send(dummyData);
})


app.listen(port,()=>{
    console.log(`server is running on port ${port} `);
})