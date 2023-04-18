import { useState, useEffect } from 'react';
import { useFetchGifs } from './hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs( category );

    // console.log({isLoading});

    // Todo este codigo sera resumido en un custom hook llamado useFetchGifs
    // const[images, setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // useEffect( () => {
    //     getImages();
    // }, [ ])


    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h2>Cargando...</h2> ) //if isLoading es true, imprime el h2
            }

            <div className="card-grid">
                {
                images.map( (image) => (
                        <GifItem 
                            key= { image.id }
                            {...image} //esto esparce todas las properties de image
                        />
                    ))
                }
            </div> 

        </>
    )
}



