import React from 'react';
import plantList from '../datas/plantList';
import PlantItem from './PlantItem';

function ShoppingList() {

    const categories = plantList.reduce(
        ((accumulateur, plantCate) => 
            (accumulateur.includes(plantCate.category) ? accumulateur : accumulateur.concat(plantCate.category))), [] 
    )

    return (
        
    <main>
        <h3> Nos categories de plantes</h3>
        <ul className='lmj-category-list'>
            { categories.map((plant) =>
            (<li className='lmj-category-item' key={plant}>{plant}</li>))
        }
        </ul>

        <h3> Toutes nos plantes</h3>
        <ul className='lmj-plant-list'>
            { plantList.map((plant) =>
                < PlantItem key={plant.id} plant={plant} />
            )}
        </ul>
    </main>
    )
}

export default ShoppingList
