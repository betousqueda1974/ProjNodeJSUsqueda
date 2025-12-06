import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config.js';

const ruta = "usuarios";

export const VerifyCredentials = async (email, password) => {
  const q = query(
    collection(db, ruta),
    where("email", "==", email)
  );
  
  const snap = await getDocs(q)

  if(snap.empty) throw new Error("Usuario no encontrado")

  const userDoc = snap.docs[0];
  const user = userDoc.data();

  if(user.password != password) throw new Error("La contraseña es incorrecta")

    const {password: _ , ...userSafe} = user
  return {id: userDoc.id, ...userSafe}
}

