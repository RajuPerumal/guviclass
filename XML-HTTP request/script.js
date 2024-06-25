//1. Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    
    var res = JSON.parse(request.response)
    console.log(res)
    
    //a. Get all the countries from Asia continent /region using Filter method
    var asia = res.filter((ele)=>ele.region == "Asia")
    console.log("Countries of Asia :",asia.map((e)=>e.name.common))

    //b. Get all the countries with a population of less than 2 lakhs using Filter method    
    var population = res.filter((ele)=>ele.population < 200000)
    console.log("Population Less Than 2 lakhs :", population.map((e)=>e.name.common))

    //c. Print the following details name, capital, flag, using forEach method    
    asia.forEach((e)=>{
        console.log("Name :",e.name.common)
        console.log("Capital :",e.capital)
        console.log("Flag :",e.flag)
    });
            
    //d. Print the total population of countries using reduce method   
    var tot_popu = res.reduce((acc,cv)=> acc+cv.population, 0)
    console.log("Total Population: ",tot_popu)
    
    //e. Print the country that uses US dollars as currency.
    var USDollars = res.filter((ele)=>ele.currencies && ele.currencies.USD)
    console.log("Countries Using US Dollars",USDollars.map((e)=>e.name.common))

}