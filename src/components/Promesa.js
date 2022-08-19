import { getHeroes } from "./ArrayObjetos";

export const getPromise = (id)=>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const heroes = getHeroes(id);
                if(heroes){
                    resolve(heroes);
                }
                else{
                    reject(`No se encontro el Heroe con el id `)            
                    }

        }, 2000)

    })
}