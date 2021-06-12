const express=require('express')
const limitter=require('express-rate-limit')
const app=express()


app.use(limitter({
    windowMs:5000,
    max:2,
    message:"Too Many Request Please Try Again After Sometime"
}))

app.get('/',(req,res)=>{
    return res.send("Protected Application from Brute Force Attack");
})

app.listen(8000,()=>{
    console.log("Sarver is running on port 8000")
})
