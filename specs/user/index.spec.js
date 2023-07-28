import supertest from "supertest";
import user from "../helper/user";
import config from "../config";

// describe('user', () => {
// describe('POST /api/v1/login', () => {
// test('Метод должен существовать', async () => {
// const res = await supertest('https://try.vikunja.io')
//            .post('/api/v1/login')
//           .send({})

//        expect(res.status).not.toEqual(404);
//     })

//     test('Авторизация должна проходить успешно с правильным логином и паролем', async () => {
//       const res = await user.login(config.credentials)
//       expect(res.status).toEqual(200);
//       expect(typeof res.body.token).toEqual('string')
//      })

//      test('Авторизация должна возвращать статус с кодом ошибки если логин неверный', async () => {
//        const res = await user.login({username: 'demo4', password: 'demo'})
//       expect(res.status).toEqual(412);
//        expect(res.body.code).toEqual(1011)
//      })

//      test('Авторизация должна возвращать статус с кодом ошибки если пароль неверный', async () => {
//        const res = await user.login({username: 'demo', password: 'demo4'})
//       expect(res.status).toEqual(412);
//       expect(res.body.code).toEqual(1011)
//      })
//    })
//  })

 // Домашнее задание, первые 4 теста, 5й будет в другом реквесте

 test('Регистрация должна проходить успешно при корректных параметрах', async () => {
         const res = await supertest('https://try.vikunja.io')
          .post('/api/v1/register')
          .set('Accept', 'application/json')
          .send({username: 'MikhailMeshkanov2', password: '123123', email: 'asdasd12312@mail.ru'})

      expect(res.status).toEqual(200);
      expect(typeof res.body.name).toEqual('string');
      expect(typeof res.body.username).toEqual('string');
      expect(typeof res.body.updated).toEqual('string');
      expect(typeof res.body.id).toEqual('number');
      expect(typeof res.body.email).toEqual('string');
      expect(typeof res.body.created).toEqual('string')
 })
// Этот тест больше не взлетит, так как прошёл успешно один раз, регистрация свершилась, а значит надо менять
// значение email и username


 
