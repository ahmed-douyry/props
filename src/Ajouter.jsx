import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ajouter } from "./actions"
import { useNavigate } from "react-router"

export const Add=()=>{
    const [nom,Setnom] = useState('')
    const [prenom,Setprenom] = useState('')
    const data = useSelector(r=>r)
    const dispatch = useDispatch()
    const a = useNavigate()
    const id = data[data.length-1].id+1
    const ajoutr=()=>{
        const n1 = {id,nom,prenom}
        dispatch(ajouter(n1))
        a('/')

    }
    return(
        <>
        <form action="">
            <input type="text" value={id} />
            <div>
            <input type="text" name="" id="" onChange={(e)=>Setnom(e.target.value)} />
            </div>
            <div>
            <input type="text" name="" id="" onChange={(e)=>Setprenom(e.target.value)} />
            </div>
            <button type="button" onClick={ajoutr} >sauvgarder</button>
        </form>
        </>
    )
}