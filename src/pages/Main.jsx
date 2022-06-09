import React, { useContext, useMemo, useState } from 'react'
import Product from '../components/Product'
import Select from '../components/select/Select'
import { bikes } from "../bikes";
import MySearch from '../components/Search/MySearch';

const Main = () => {
  
  const [bikesArray, setbikesArray] = useState(bikes);

  const [selectedSort, setSelectedSort] = useState('');

  const [searchQuery,setSearchQuery] = useState('');

  
  const sortedBikes = useMemo(() =>{ 
    return bikesArray;
  },[bikesArray]);

  const sortedBikesAndSearchedBikes = useMemo(() =>{
    return sortedBikes.filter(bike => bike.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))
  },[searchQuery,sortedBikes]) //Вызываем фильтрацию, когда изменился поиск или изменился массив

  const sortBikes = (sort) =>{
    setSelectedSort(sort)
    if(sort === 'name'){
      setbikesArray([...bikesArray].sort((a,b) => a[sort].localeCompare(b[sort]))); // Сортировка в алфавитном порядке
    }
    else if(sort === 'price-up'){
      setbikesArray([...bikesArray].sort((a,b) => a['price'] - b['price'] )); // Сортировка цен по убыванию
    }
    else if(sort === 'price-down'){
      setbikesArray([...bikesArray].sort((a,b) => b['price'] - a['price'] )); // Сортировка цен по возрастанию
    }
  }

  return (
    <main className='main'>
        <div className='banner'>
          <h1 className='banner-text'>Enjoy and buy right now</h1>
        </div>
        <MySearch value={searchQuery} onChange={(event) =>  setSearchQuery(event.target.value)}/>
        <hr style={{margin : "15px 0px 15px"}}/>
        <Select value={selectedSort} onChange={sortBikes} defaultValue="Сортировка" option={[
          {value: 'name', name: "По названию"},
          {value: 'price-up', name: "Цена по возрастанию"},
          {value: 'price-down', name: "Цена по убыванию"},
        ]}/> 
        {sortedBikesAndSearchedBikes.length ? 
        <div className='bikes__section'>
          {sortedBikesAndSearchedBikes.map(bike => <Product key={bike.id} bike={bike}/>)} 
        </div>
        : <h1 style={{textAlign:'center'}}>Nothing to find</h1>  
        }
    </main>   
  )
}
export default Main