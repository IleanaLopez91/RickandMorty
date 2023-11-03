const app = require('../src/app');
const session = require('supertest');
const agent = session(app);


describe( "Test de RUTAS", () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        });

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async() => {
            const response = await agent.get('/rickandmorty/character/1').expect(200);
            expect(response.body).toHaveProperty("id");
            expect(response.body).toHaveProperty("name");
            expect(response.body).toHaveProperty("species");
            expect(response.body).toHaveProperty("gender");
            expect(response.body).toHaveProperty("status");
            expect(response.body).toHaveProperty("origin");
            expect(response.body).toHaveProperty("image");
        });

        it('Si hay un error responde con status: 500', async() => {
            await agent.get('/rickandmorty/character/1000').expect(500)
        })
    })

    describe("GET /rickandmorty/login", () => {
        it("Debe ser un usuario registrado", async () => {
            const response = await agent.get('/rickandmorty/login').query({email: "ile@mail.com", password: "123456"});
            expect(response.body).toEqual({access: true})
        });
        it("Usuario no registrado", async () => {
            const response = await agent.get('/rickandmorty/login').query({email: "sand@mail.com", password: "789012"});
            expect(response.body).toEqual({access: false})
        })
    })

    describe("POST /rickandmorty/fav", () => {
        const character1 = {id: 1, name: "ile"}; 
        const character2 = {id: 2, name: "meli"}; 
        it("Debe ser un arreglo con el favorito", async () => {
            const response = await agent.post('/rickandmorty/fav').send(character1);
            expect(response.body).toContainEqual(character1);
            expect(response.body).toBeInstanceOf(Array);
        });
        it("Debe agregar otro favorito sin quitar el primero", async () => {
            const response = await agent.post('/rickandmorty/fav').send(character2);
            expect(response.body).toEqual([character1, character2]);
        })
    })

    describe( "DELETE /rickandmorty/fav/:id", () => {
        const character1 = {id: 1, name: "ile"}; 
        const character2 = {id: 2, name: "meli"}; 

        beforeEach(async () => {
            await agent.post('/rickandmorty/fav').send(character1);
            await agent.post('/rickandmorty/fav').send(character2);
        });

        it("Devuelve el arreglo sin modificar en caso de no encontrar el id", async () => {
            const {body} = await agent.delete('/rickandmorty/fav/4');
            expect(body).toContainEqual(character1);
            expect(body).toContainEqual(character2);
        })

        it("Elimina el personaje correcto", async () => {
            const {body} = await agent.delete('/rickandmorty/fav/1');
            expect(body).not.toContainEqual(character1);
            expect(body).toContainEqual(character2);
        })
    })
})