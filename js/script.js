
//https://www.theaudiodb.com/api/v1/json/1/search.php?s=coldplay
//https://api.jikan.moe/v3/search/anime?q=dragon%20ball


//const URL = 'https://www.theaudiodb.com/api/v1/json/1/';//musica
const URL = 'https://api.jikan.moe/v3/search/anime';


const button = document.getElementById("sendButton");
const main = document.getElementById("dato");
const inputElement = document.getElementById("search");
 
button.addEventListener("click", ()=>{
  searchAnime(inputElement.value);
  //console.log(inputElement.value);
});


function searchAnime(word){
    //const fetchPromise = fetch(`${URL}search.php?s=${wordToSearch}`);
    const fetchPromise = fetch(`${URL}?q=${word}`);
    fetchPromise.then(response =>{
        console.log('result', response);
        return response.json();
    }).then(result => {

      mostrar(result);
    }).catch(error =>{
      console.log('algo salio mal', error);
    });
}

function mostrar(result){
    console.log(result);
    const animes = result.results.map(
      anime =>
`
  <article class="shadow rounded border col-md-4 col-lg-3 col-sm-6 mx-auto my-5">
    <div class="mx-auto  text-center">    
      <div class="cont-img">
            <img class="" src="${anime.image_url}" alt="">
      </div>
    
      <div class="border mx-auto py-2">
        <h2 class="text-center h3">${anime.title}</h2>
        <p class="">${anime.synopsis}</p>
        <span class="star">${anime.score}</span>
      </div>
      <a href="${anime.url}" class="enlace"></a>
    </div>
  </article>`
    )
    dato.innerHTML = animes;
  
}
 