
const cargarPersonajes = async function(){
    //Llamar a la API
    let res = await axios.get("https://rickandmortyapi.com/api/character");
    let personajes = res.data.results;
    personajes.forEach(p=>{
        console.log(p.name);
    });

};


document.addEventListener("DOMContentLoaded", ()=>{
    //Todo lo que ponga aqui se va a ejecutar cuando se cargue la página
    cargarPersonajes();
});