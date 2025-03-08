import axios from "axios";

export const isLogged=()=>{
    if(typeof window != "undefined"){
        const state = localStorage.getItem("loggedState");
        if(state){
            return true;
        }
        return false;
    }
}

export const login = async (email, password) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      return await res.json();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  
  export const register = async (name, email, password) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      return await res.json();
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  