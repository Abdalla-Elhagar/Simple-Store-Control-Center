import { useState } from "react"
import data from "../data"
import { useDispatch } from "react-redux"

export default function Control(){
    const [addProduct , setAddProduct] = useState({id:(data.length) + 1 , name:"" , price:"" , image:"" })
    const setAction = useDispatch()

    function addData(){
        setAction({type:"add" , element:addProduct})
    }
    return(
        <div>
            
                <label>name</label>
                <input value={addProduct.value} onChange={(e)=>setAddProduct({...addProduct,name:e.target.value})} />
                <br />

                <label>image</label>
                <input value={addProduct.value} onChange={(e)=>setAddProduct({...addProduct,image:e.target.value})} />
                <br />

                <label>prise</label>
                <input value={addProduct.value} onChange={(e)=>setAddProduct({...addProduct,price:e.target.value})} />
                <br />
                <button onClick={addData}>Add</button>                
        </div>
    )
}