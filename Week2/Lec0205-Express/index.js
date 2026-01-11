const express = require('express');
const app = express();
const PORT = 3000;

// in memory data (not used in projects, we use DBs for that)
const users = [{
    name: "applexity", 
    kidneys: [{
        healthy: false
    }]
}];

app.get('/', (req, res) => {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
