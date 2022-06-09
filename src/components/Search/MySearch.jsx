import React from 'react'
import search from '../../img/search.png'
const MySearch = ({value,onChange}) => {
  return (
    <input value={value} onChange={onChange} placeholder='Search' className='mySearch' type="text" />
  )
}

export default MySearch