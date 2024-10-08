// variaveis

const pokemonName= document.querySelector('.pokemon__name')
const pokemonNumber = document.querySelector('.pokemon__number')
const pokemonImage = document.querySelector('.pokemon__image')
const form = document.querySelector('.form')
const buscarPokemon= document.querySelector('.input__search')
const buttonNext= document.querySelector('.btn_next')
const buttonPrev= document.querySelector('.btn_prev')
let search =  1;



// Funções 
 async function  fetchPokemon(pokemon){
    const responsi = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(responsi.status==200){

      const data = await responsi.json();

     return data;

    }
   

}

const renderPokemon = async (pokemon)=>{

    pokemonName.innerHTML='loading....';
    pokemonNumber.innerHTML='x';

    const data = await fetchPokemon(pokemon);

    if(data){

    pokemonName.innerHTML= data.name;
    pokemonNumber.innerHTML=data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
     search=data.id   

    buscarPokemon.value=''
    }else{
        pokemonName.innerHTML='Not Faund :(';
        pokemonNumber.innerHTML='0';
        pokemonImage.src ='truescorn-dance.gif'


    }
    

}

// botôes
 form.addEventListener('submit',  async (event)=>{
            event.preventDefault();
            renderPokemon(buscarPokemon.value.toLowerCase())  
            

            

 })

 buttonNext.addEventListener('click',()=>{
    search +=1
    renderPokemon(search)

 })
 buttonPrev.addEventListener('click',()=>{

    if(search>1){
      search -= 1
      renderPokemon(search)
    }
  



 })



// inicializar
renderPokemon(search);