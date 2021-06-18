import logo from '../assets/logo.png'

function Banner() {
    var myHeadTitle = 'La jungle des plantes'

    return (<header class="myBanner">
        <img src={logo} alt='Logo de la jungle des plantes' className='myBanner-logo' />
        <h1 className='myBanner-title'>{myHeadTitle}</h1>
    </header>
    );
}

export default Banner