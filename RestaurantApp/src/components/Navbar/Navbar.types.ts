import { Dispatch, SetStateAction } from "react";

export interface NavbarProps { 
    setLoggedIn: Dispatch<SetStateAction<boolean>>;
    setShowLogin: Dispatch<SetStateAction<boolean>>;
} 
