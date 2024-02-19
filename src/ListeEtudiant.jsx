import { useDispatch, useSelector } from "react-redux"
import { supprimer } from "./actions"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export const ListeEtudiant=()=>{
    const data = useSelector(r=>r)
    const dispatch = useDispatch()
    const[rech,setrech] = useState('')
    const [filtred,Setfiltred] = useState([])
    useEffect(()=>Setfiltred(data.filter(e=>e.nom.includes(rech))),[data,rech])
    const dele=(id)=>{
        dispatch(supprimer(id))
    }
    return(
        <div>
            <input type="text"  onChange={(e)=>setrech(e.target.value)}/>
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nom</th>
                        <th>prenom </th>
                        <th colSpan={2}>actions</th>
                    </tr>

                </thead>
                <tbody>
                    {filtred.map(etudiant => <tr>
                        <td>{etudiant.id}</td>
                        <td>{etudiant.nom}</td>
                        <td>{etudiant.prenom}</td>
                        <Link to={`modifier/${etudiant.id}`}> <td><button className="btn btn-info">editer</button></td></Link>
                        <td><button  className="btn btn-danger" onClick={()=>dele(etudiant.id)}>supprimer</button></td>

                    </tr>)}
                </tbody>
            </table>
            <Link to={'ajouter'}><button>Ajouter</button></Link>
        </div>
    )
}