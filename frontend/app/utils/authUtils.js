import axios from "axios";
import { resolve } from "styled-jsx/css";

export const isLogged=()=>{
    if(typeof window != "undefined"){
        const state = localStorage.getItem("loggedState");
        if(state){
            return true;
        }
        return false;
    }
}

export const getToken=()=>{
  if(typeof window !="undefined"){
    const token = localStorage.getItem("token");
    if(token !=''){
      return token;
    }
  }
}
export function setToken(token){
  return new Promise((resolve , reject)=>{
  if(typeof window !="undefined"){
      setTimeout(()=>{
        if(token){
          localStorage.setItem("token" , token);
          localStorage.setItem("loggedState" , true);
          resolve("Token Stored");
        }else{
          reject("Token required");
        }
      },100)
    }else{
      reject("Window Object is not available")
    }
  })
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
  