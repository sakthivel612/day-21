var disny_charcters = 'https://api.disneyapi.dev/characters' 

function disny_information(){
   return new Promise((resolve, reject) => {
      fetch(disny_charcters)
      .then(response => response.json())
      .then(info => resolve(info))
      .catch(error => reject(error));
   });
}
disny_information()
.then(info=>{
    console.log(info.data);
   for(let i of info.data){
      console.log(`disny_Films: ${i.films} disny_shortFilms: ${i.shortFilms} 
      disny_TvShow: ${i.tvShows} disny_videoGames: ${i.videoGames} disny_character_allies: ${i.allies}
      disny_character_enemies: ${i.enemies}disny_id: ${i._id} disny_character_name: ${i.name} disny_character_img: ${i.imageUrl} 
      disny_url: ${i.url} disny_parAttraction: ${i.parkAttractions}`);
   }
})
.catch(error =>{
   console.log(error);
})

