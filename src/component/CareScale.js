import React, {Component} from 'react'; 

class CareScale extends (React.Component) {
    render() {
            const scaleValue = this.props.scaleValue;
            const typeValue = this.props.typeValue === 'light' ? '☀️' : '💧';
            
            const range = [1, 2, 3, 4, 5]
        return (
                <div>
                    {range.map((rangeElem) =>
                        scaleValue >= rangeElem && <span key={rangeElem.toString()}> {typeValue}</span>
                    )}
                </div>
        )
    }
}
    
export default CareScale