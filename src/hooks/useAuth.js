import { useContext } from "react"
import { AuthConext } from "../context/AuthProvider"

const useAuth = ()=>{
    return useContext(AuthConext)
}

export default useAuth;