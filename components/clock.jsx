import React,{useEffect,useState}from"react";
function Clock(){
  const[clockState,setClockState]=useState();
  useEffect(()=>{
    setInterval(()=>{
      const date=new Date();

      const time = date.toLocaleTimeString();

      setClockState(time);
    },1000);
 },[]);
 return<div>{clockState}</div>;
}
export default Clock;