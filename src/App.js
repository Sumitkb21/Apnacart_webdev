import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import React,{ useState } from 'react';
import Footer from './components/Footer';
import AddItem from './components/additem';
function App() {
  const iproductlist = [
    {
      price:9999,
      name: "i_phone 10s max",
      quantity: 0,
    },
    {
      price:999,
      name: "redmi 10s max",
      quantity: 0,
    },
    
  ]
  const [productlist , setProductList ] = useState(iproductlist);
  const [totalamount , setTotalamount ] = useState(0);


  const reset = () => {
    setTotalamount(0);
    setProductList(iproductlist);
  }

  const remove = (index) =>{
    let newProductList = [...productlist];
    let newtotalamount = totalamount;
    newtotalamount-= newProductList[index].price *newProductList[index].quantity;
   
    newProductList.splice(index,1);
    setProductList(newProductList);
    setTotalamount(newtotalamount);
  }
  const add = (name, price) =>{
    let newProductList = [...productlist]; 
    newProductList.push({
      name:name,
      price:price,
      quantity:0
    });
   
    
    setProductList(newProductList);
   
  }
  const incrementQuanity = (index) => {
    let newProductList = [...productlist];
    let newtotalamount = totalamount;

    newProductList[index].quantity++;
    newtotalamount = newtotalamount + newProductList[index].price;
    setTotalamount(newtotalamount);
    setProductList(newProductList);
  }
  const deQuanity = (index) => {
    let newProductList = [...productlist];
    let newtotalamount = totalamount;
    if(newProductList[index].quantity >0) {

      newProductList[index].quantity-- ;
      newtotalamount = newtotalamount - newProductList[index].price;
      
    } 
    setProductList(newProductList);
    setTotalamount(newtotalamount);
  }

  return (
    <>
    <Navbar/>
    <main className='container mt-5'>
    <AddItem add={add}/> 
    <ProductList productlist={productlist} incrementQuanity={incrementQuanity} deQuanity={deQuanity} remove={remove}/>
    </main>
    <Footer totalamount={totalamount} reset ={reset}/>
    
    
    </>
  );
}

export default App;
