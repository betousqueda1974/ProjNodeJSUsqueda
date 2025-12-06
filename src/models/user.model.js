export class UserModel {
    constructor({id,nombre,email,password,rol,ubicacion,experiencia}){
        this.id = id;
        this.nombre= nombre;
        this.email= email;
        this.password=password;
        this.rol=rol || "usuario";
        this.ubicacion= ubicacion || "desconocido";
        this.experiencia=experiencia || "Sin experiencia";
    }
}