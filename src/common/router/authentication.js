class Authentication {
    constructor(){
        this.authenticated = false;
    }
login(fun) {
    this.authenticated = true;
    fun();
}    
logout(fun){
    this.authenticated = false;
    fun();
}
isAuthenticated=()=>{
    return this.authenticated;
}
}
export default new Authentication;