import { heroes } from "../data/data"

export const getHeroes = (id)=>{
    return heroes.find(hero => hero.id === id)

}