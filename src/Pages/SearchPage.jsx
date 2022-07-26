import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Components/Navbar'
import SProductCard from '../Components/SProductCard';
import { getAllData } from '../Redux/AllDataProvider/action';
import styles from '../Styled/searchPage.module.css';
import styled  from 'styled-components'
import ProductCard from './ProductCard';
const SearchPage = () => {
    const productsData = useSelector((state)=> state.allDataReducer.data);
   
    const [filterdProduct,setFilteredProduct] = useState([]);
  // console.log(productsData);
  
    const [searchText,setSearchText] = useState('');
    const dispatch = useDispatch()
    const handleChange = (e)=>{
      setSearchText(e.target.value);
      setFilteredProduct([]) 
      const filterData = searchText.length>0 ?
       productsData.filter((item) =>
        item.title?.toLowerCase().includes(e.target.value.toLowerCase())) : [];
     
 setFilteredProduct(filterData)
      
      console.log(filterdProduct);

    }
   
    useEffect(()=>{
        let url1 = 'https://62d7a8e551e6e8f06f1fd777.mockapi.io/T-SHIRTS';
        
        let url2 = 'https://62d7a8e551e6e8f06f1fd777.mockapi.io/TRACKSUITS';
      
        let url3 = 'https://62d7a8e551e6e8f06f1fd777.mockapi.io/TROUSERS';
   
        let url4 = 'https://62d7a8e551e6e8f06f1fd777.mockapi.io/SWEATSHIRTS'

        dispatch(getAllData(url1));
        
      
        dispatch(getAllData(url2));
        
        dispatch(getAllData(url3));
        
        dispatch(getAllData(url4));
       
      },[]);

        
  return (
    <div>
      
      <Navbar/>
     
        
        <div className={styles.main}>
              <input type='search' placeholder='ENTER SEARCH TERMS'
               onChange ={(e)=>handleChange(e)}
               className={searchText.length>0 ? styles.searchbar_active : styles.searchbar}/>
        </div>
        <AllcardWraper>
        {filterdProduct.map((item)=>{
          return(
            <div >
          <ProductCard title={item.title}
           image={item.image[0]}
            price={item.price}/>
          </div>
          )
        })}
              
                       
        </AllcardWraper>
    </div>
  )
}

export default SearchPage;


const AllcardWraper = styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
gap:20px;
justify-content:space-around;
position : absolue;
color: black;
background-color: white;
width:80%;
margin:auto;
`;