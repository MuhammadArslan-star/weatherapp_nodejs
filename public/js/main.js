const cruDate = document.getElementById('date')
let tempra = document.getElementById('tempra');
let tempmin_max = document.getElementById('tempmin');
let loc = document.getElementById('loc');
let submit = document.getElementById('submit');
let images = document.getElementById('images');



let tempStatus = "{%tempicon%}";


// 


const weather = async() => {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=islamabad&units=metric&appid=0350b868f3aa60e345eda28da479fdc3`;





    try {
        let data = await fetch(url);
        let jsonData = await data.json();


        tempStatus = await jsonData.weather[0].main


        if (tempStatus == "Sunny" || tempStatus == "Clear") {
            images.innerHTML = "<img src=\"https://www.transparentpng.com/thumb/boy/MQZkNR-cartoon-charactersthe-boss-baby-pngu.png\" alt=\"Cartoon character, unhappy boy clipart hd download @transparentpng.com\">";
        } else {
            images.innerHTML = "<img src=\"https://www.transparentpng.com/thumb/boy/uBxy9n-cartoon-charactersthe-boss-baby-pngu.png\" alt=\"Cartoon character, unhappy boy clipart hd download @transparentpng.com\">";
        }


        tempra.innerHTML = await `${jsonData.main.temp}°C `;
        console.log(`Error is ====>> Min ${jsonData.main.temp_min}°C and Max ${jsonData.main.temp_max}°C`);
        loc.innerHTML = await `(${tempStatus}) <br> ${jsonData.name} , ${jsonData.sys.country}`;
        tempmin_max.innerHTML = await `Min ${jsonData.main.temp_min}°C | Max ${jsonData.main.temp_max}°C`;


    } catch (error) {
        console.log(`Error is ====>> ${error}`);



    }
}

const getDateTime = () => {

    // for days
    var weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fir", "Sat"];

    // for month
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let currentTime = new Date();
    const day = weekDays[currentTime.getDay()];

    var month1 = currentTime.getMonth();
    var date = currentTime.getDate();

    const month = months[month1];

    var hours = currentTime.getHours();
    var mint = currentTime.getMinutes();

    let period = "AM";

    if (hours > 11) {
        period = "PM";
        if (hours > 12) hours -= 12;
    }
    if (mint < 10) {
        mint = "0" + mint;

    }
    weather();
    console.log("month ==>> " + month1);
    return `${day} | ${date} ${month} ${currentTime.getFullYear()}| ${hours}:${mint} ${period}`;
}

cruDate.innerHTML = getDateTime();
let jsonData = "";



const searchButton = async() => {
    let searchText = await document.getElementById('searchValue').value.toUpperCase();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=metric&appid=0350b868f3aa60e345eda28da479fdc3`;





    try {
        let data = await fetch(url);
        let jsonData = await data.json();


        tempStatus = await jsonData.weather[0].main

        if (tempStatus == "Sunny" || tempStatus == "Clear") {
            images.innerHTML = "<img src=\"https://www.transparentpng.com/thumb/boy/MQZkNR-cartoon-charactersthe-boss-baby-pngu.png\" alt=\"Cartoon character, unhappy boy clipart hd download @transparentpng.com\">";
        } else {
            images.innerHTML = "<img src=\"https://www.transparentpng.com/thumb/boy/uBxy9n-cartoon-charactersthe-boss-baby-pngu.png\" alt=\"Cartoon character, unhappy boy clipart hd download @transparentpng.com\">";
        }


        tempra.innerHTML = await `${jsonData.main.temp}°C`;
        console.log(`Error is ====>> Min ${jsonData.main.temp_min}°C and Max ${jsonData.main.temp_max}°C`);
        loc.innerHTML = await `${jsonData.name} , ${jsonData.sys.country}`;
        tempmin_max.innerHTML = await `Min ${jsonData.main.temp_min}°C | Max ${jsonData.main.temp_max}°C`;


        console.log(`jsonData is ====>> ${jsonData}`);

    } catch (error) {
        console.log(`Error is ====>> ${error}`);

    }
}



submit.addEventListener("click", searchButton);