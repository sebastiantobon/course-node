setTimeout(function(){
    console.log("cghdc");
}, 1000);


const getUsuarioByID = (id, callback) => {

const user = {
    id,
    nombre: "fernando",
}

setTimeout(() => {
callback(user)
}, 1500)

}

getUsuarioByID(10, (user) => {
    console.log(user.id);
    console.log(user.nombre);
});