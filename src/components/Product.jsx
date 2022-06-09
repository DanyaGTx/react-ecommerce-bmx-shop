import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setCurrentBike } from '../redux/bikes/reducer';
import AddAndDeleteToCartButton from './AddAndDeleteToCartButton';
const Product = ({bike}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Открытие товара
    const openProductViewBike = (event) =>{
    event.stopPropagation();
    dispatch(setCurrentBike(bike))
    navigate(`/bikes/${bike.id}`); 
  }
    return (
        <div className='product-card'>
            <div>
            <img onClick={openProductViewBike} className='product-bmx-image' src={bike.img} alt="" />
            <h2>{bike.name}</h2>
            <p>{bike.description}</p>
            </div>
            <div style={{marginTop:'15px'}}>
                <h3 className='product-card-price'>{bike.price}$</h3>
                <AddAndDeleteToCartButton bike={bike}/>
            </div>
            
           
        </div>
    )
}

export default Product