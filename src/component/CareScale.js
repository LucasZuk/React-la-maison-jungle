import React, {Component} from 'react'; 

class CareScale extends (React.Component) {

    constructor(props)  {
        super(props);
        this.state = {
            typeCare : this.props.typeValue === 'light' ? 'de lumière' : 'd\'eau',
            scaleCare : this.props.scaleValue === 1 ? 'peu' : this.props.scaleValue === 2 ? 'moyennement' : 'beaucoup'
        };
    }

    alertCare () {
        alert(`Cette plante requiert ${this.state.scaleCare} ${this.state.typeCare}.`);
    }

    render() {
            const scaleValue = this.props.scaleValue;
            const typeValue = this.props.typeValue === 'light' ? '☀️' : '💧';
            const range = [1, 2, 3, 4, 5]
        return (
                <div onClick={() => this.alertCare()}>
                    {range.map((rangeElem) =>
                        scaleValue >= rangeElem && <span key={rangeElem.toString()}> {typeValue}</span>
                    )}
                </div>
        )
    }
}
    
export default CareScale