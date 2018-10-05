## REST API
List of register routes:

Route | HTTP | Description | input | output
----- | ---- | ----------- | ----- | ------
/register | POST | sign up for new user | first name, last Name, email, password | message success

List of login routes:

Route | HTTP | Description | input | output
----- | ---- | ----------- | ------ | -----
/login | POST | sign in for registered user | name, email | message success
/login/google | GET | sign up for google user | email, password | token

list of restaurant routes

Route | HTTP | Description | input | output
----- | ---- | ----------- | ----- | ------
/restaurant/location/:q | GET | Get the location key id and type for searching the exact location. | place name(string) | location information(json)
/restaurant/searchHome/:q | GET | Get first twenty restaurants when home page is rendered | default place jakarta(string) | first twenty restaurants information in json
/restaurant/search/:id/:type/:sort/:order | GET | search restaurants based on searching and filtering input |  searching and filtering input(string) | first twenty restaurants information in json

list of place routes

Route | HTTP | Description | input | output
----- | ---- | ----------- | ----- | ------
/place/:place/:lat/:lng | GET | get data of nearby places | place name, device longitude, device latitude | data of all nearby places

list of weather routes
----
 API for get information Weather, from https://openweathermap.org/api

Route | HTTP | Description | input | output
----- | ---- | ----------- | ----- | ------
/weather | POST | get data | latitude, longitude | weather data for five years

* **WEATHER DATA:**
data.weather
{
   date: data date eng version ,
   temp: data temperature now,
   temp_min:data temperature minimum,
   temp_max:data temperature miximum,
   main:data weather,
   desc:data weather,
   windDeg:data wind degree,
   windSpeed:data wind speed,
   dateID: data date ind version
}

list of weather routes
----

Route | HTTP | Description | input | output
----- | ---- | ----------- | ----- | ------
/recipes/category | GET | get all categories of recipes |  | json
/recipes/listbycategory | POST | get list of all recipes based on category | name of category | json object
/recipes/detail | POST | get detail of recipe | meal.id | json object
/recipes/random | GET | get random recipe |  | json object