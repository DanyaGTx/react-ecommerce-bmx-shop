import React, { useContext, useState } from 'react'
import { AuthContext } from '../context';
import cabinet from '../img/cabinet.png'
import CabinetPopUp from './CabinetPopUp';

const Cabinet = () => {
  // const [isOpenCabinet,setIsOpenCabinet] = useState(false);
  const {isOpenCabinet,setIsOpenCabinet}= useContext(AuthContext);
  // Закрытие карта если открыли мой аккаунт попап
  const {setOpenCart}= useContext(AuthContext);
  const openAndCloseCabinet = (event) => {
    setIsOpenCabinet(!isOpenCabinet);
    setOpenCart(false);
  
}
  return (
    <div>
      <div onClick={openAndCloseCabinet} className={`navigation-item ${isOpenCabinet   && 'activeCart'}`}><img className='cabinet-ico' src={cabinet} alt="" /></div>
      <div className='openCart'>
        {isOpenCabinet && (<div className='cabinetPopUp'><span onClick={() => setIsOpenCabinet(false)} className='shopCart-close'>X</span><CabinetPopUp /></div>)}
      </div>
    </div>

  )
}


export default Cabinet;