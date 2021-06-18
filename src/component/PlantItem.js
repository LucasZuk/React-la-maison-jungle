import React, {Component} from 'react';
import CareScale from './CareScale';
import PlantName from './PlantName';


class PlantItem extends (React.Component) {

    render() {

        const plant = this.props.plant;
        return (
            <li className='lmj-plant-item' onClick={()=> sparkles(plant.name)}>
                <img className='lmj-plant-item-cover' src={plant.cover} />
                <PlantName plant={plant}/>
                <div>
                    <CareScale typeValue='light' scaleValue={plant.light} />
                    <CareScale typeValue='water' scaleValue={plant.water} />
                </div>
            </li>
        )
    }   
}

function sparkles(name) {
    
    alert(`Tu veux acheter de la bonne ${name} ? Vas-y fais toi plaiz !`);
}

export default PlantItem;
