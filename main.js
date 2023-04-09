const pokemon = async () =>{
let data = await fetch('https://pokeapi.co/api/v2/pokemon/chimchar')
let response = await data.json()
let result = response.sprites.front_default
document.getElementById('img').innerHTML = `<img id="img" src="${result}" alt="">`

}

pokemon()

