import React, {Component} from 'react';

class PlantName extends (React.Component) {
    render() {
        const plant = this.props.plant;

        return (
            <div className="lmj-plant-list-item-name">
                {plant.name} 
                {plant.isBestSale && <span>🔥</span>} 
                {plant.isSpecialOffer && <div className="lmj-sales">En solde</div>}
            </div>
        )
    }
}

export default PlantName ;