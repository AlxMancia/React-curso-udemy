
describe('Test en el demo.test.js', () => {
    
    test('String should be the same', () => {
    
        const mensaje = 'Hola mundo';
    
        const mensaje2 = `Hola mundo`;
    
        expect( mensaje ).toBe( mensaje2 );
    
    })
})



