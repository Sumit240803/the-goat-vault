export const isLogged=()=>{
    if(typeof window != "undefined"){
        const state = localStorage.getItem("loggedState");
        if(state){
            return true;
        }
        return false;
    }
}