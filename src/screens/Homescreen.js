import axios from 'axios'
import FlatList from 'flatlist-react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Flat  from '../components/Flat'
import { Loading } from '../components/Loading'



export const Homescreen = () => {


  const [rut, setrut] = useState('')


  const [loading, setLoading] = useState(false)
   const [data, setData] = useState([])



  //  para mantener la fecha de firma

   const [rutSave, setRutSave] = useState('')

 



        const consultarDatos = async () => {
          try {
            setLoading(true)

              const response = await axios.get(`http://localhost:8082/api/firma/con-firmar/${rut}`);
                      
              console.log(response.data)
                
              setData(response.data)

                  // console.log(response.data)
                  setRutSave(rut)
                  setLoading(false)


              } catch (error) {
                
              alert("Error de conexion","Intentalo otra vez", );
              setLoading(false)
                  
              }


      }

      
 



  return (
    <div>
      
      <div className='titulo'>
      <p>Busca por rut del trabajador</p>

      </div>

       <div className='contenedorInput'>
      <input className='busqueda'  value={rut} onChange={e => setrut(e.target.value) } />

      <button className='buscarButton' onClick={consultarDatos} >Buscar</button>

       </div>

       <div className='contenidoTodoTablaDocPorFirmar' > 
             {/* header tabla */}
             <div className='headerTablaDocPorFirmar' >

               <p>Fecha Firma</p>
               <p>Tipo de documento</p>
               <p>Accion</p>


             </div>
             

             <div className='contenidoTablaDocPorFirmar' >

             {
                loading ? <div className='marginTopFirmas'><Loading/> </div> :

                <Flat data={data} rut={rutSave} />
              }


              
              
              
              
              
              
              </div>
              
              
              
              
              
              
              </div>
       


      



    </div>
  )
}
