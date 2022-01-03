import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-string";


describe('Pruebas en 02 template srinf', () => {
    
    test('prueba en metodo getSaludo ', () => {
        


        const nombre   = 'Alexis';
        const apellido = 'Mancia';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola '+ nombre);


    })
    

})
