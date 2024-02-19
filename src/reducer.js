const initialstate=[
    {id:1,nom:'douyry',prenom:'ahmed'},
    {id:2,nom:'rharibi',prenom:'abdeerahman'},
    {id:3,nom:'manssouri',prenom:'hamza'}
]
export const reducer=(state=initialstate,action)=>{
    switch(action.type){
        case 'add':
            return[...state,action.payload]
        case 'edit':
            {
                const etudiant =state.find(e=>e.id==action.payload.id)
                etudiant.nom = action.payload.nom
                etudiant.prenom = action.payload.prenom
                return[...state]
            }
        case 'delete':
            return state.filter(e=>e.id!==action.payload)
        default :
        return state
    }
}