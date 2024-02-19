export const ajouter=(etudiant)=>{
    return{
        type:'add',
        payload:etudiant
    }
}
export const modifier=(etudiant)=>{
    return{
        type:'edit',
        payload:etudiant
    }
}
export const supprimer=(id)=>{
    return{
        type:'delete',
        payload:id
    }
}