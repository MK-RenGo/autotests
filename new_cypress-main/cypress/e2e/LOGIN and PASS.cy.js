describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // посетить сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// Проверяю цвет кнопки "Восстановить пароль"

         cy.get('#mail').type('german@dolnikov.ru') // Поле с верным логином
         cy.get('#pass').type('iLoveqastudio1') // Поле с верным паролем        
         cy.get('#loginButton').click() // Кнопка "Авторизоваться"

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка текста
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик и его видно
     })
     it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // посетить сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки "Восстановить пароль"

        cy.get('#forgotEmailButton').click() // Нажимаю кнопку "Восстановить пароль"
        cy.get('#mailForgot').type('mail@gmail.com') // Пишу мыло в строчке
        cy.get('#restoreEmailButton').click() // Нажимаю кнопку "Отправить код"

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверка текста 
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик виден пользователю
    })
    it('Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // посетить сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// Проверяю цвет кнопки "Восстановить пароль"

        cy.get('#mail').type('german@dolnikov.ru') // Поле с верным логином
        cy.get('#pass').type('iLoveQA') // Поле с неверным паролем        
        cy.get('#loginButton').click() // Кнопка "Авторизоваться"

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка текста
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик и его видно
    })
    it('НЕерный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // посетить сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// Проверяю цвет кнопки "Восстановить пароль"

        cy.get('#mail').type('RUbik@dolnikov.ru') // Поле с неверным логином
        cy.get('#pass').type('iLoveqastudio1') // Поле с верным паролем        
        cy.get('#loginButton').click() // Кнопка "Авторизоваться"

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка текста
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик и его видно
    })
    it('Логин без "@" и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // посетить сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// Проверяю цвет кнопки "Восстановить пароль"

        cy.get('#mail').type('germandolnikov.ru') // Поле логин без "@"
        cy.get('#pass').type('iLoveqastudio1') // Поле с верным паролем        
        cy.get('#loginButton').click() // Кнопка "Авторизоваться"

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка текста
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик и его видно
    })
    it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // посетить сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// Проверяю цвет кнопки "Восстановить пароль"

        cy.get('#mail').type('GerMan@Dolnikov.ru') // Поле со сотрочными буквами в логине 
        cy.get('#pass').type('iLoveqastudio1') // Поле с верным паролем        
        cy.get('#loginButton').click() // Кнопка "Авторизоваться"

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка текста
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик и его видно
    })
 }) 