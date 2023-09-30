import axios from "axios"

import express from "express"
import cors from "cors"


//9460adee-02ed-4fa7-93c4-a833f920002d

const app=express()
app.use(express.json())
app.use(cors({origin:true}))


app.post("/authenticate",async(req,res)=>{
    const {username}=req.body
    try {
        const r=await axios.put("https://api.chatengine.io/users/",
        {username:username,secret:username,first_name:username},
        {headers:{"private-key":"9460adee-02ed-4fa7-93c4-a833f920002d"}}
        )
        return res.status(r.status).json(r.data)
    } catch (e) {
        console.log(e)
    }
});
app.listen(3001)