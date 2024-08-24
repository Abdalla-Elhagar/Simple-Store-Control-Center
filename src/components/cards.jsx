import { useSelector } from "react-redux"


export default function Cards(){
    const select = useSelector(state=>state)
    return(
        <>
        
            {select.map(ele=>{
                return(
                    <div key={ele.id} className="card w-[300px]">
                        <img src={ele.image} alt="product-image" />
                        <h2>{ele.name}</h2>
                        <h3>{ele.price}</h3>
                    </div>
                )
            })}
        </>
    )
}