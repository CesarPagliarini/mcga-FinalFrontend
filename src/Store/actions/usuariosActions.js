// import Swal from 'sweetalert2';       // Se usa para personalizar las ventanas emergentes
// import axios from '../../config/axios';
import {
  LOGIN_FETCHING,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_USER
} from '../../types/usuarios';

export const loginFetching = () => {
  return {
      type: LOGIN_FETCHING,
  }
}

export const loginSuccess = (response) => {
  return {
      type: LOGIN_SUCCESS,
      payload: response,
  }
}

export const loginError = (error) => {
  return {
      type: LOGIN_ERROR,
      payload: error,
  }
}

export const logoutUser = () => {
  return {
      type: LOGOUT_USER,
  }
}

export const login = (email, password) => {
  return (dispatch) => {
      dispatch(loginFetching());
      //fetch("http://localhost:3001/auth/login", {
      fetch("http://localhost:5000/usuarios", {
              method: 'post',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({email: email, password: password})
          }).then(async (response) => {
              const data = await response.json()
              if(response.status === 200) {
                  dispatch(loginSuccess(data))
              } else {
                  dispatch(loginError(data.message))
              }
            })
            .catch((error) => {
              dispatch(loginError(error.message))
            })
  }
}

export const logout = () => {
  return (dispatch) => {
      dispatch(logoutUser());
  }
}

