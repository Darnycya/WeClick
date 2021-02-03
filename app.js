




const getMaleData = () => {
  const api = "https://randomuser.me/api/?gender=male"

  axios.get(api)
    .then((res) => {
      //pulling the name key from the API
      const response = res.data.results[0].name
      //pushing the name into h4
      const name = document.querySelector('h3')
      name.innerHTML = `Name: ${response.first} ${response.last}`
        //pushing the image
      const maleImg = res.data.results[0].picture.large
      const malePic = document.querySelector('#lover')
      malePic.setAttribute('src', maleImg)
  //pushing city and age
      const maleAge = res.data.results[0].dob.age
      const maleCity = res.data.results[0].location.city
      const maleLoverInfo = document.querySelector('p1')
      maleLoverInfo.innerHTML = `${maleAge}, ${maleCity}`
    })
}
  



const getFemaleData = () => {
  const api = "https://randomuser.me/api/?gender=female"

  axios.get(api)
    .then((res) => {
      //pulling the name key from the API
      const response = res.data.results[0].name
      // pushing the name into h4
          const name = document.querySelector('h3')
          name.innerHTML = `Name: ${response.first} ${response.last}`
    //pushing the image
      const img = res.data.results[0].picture.large
      const femalePic = document.querySelector('#lover')
      femalePic.setAttribute('src', img)
    //pushing city and age
      const age = res.data.results[0].dob.age
      const city = res.data.results[0].location.city
      const loverInfo = document.querySelector('p1')
      loverInfo.innerHTML = `${age}, ${city}`
    })
      }
    

//make the male button
const maleButton = document.querySelector('#male')
maleButton.addEventListener('click', getMaleData)

//make the female button
const femaleButton = document.querySelector('#female')
femaleButton.addEventListener('click', getFemaleData);


