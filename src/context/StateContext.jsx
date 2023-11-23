import React, { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


const Context = createContext();


export const StateContext = ({ children }) => {

	// ----------------------- States ------------------------
	const [user, setUser] = useState({})
	const [ecn, setEcn] = useState("");

	// ------------------- useLocalStorage ------------------- 
    const {
        item: token,
        saveItem: saveToken,
        error,
    } = useLocalStorage("token", "");

  	return (
    	<Context.Provider value={{
			user,
			setUser,
			ecn,
			setEcn,
			token,
			saveToken,
        }}>
    	    {children}
    	</Context.Provider>
	)
}

export const useStateContext = () => useContext(Context);