// Async - Await

const getImagen = async() => {

    try {

        const apiKey = 'MqX6MD3mvz8sojGgSGs0H0p18Dar4oqk';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await respuesta.json();
    
        const { url } = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        
    } catch (error) {
        // manejo del error
        console.error(error);   
    }
}

getImagen();


