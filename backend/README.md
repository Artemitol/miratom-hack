## Эндпоинты
URL для всех запросов `http://localhost:8001/api/v1/`
### Регистрация и вход
URL `authentication/`
```aiignore
POST register/ - добавляет пользователя в бд
POST token/ - Получения токенов на авториазицю

Сценарии:
    Регистрация:
    - 1. register/ - Отправка запроса на регистрацию формата
     {
        "username" : str,
        "email": str,
        "password": str,
        "password": str
     };
     
     Авторизация:
     - 1. token/ - Отправка запроса на получение access, refresh токена
     {
        "username": str,
        "password": str
     }
     
     -2. token/refresh/ - Отправка запроса на перевыпуск access токена
     {
        "refresh": str
     }
     
     -3. token/verify/ - Отправка запроса на проверку просроченности токена access, refresh
     {
        "token": str
     }
```

### Работа с формулами
Авторизация `Authorization: Bearer access_token`
CRUD `formulas/`
ну вряд ли CRUD нужно полностью объяснять
```JSON
{
  "name": string,
  "latex_view": string
}
```


## Контракты

### Token
`token/`
```aiignore
{
    "access":,
    "refresh": 
}
```

`token/verify/` - `200`

`token/refresh`
```aiignore
{
    "access": 
}
```

### Register

`register/`
```aiignore
 {
    "id": ,
    "username": ,
    "email": 
}
```

### Formulas

```aiignore
{
    "name": ,
    "latex_view": ,
    "creation_date": ,
    "author": int
}
```