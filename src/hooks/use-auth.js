import { useSelector } from "react-redux";

// Данный хук позволяет вызвать этот хук в любой точке приложения и посмотреть авторизован ли пользователь
export const useAuth = () =>{
    const{email,token,id} = useSelector(state => state.user);
    
    return{
        isAuth: !!email,
        email,
        token,
        id,
    }
}