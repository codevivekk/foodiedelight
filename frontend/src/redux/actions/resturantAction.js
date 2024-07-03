import { toast } from "react-toastify"
import { getWithoutToken, patchWithoutToken, postWithoutToken, remove } from "../../utlity/axiosInterceptor"
import { setIsLast, setPage, setRestaurants, setSearch, setSearchRestaurants } from "../reducers/resturantReducer"

export const getResturantbyId = (params) => {
    return async () => {
        const response  = await getWithoutToken('/get-resturant', params )
        return response
    }
}

export const getResturants = (params) => {
    return async (dispatch) => {
        try {
            const response = await getWithoutToken('/get-resturants' , params)
            dispatch(setPage(response?.response?.data?.page))
            dispatch(setIsLast(response?.response?.data?.isLast))
            dispatch(setRestaurants(response?.response?.data?.data))
            setSearchRestaurants(response?.response?.data?.data)
            dispatch(setSearch(params))
            return response     
        } catch (error) {
            console.log(error)
            return error
        }
    }
}

export const deleteResturantById = (params) => {
    return async () => {
        console.log(params)
       const response =  await remove('/delete-resturant' ,params)
       return response
    }
}

export const updateResturantById = (payload , params) => {
    return async () => {
        console.log(params)
        const response = await patchWithoutToken("/update-resturant" ,  payload , params)
    }
}

export const addResturant = (restruantObj) => {
    return async () => {
        try {
            const response =  await postWithoutToken('/add-resturants' , restruantObj , {})
             toast(response?.response?.data?.message || "Added Successfully" , "success")
            return response
        } catch (error) {
            console.log(error)
            return error
        }
    }
}