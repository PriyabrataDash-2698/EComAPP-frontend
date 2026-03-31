import axios from "axios"
import { API_BASE_URL } from "../../config/apiConfig"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";


const token = localStorage.getItem("jwt");

const registerRequest = () => ({type:REGISTER_REQUEST});
const registerSuccess = (user) => ({type:REGISTER_SUCCESS,payload:user});
const registerFailure = (error) => ({type:REGISTER_FAILURE,payload:error});

export const regsiter = (userData)=> async (dispatch)=>{
    dispatch(registerRequest());
    try {
        const response = axios.post(`${API_BASE_URL}/auth/signup`,userData );
        const user = (await response).data;

        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
        dispatch(registerSuccess(user.jwt))
    } catch (error) {
        dispatch(registerFailure(error.message))
    }
}

//for LOGIN ACTION
const loginRequest = () => ({type:LOGIN_REQUEST});
const loginSuccsess = (user) => ({type:LOGIN_SUCCESS,payload:user});
const loginFailure = (error) => ({type:LOGIN_FAILURE,payload:error});

export const login = (userData)=> async (dispatch)=>{
    dispatch(loginRequest());
    try {
        const response = axios.post(`${API_BASE_URL}/auth/login`,userData );
        const user = (await response).data;

        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
        dispatch(loginSuccsess(user.jwt))
    } catch (error) {
        dispatch(loginFailure(error.message))
    }
}

//for GET_USER
const getUserRequest = () => ({type:GET_USER_REQUEST});
const getUserSuccess = (user) => ({type:GET_USER_SUCCESS,payload:user});
const getUserFailure = (error) => ({type:GET_USER_FAILURE,payload:error});

export const getUser = ()=> async (dispatch)=>{
    dispatch(getUserRequest());
    try {
        const response = axios.get(`${API_BASE_URL}/api/users/profile`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        } );
        
        const user = (await response).data;

        dispatch(getUserSuccess(user))
    } catch (error) {
        dispatch(getUserFailure(error.message))
    }
}

//for LOGOUT
export const logOut=()=>(dispatch)=>{
    dispatch({type:LOGOUT,payload:null})
}