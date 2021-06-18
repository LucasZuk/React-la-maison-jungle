import React from 'react'

function Cart() {
    var magnoliaPrice = 8
    var lilisPrice = 10
    var flowerPrice = 50
    
    return(<div className='myCart'>
        <h2 className='myCart-title'>Votre panier</h2>
        <ul className='myCart-list'>
            <li className='myCart-list-item'>Magnolia : {magnoliaPrice} €</li>
            <li className='myCart-list-item'>Lys : {lilisPrice} €</li>
            <li className='myCart-list-item'>Bouquet de fleurs : {flowerPrice} €</li>
        </ul>
        <p className='myCart-total'>Votre panier total est de {magnoliaPrice + lilisPrice + flowerPrice} €</p>
    </div>);
}

export default Cart