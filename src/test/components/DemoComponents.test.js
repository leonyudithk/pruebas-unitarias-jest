import { getImage } from "../../components/Api-Async-Await"
import { getHeroes } from "../../components/ArrayObjetos"
import { getSaludo } from "../../components/Funcion"
import { getUser } from "../../components/Objetos"
import { getPromise } from "../../components/Promesa"
import { usuario } from "../../components/String"
import { isLoggedIn } from "../../components/Variable"
import { heroes } from "../../data/data"

describe('Realizar pruebas a la carpeta de Components', ()=>{

    //---------------Variable.js--------------------//
    test('validar que el isLoggedIn sea correcto', ()=>{
            const autenticar = isLoggedIn

            if(autenticar){
                console.log("Usuario autenticado")
            }
            else{
                throw new Error('Usuario NO autenticado')
            }
    })

     //---------------String.js--------------------//
     test('Validar Usuario', ()=>{
        const validarUser = 'Frontend'

        expect(usuario).not.toBe(validarUser)
       // expect(usuario).toBe(validarUser)
        
     })

     
     //---------------Funcion.js--------------------//
     test('Validar el saludo partiendo de un Nombre', ()=>{
            const nombre = "Yudith"
            const saludo = getSaludo(nombre)

            expect(saludo).toBe(`Hola ${nombre}, Bienvenido`)
            expect(saludo).not.toBe(`Hola ${nombre}`)
            expect(saludo).toContain(nombre)
            expect(saludo).toContain("Bienvenido")
            expect(saludo).not.toContain("Adios")
            expect(typeof nombre).toBe('string')
     })
     //---------------------Objeto---------------------//
     test('Obtener un objeto de usuario', ()=>{
        expect(getUser()).toEqual({
            email: 'frontend12@gmail.com',
            pass: 'F12-2022'
        })

     })

     //---------------------Arreglos---------------------//
     test('Obtener un heroe partiendo de un id', ()=>{
      
        const id =3
        const traerHeroe = getHeroes(id)
       //console.log(traerHeroe)
       const HeroeComparar = heroes.find(hero => hero.id === id)

       expect(traerHeroe).toEqual(HeroeComparar)
       expect(traerHeroe).toEqual(heroes[2])
       
     })
  //---------------------Arreglos con id no existente---------------------//
  test('Obtener un heroe partiendo de un id que no exista', ()=>{
      
    const id =9
    const traerHeroe = getHeroes(id)
   //console.log(traerHeroe)
 
   expect(traerHeroe).toEqual(undefined)
     
 })
     //------------------------Promise.js----------------------------------------//
     test('Encontrar el Heroe partiendo de un id', (done)=>{
        const id= 2

        const HeroeComparar = heroes.find(hero => hero.id === id)

        getPromise(id)
            .then(result =>{
                expect(result).toEqual(HeroeComparar)
                done()
            })

     })

//---------------------Proxima solución--------------------------//
     test('No encontrar el Heroe partiendo de un id no existente', (done)=>{
        const id= 9

        getPromise(id)
            .catch(resul =>{
               // expect(resul).toBe(`No se encontro el Heroe con el id`)
                done()
            })
          

     })

     //----------------------APi---------------------------------------/
     test('verificar la url', async ()=>{

        const url = await getImage()
        console.log(url)

        expect(typeof url).toBe('string')
        expect(url.includes('https://')).toBe(true)
        expect(url.includes('https://')).not.toBe(false)
     })

})