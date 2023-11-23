import React, { createContext, useContext, useState } from "react";


const Context = createContext();


export const StateContext = ({ children }) => {

	const [user, setUser] = useState({})
	const [ecn, setEcn] = useState("");

  	return (
    	<Context.Provider value={{
			user,
			setUser,
			ecn,
			setEcn,
        }}>
    	    {children}
    	</Context.Provider>
	)
}

export const useStateContext = () => useContext(Context);