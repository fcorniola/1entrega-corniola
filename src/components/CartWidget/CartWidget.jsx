import './CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <ul className="navbar-nav">
                <li className="nav-link">
                    <button className="btn btn-danger">Carrito</button>
                </li>
                <li className='cant d-flex'>
                    <p>1</p>
                </li>
            </ul>
        </div>
    );
}

export default CartWidget;
