import FlatList from 'flatlist-react'
import React from 'react'
import { memo } from "react";


function Flat ({data,rut})  {
  return (
    <FlatList list={data} renderItem={(item,index) => 
        <div key={index} className='divflat' >
          

            { 
               
              item.firmantes.map((sub, subindex) =>
               <p key={subindex}>{ sub[rut] &&  sub.fecha }</p>
              )
            }

       

            <p>{item.tipo}</p>

     


            <a className='firmar' href={`http://localhost:3001/#/verpdf/${item._id}`} target="_blank" > Ver </a>

         
            


        </div>




      
      }
      
      renderWhenEmpty={() =>
        <div className='renderEmpty' >

          
            {/* <p> Bienvenido </p> */}
          

      

        </div>
      }
      hasMoreItems
      renderOnScroll
      />
  )
}


export default React.memo(Flat);