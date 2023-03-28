import React, { useState } from 'react';
// import './ParentStyle.css';

export const Parent = () => {
  let mobiles = [{
    id:"001",
    name :"oneplus11",
    price : 56999,
    isPurchased: true},
    {
    id:"002",
    name : "Vivi Y100",
    price : 24999,
    isPurchased: false},
    {
    id:"003",
    name : "Redmi 10",
    price : 56999,
    isPurchased : true},
    {
    id:"004",
    name : "iphone 13",
    price : 62990,
    isPurchased : false},
    {
    id:"005",
    name : "Nokia",
    price : 12000,
    isPurchased : true},
    {
    id:"006",
    name : "Poco M4",
    price : 13999,
    isPurchased : true}];



const[arr,setMobiles]=useState(mobiles);

const sortMobilesLTH = () => {
const sortedMobilesLTH = [...arr].sort((a, b) => a.price - b.price);
  setMobiles(sortedMobilesLTH);
};
const sortMobilesHTL = () => {
const sortedMobilesHTL =[...arr].sort((a, b) => a.price - b.price);
  setMobiles(sortedMobilesHTL.reverse());
};
const filtermobiles=()=>{
  const filteredmobiles =arr.filter((elm)=>elm.isPurchased===true)
  setMobiles(filteredmobiles)
}
  return (
    <div>Main
       { arr.map((ele,i)=><p key={i}>{ele.name}</p>)}
       {arr.map((n,i) => (
          <div key={i}>
            <h3>Mobile name:{n.name}</h3>
            <p>Price: {n.price}</p>
          </div>
        ))}
        <button  onClick={sortMobilesLTH}>LOW TO HIGH</button>
        <button onClick={sortMobilesHTL}>HIGH TO LOW</button>
        <button onClick={filtermobiles}>Filter</button>
    </div>
  )
}