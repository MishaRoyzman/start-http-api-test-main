import supertest from "supertest";

test('Метод должен существовать', async () => {
     const res = await supertest('https://try.vikunja.io')
                .post('/api/v1/register')
               .send({})
    
            expect(res.status).not.toEqual(404);
         })
test('Регистрация должна проходить успешно при корректных параметрах', async () => {
            const res = await supertest('https://try.vikunja.io')
             .post('/api/v1/register')
             .set('Accept', 'application/json')
             .send({username: 'VictorTsoy2', password: '123123', email: 'tsoy@kino.com'})
   
         expect(res.status).toEqual(200);
         expect(typeof res.body.name).toEqual('string');
         expect(typeof res.body.username).toEqual('string');
         expect(typeof res.body.updated).toEqual('string');
         expect(typeof res.body.id).toEqual('number');
         expect(typeof res.body.email).toEqual('string');
         expect(typeof res.body.created).toEqual('string')
         // данный тест является одноразовым, так как при успешной проверке создаётся аккаунт
         // для повторной попытки необходимо изменить username и email
    })

            
test('Регистрация должна возвращать статус с кодом ошибки, если пользователь уже существует', async () => {
    const res = await supertest('https://try.vikunja.io')
        .post('/api/v1/register')
        .set('Accept', 'application/json')
        .send({username: 'VictorTsoy2', password: '123123', email: 'tsoy@kino.com'})
     expect(res.status).toEqual(400);
     expect(res.body.code).toEqual(1001);
     expect(res.body.message).toEqual('A user with this username already exists.')
})

test('Регистрация должна возвращать статус с кодом ошибки, если введены некорректные данные имени', async () => {
    const res = await supertest('https://try.vikunja.io')
        .post('/api/v1/register')
        .set('Accept', 'application/json')
        .send({username: ' ', password: '123123', email: 'dd@dd.ru'})
     expect(res.status).toEqual(412);
     expect(res.body.code).toEqual(1022);
     expect(res.body.message).toEqual('The username must not contain spaces.')
})
test('Регистрация должна возвращать статус с кодом ошибки, если email содержит > 250 символов', async () => {
    const res = await supertest('https://try.vikunja.io')
        .post('/api/v1/register')
        .set('Accept', 'application/json')
        .send({username: 'OlegMityaev', password: '123123', email: 'guitarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr@grusha.ru'})
     expect(res.status).toEqual(500);
     expect(res.body.message).toEqual('Internal Server Error')
})