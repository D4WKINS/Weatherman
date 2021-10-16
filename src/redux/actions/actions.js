const CurrentWeather= "https://api.openweathermap.org/data/2.5/weather?appid=b294f8ea07c98ad5616a05a7fa4e6811&units=metric&q="
export const FETCH_CURRENT_WEATHER = 'FETCH_CURRENT_WEATHER';

export const fetchCurrentWeather = (query) => {

 return async (dispatch,getState) =>{

    const state = getState()

    if(query in state.currentWeather.search){
        dispatch({
            type: FETCH_CURRENT_WEATHER,
            payload:{[query]:state.currentWeather.search[query]}
        })
    }
    else{
        try {
            let resp = await fetch(`${CurrentWeather}${query}`)
            if (resp.ok) {
              let search = await resp.json()
              console.log(search)
              dispatch({
                type: "FETCH_SEARCH",
                payload: { [query]: search },
              })
            } else {
              console.log("error")
            }
          } catch (error) {
            console.log(error)
          }
    }

 }
}