import {useState} from 'react';
import {AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch']);
    //cuando queremos cambiar las categories, debemos llamas a setCategories
    
    
    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory) ) return;

        // categories.push(newCategory);
        setCategories([ newCategory, ...categories ]); //una manera de agregar una nueva categoria
        // setCategories( cat => [ ...cat, 'Yu-gi-oh' ]);
    
    }

    return(
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory ={ (value) => onAddCategory(value) }
            />

            {/* Listado de Gif */}
            { 
                categories.map( (category) => (
                    <GifGrid key={ category } 
                        category={ category }/>
                )) 
            }

                {/* Gif Item */}

        
        </>
    )

}