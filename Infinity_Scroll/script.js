//unsplash API
const count = 10;
const apikey = 'G0vgWH1AbnLlRHZKC5ukm2qk3yJWzgolghDEWywyo4Q';
const apiurl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Get photos  from Unsplash API

async function getPhotos() {
    try {
      const response = await  fetch (apiUrl);
      const data = await response.json();
      console.log(data);
    } catch (error) {
        //catch error here 
    }
}

//On load 
getPhotos();