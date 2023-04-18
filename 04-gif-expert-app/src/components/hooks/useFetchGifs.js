import { useEffect, useState } from "react";
import { getGifs } from "../../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const[images, setImages] = useState([]);
    const[isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    }, [ ]);
    
    return{
        images, // esto igualmente se puede escribir images: images
        isLoading //igualmente se puede escribir isLoading: isLoading
    }

}


