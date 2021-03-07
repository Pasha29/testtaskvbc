import { getData } from './../Api/api';

const GET_DATA = 'GET_DATA';
const GET_FILTERED_DATA = 'GET_FILTERED_DATA';

let initialState = {
    filteredData: [],
    arrayRecievedData: []
}

let commonReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_DATA': {
            return {
                ...state,
                arrayRecievedData: action.arrayRecievedData
            }
        }
        case 'GET_FILTERED_DATA': {
            return {
                ...state,
                filteredData: action.filteredData
            }
        }
        default: {
            return state;
        }
    }
}

const getDataAC = (arrayRecievedData) => ({type: GET_DATA, arrayRecievedData});
const getFilteredDataAC = (filteredData) => ({type: GET_FILTERED_DATA, filteredData})

export const getDataTC = () => {
    return (dispatch) => {
        getData.getProducts().then( response => {
            dispatch(getDataAC(response))
        })
    }
}

export const getFilteredDataTC = (filteredData) => {
    return (dispatch) => {
        let values = Object.values(filteredData);
        // console.log(values);

        let arrToStr = values.toString();
        // console.log(arrToStr);

        let splitStr = arrToStr.split(/[\s,/\\.-]+/).toString();
        console.log(splitStr);

        let arr = [];
         getData.getProducts().then( response => {
            response.map(productsItem => (
            splitStr.toLowerCase().split(/[\s,/\\.-]+/)
            .map( strItem => productsItem.name.toLowerCase().split(/[\s,/\\.-]+/)
            .filter( item => (item === strItem ) && arr.push(productsItem) ) ) 
        ))
        let removeDuplicate = [...new Set(arr)];
            console.log(removeDuplicate);

            dispatch(getFilteredDataAC(removeDuplicate));
         })

        //one word filter
        // getData.getProducts().then( response => {
        //     response.filter(item => (
        //         console.log(item.name.toLowerCase().split(/[\s,/\\.-]+/).includes( splitStr ) && arr.push(item))
        //     ))//reduce((acc, value) => acc && value, true)
        //     console.log(arr);
        //     dispatch(getFilteredDataAC(arr));
        // })
    }
}

export default commonReducer;


