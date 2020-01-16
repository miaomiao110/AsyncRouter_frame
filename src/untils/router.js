export function getRouter_local(){
    return localStorage.getItem("router")
}

export function setRoute_local(data){
    return localStorage.setItem("router",data)
}