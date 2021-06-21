import React, {Component} from 'react';

class PlantName extends (React.Component) {
    render() {
        const plant = this.props.plant;

        return (
            <div className="lmj-plant-list-item-name">
                {plant.name} 
                {plant.isBestSale && <span>🔥</span>} 
            </div>
        )
    }
}

export default PlantName ;