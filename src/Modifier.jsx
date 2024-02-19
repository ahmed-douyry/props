import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { modifier } from "./actions"

export const Modifier=()=>{
    const {id} = useParams()
    const data =useSelector(r=>r)
    const etu = data.find(e=>e.id==id)
    const [nom,Setnom] = useState(etu.nom)
    const [prenom,Setprenom] = useState(etu.prenom)
    const dispatch = useDispatch()
    const nav = useNavigate()
    const Md=()=>{
        const n1 = {id:id,nom:nom,prenom:prenom}
        dispatch(modifier(n1))
        nav('/')

    }
    return(
        <>
        <form action="">
            <div>
            <input type="text" name="" id="" value={nom} onChange={(e)=>Setnom(e.target.value)} />
            </div>
            <div>
            <input type="text" name="" id="" value={prenom} onChange={(e)=>Setprenom(e.target.value)} />
            </div>
            <button type="button" onClick={Md}>sauvgarder</button>
        </form>
        </>
    )
}