const express = require('express');
const api = express()
const port = process.env.PORT || 5000;

api.use(express.json());

api.listen(port, () => console.log(`we live on http://localhost:${port}`));

api.post('/runningsum/', (req,res) => {
     
    
    if(req.body){    
        
        // copying the array from the API call
        runningSum = req.body.arr
        
        // algorithm for finding the running sum
        prev = runningSum[0]
        for (let i = 1; i < runningSum.length; i++){
            runningSum[i] += prev
            prev = runningSum[i]
        }

        // send back the running sum array as the API output
        res.send({
        arr: runningSum 
        })
    }
    else res.status(400).send("Invalid request. Make sure JSON object is structured properly")    
});


