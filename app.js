fetch('https://api.covid19api.com/summary').then((apiData)=>{
        //  console.log(apiData);
         return apiData.json();
}).then((actualData)=>{
    console.log(actualData.Countries[76]);
    const data = actualData.Countries[76];
    document.getElementById("totalCases").innerHTML = data.TotalConfirmed;
    document.getElementById('totalDeaths').innerHTML = data.NewDeaths;
    document.getElementById('totalRecovery').innerHTML = data.TotalRecovered;
    document.getElementById('date').innerHTML = data.Date;
}).catch((error)=>{
    console.log(error);
})