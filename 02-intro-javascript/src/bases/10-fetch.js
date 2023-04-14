// Fetch API: https://developer.mozilla.org/es/docs/Web/API/Fetch_API

const apiKey = 'MqX6MD3mvz8sojGgSGs0H0p18Dar4oqk';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

//las promesas pueden encadenarse
peticion
    .then( resp => resp.json())
    .then( ({data}) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
        //console.log(data.images.original.url)
    })
    .catch(console.warn);