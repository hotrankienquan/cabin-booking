"use client"

import { createContext, useContext, useState } from "react";


const ReservationContext = createContext();

const init = {
    from:undefined,
    to:undefined
}

function ReservationProvider({children}){
    const [range, setRange] = useState(init)
    const resetRange = () => setRange(init)
    return(<ReservationContext.Provider value={{range, setRange, resetRange}}>
        {children}
    </ReservationContext.Provider>)

}


const useReservation = () => {
    const context = useContext(ReservationContext);

    if(context === undefined){
        return new Error("context was used outside of provider")
    }
    return context
}

export {
    ReservationProvider,
    useReservation
}