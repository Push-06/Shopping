import React, { useState } from "react";
import {Container,Row,Col} from 'react-bootstrap';
import Topbar from "./Topbar";


export default function Shop()
{
    let[cat,setcat]=useState(
        [{
            id:"1",
            cat:"Grocery",
            img:"./Images/Grocery.png"
        },
        {
            id:"2",
            cat:"Soap",
            img:"./Images/soap1.png"
        },
        {
            id:"3",
            cat:"Medicine",
            img:"./Images/medicine.png"
        },
        {
            id:"4",
            cat:"Drinks",
            img:"./Images/drinks.png"
        },
        {
            id:"5",
            cat:"Biscuits",
            img:"./Images/biscuit.png"
        },
        {
            id:"6",
            cat:"Chocaltes",
            img:"./Images/chocalate.png"
        }

   ] )

   let[products,setproducts]=useState([
    {
        id:"1",
        products:"Dairy milk",
        img:"./Images/dairy.png",
        price:"100"
    },
    {
        id:"2",
        products:"Marie Gold",
        img:"./Images/marie.png",
        price:"50"
    },
    {
        id:"3",
        products:"Hamam",
        img:"./Images/hamam.png",
        price:"20"
    },
    {
        id:"4",
        products:"Pepsi",
        img:"./Images/pepsi.png",
        price:"75"
    },
    {
        id:"5",
        products:"Cola",
        img:"./Images/cola.png",
        price:"40"
    },
    {
        id:"6",
        products:"Dolo",
        img:"./Images/dolo.png",
        price:"100"
    },
    {
        id:"7",
        products:"five star",
        img:"./Images/fivestar.png",
        price:"60"
    },
    {
        id:"8",
        products:"Kitkat",
        img:"./Images/kitkat.png",
        price:"50"
    }

   ])
   let[cart,setcart]=useState([])

   
   const addproduct=(i)=>
   {
    setcart((olddata)=>[
        ...olddata,
        {
            id:products[i].id,
            products:products[i].products,
            img:products[i].img,
            price:products[i].price
        }
    ])
   
   }


    return(
        <div>
            <Container fluid>
           <Topbar />

        </Container>

        <Container fluid className="m-2">
            <img src={require ('./Images/Banner.png')}></img>

        </Container>

        <Container fluid>
            <h1 className="bg-primary p-2 text-center text-white">List of Category</h1>
            <Row>
            {cat.map((categories,index)=>
            <Col sm={4}>
             <div>
             <img src={require(`${categories.img}`)} width="100px" alt={categories.cat} /> 
             <h2 className="bg-primary text-white p-1">{categories.cat}</h2>
 
             </div>
             </Col>
            )}
           </Row>
        </Container>

        <Container fluid>
            <Row>
            <h1 className="bg-success p-2 text-white text-center">My Cart</h1>
            {cart.map((p,i)=>
           <Col sm={4}>
            <div className="text-center p-4 ">
                <h2>{p.products}</h2>
                <img src={require(`${p.img}`)} width={90} alt={p.cat} /> 
                <h2>Rs. {p.price}</h2>
                <button className="btn btn-primary" onClick={()=>addproduct(i)}>Add to Cart</button>
            </div>
           </Col>

           )}
            </Row>
            
        </Container>





        <Container fluid>
           <h1 className="bg-danger p-2 text-white text-center">List of Products</h1>
           <Row>
           {products.map((p,i)=>
           <Col sm={4}>
            <div className="text-center p-4 ">
                <h2>{p.products}</h2>
                <img src={require(`${p.img}`)} width="100px" alt={p.cat} /> 
                <h2>Rs. {p.price}</h2>
                <button className="btn btn-primary" onClick={()=>addproduct(i)}>Add to Cart</button>
            </div>
           </Col>

           )}
           </Row>
        </Container>

        <Container fluid>
            <Row>
                <Col>

                </Col>
            </Row>


        </Container>
        
        

        </div>
        

       
        
    )
}