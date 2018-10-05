require('dotenv').config()
const axios = require('axios')

class WeatherController {
  
  static getWeather (req, res) {
    console.log(req.body.lon)
    console.log(req.body.lat)
    console.log(process.env.APIKEY_WEATHER)
     let lon= req.body.lon
     let lat= req.body.lat
     axios({
         method:'GET',
         url:`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${process.env.APIKEY_WEATHER}`
     })
     .then((result) => {
        //console.log(result)

        let arrObj=[];
        let d=result.data.list[0].dt_txt;
        let objF={
            date:`${new Date(d).getFullYear()}-${new Date(d).getMonth()+1}-${new Date(d).getDate()}`,
            temp:(result.data.list[0].main.temp-273.15).toFixed(1),
            temp_min:(result.data.list[0].main.temp_min-273.15).toFixed(1),
            temp_max:(result.data.list[0].main.temp_max-273.15).toFixed(1),
            main:result.data.list[0].weather[0].main,
            desc:result.data.list[0].weather[0].description,
            windDeg:result.data.list[0].wind.deg,
            windSpeed:result.data.list[0].wind.speed,
            dateID:`${new Date(d).getDate()}-${new Date(d).getMonth()+1}-${new Date(d).getFullYear()}`
        };
        arrObj.push(objF);
        
        console.log(result.data.list.length)
        for (let i = 1; i < result.data.list.length; i++) {
            let d=result.data.list[i].dt_txt;            
            let k=arrObj.length-1
            let obj={}
            if(new Date(d).getFullYear()!==new Date(arrObj[k].date).getFullYear() || new Date(d).getMonth()!==new Date(arrObj[k].date).getMonth() ||new Date(d).getDate()!==new Date(arrObj[k].date).getDate() )
            {
                obj.date=`${new Date(d).getFullYear()}-${new Date(d).getMonth()+1}-${new Date(d).getDate()}`;
                obj.temp=(result.data.list[i].main.temp-273.15).toFixed(1)
                obj.temp_min=(result.data.list[i].main.temp_min-273.15).toFixed(1)
                obj.temp_max=(result.data.list[i].main.temp_max-273.15 ).toFixed(1)
                obj.main=result.data.list[i].weather[0].main
                obj.desc=result.data.list[i].weather[0].description
                obj.windDeg=result.data.list[i].wind.deg
                obj.windSpeed=result.data.list[i].wind.speed
                obj.dateID=`${new Date(d).getDate()}-${new Date(d).getMonth()+1}-${new Date(d).getFullYear()}`
                arrObj.push(obj);
            }
            
            
        }
        
        console.table(arrObj)

        res.status(200).json({weather:arrObj})
     })
     .catch((err) => {
        res.status(500).json(err.message)
     });
    
  }



}

module.exports = WeatherController