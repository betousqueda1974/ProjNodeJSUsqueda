import jwt from "jsonwebtoken"
import { VerifyCredentials } from "../services/user.service.js";

export const loginUser = async (req,res) => {
    try{
        const {email, password, rol} =  req.body;
        const user = await VerifyCredentials(email,password);
        
        if(rol == "admin"){

          const tokenPayload = {
              id: user.id,
              email: user.email,
              rol:user.rol
          };

          const token = jwt.sign(tokenPayload,process.env.JWT_SECRET,{expiresIn:'1h'});
          res.status(200).json({msj:"Logueado como Admin",token, user});
        }
        else res.status(200).json({msj:"Logueado como usuario", user});
    }
    catch (err) {
        res.status(401).json({msj:err.message})
    }
}