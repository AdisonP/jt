export default function authHeader(){
    const user = JSON.parse(localStorage.getItem("user"));

    if(user && user.token){
        return user.token;
    }else{
        return {};
    }
};
// to integer in header pre request 