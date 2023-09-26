// const baseUrl = "http://localhost:3000/api"
const baseUrl = "https://react-project.labcenter.site/api"


const initialState = {
    baseUrl: baseUrl,
}

export default function configReducer(state = initialState, action){
    switch(action.type){
        case "FETCH_DATA_ITEM": 
        return {
            ...state,
        }
        default: 
        return state
    }
}