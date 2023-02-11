import React, {useState} from 'react';
import { exchanges } from '../constants';
import { style } from '../style';


const Exchange = () => {

  const [items, setItems] = useState(exchanges);

  const filterItem = (categoryItem)=>{
    const updatedItems = exchanges.filter((currentItem)=>{
      return currentItem.category === categoryItem;
    })
    setItems(updatedItems);
  }

  

  return (
    <section>
      <div className={`flex flex-row flex-wrap justify-around items-center px-20 pb-12`}>
        <button className={`bg-[#353535] border-[3px] border-[#A66EFF] text-[#A66EFF] font-poppins px-10 py-2  my-2  ${style.hoverEffect} `} onClick={()=>setItems(exchanges)}>All Types</button>
        <button className={`bg-[#353535] border-[3px] border-[#A66EFF] text-[#A66EFF] font-poppins px-10 py-2  my-2 ${style.hoverEffect}`} onClick={()=>filterItem("diamond")}>Diamond</button>
        <button className={`bg-[#353535] border-[3px] border-[#A66EFF] text-[#A66EFF] font-poppins px-10 py-2  my-2 ${style.hoverEffect}`} onClick={()=>filterItem("world777")}>World777</button>
        <button className={`bg-[#353535] border-[3px] border-[#A66EFF] text-[#A66EFF] font-poppins px-10 py-2  my-2 ${style.hoverEffect}`} onClick={()=>filterItem("b2b")}>B2B Sites</button>
        <button className={`bg-[#353535] border-[3px] border-[#A66EFF] text-[#A66EFF] font-poppins px-10 py-2  my-2 ${style.hoverEffect}`} onClick={()=>filterItem("skyexchange")}>SkyExchange</button>
        <button className={`bg-[#353535] border-[3px] border-[#A66EFF] text-[#A66EFF] font-poppins px-10 py-2  my-2 ${style.hoverEffect}`} onClick={()=>filterItem("lotusbook")}>Lotusbook247</button>
      </div>

      

      <div className={`flex flex-col justify-center items-center`}>
          {items.map((exchange)=>(
            <section className={`flex flex-col `}>
              <div className={`flex flex-row gap-4`}>
                <li key={exchange.id} className={`list-none sm:px-12 py-4 bg-[#A66EFF] w-[160px] sm:w-[300px] mt-4 text-center text-[16px] text-white font-normal `}>{exchange.title}</li>
                <div key={2*exchange.id} className={`list-none px-4 py-4 bg-[#A66EFF] w-[100px] mt-4 text-center text-[16px] text-white font-normal`}>{exchange.rate}</div>
                <img src={exchange.img} alt={exchange.site} key={exchange.site} className={`w-[50px] text-white mt-4 hover:bg-[#A66EFF] hover:cursor-pointer hover:rounded-full`} onClick={()=>window.open(exchange.site)}/>
              </div>
            </section>
          ))}
      </div>
    </section>
  )
}

export default Exchange