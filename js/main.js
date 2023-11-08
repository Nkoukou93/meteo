//creer une fonction pour connaitre les prévisions météorologiques
const api = '7cc597f71832ee69af93d0ef455ba864'; // creer une variable et lui donner comme valeur la clé de l'APIr
const meteo = document.getElementById('previsions');//Récupérer l'élément avec l'id 'previsions' et le stocker dans une variable

//Fonction pour rechercher des données météorologiques en fonction de la localisation saisie
function recherche() {
  const localisation = document.getElementById('localisation').value;//recuprer la localisation entrée avec l'élement ayant pour id "localisation"
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${localisation}&appid=${api}&lang=fr`;// creer une variable et lui attribuer les url de l'API et la localisation entrée

  fetch(apiUrl)//fonction fetch pour recuprer les données méteorologiques de l'API grace aux données stockées dans la variable 'const apiURL'
    .then(response => response.json())//la reponse se fait sous forme de fichier json
    .then(data => {
      AfficherMeteo(data);
    })//gérer les données météorologiques à afficher à l'utlisateur
    //gérer les erreurs de survenues durant l'excution de la fonction fetch
    .catch(error => {
      console.error('Error fetching weather data:', error);//afficher les erreurs en console
      meteo.innerHTML = 'Error fetching weather data.';
    });
}
//fonction pour afficher la méteo à l'utilisateur
function AfficherMeteo(data) {
  const temperature = Math.round(data.main.temp - 273.15); // extraire les données sur la temperarure depuis l'API et convertir le kelvin en celsius

   //creer des variables pour stocker les données météoroligiques extrait de la reponse  de l'API concernant la ville, la description de la meteo et l'icon 
  const description = data.weather[0].description;
  const ville = data.name;
  const cloudIcon = data.weather[0].icon;

   //Variables pour stocker l'url de l'icône météo à l'aide du code de l'icône cloud
  const iconUrl = `http://openweathermap.org/img/w/${cloudIcon}.png`;

  // //Mettre à jour les données météorologiques en creant un element du DOM 

  meteo.innerHTML = `
  <main class="main">
    <h2 id="ville">${ville}</h2>
    <img id="nuage" src="${iconUrl}" alt="Weather Icon">
    <p id="desc">Description:${description}</p>
    <p id="temperature">Temperature: ${temperature}°C</p>
    </main>
   
  `;
}
