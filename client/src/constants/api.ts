export enum Urls {
   base_url = 'http://localhost:8000/api/',
   user = "user",
   userAuth = "user/auth",
   userReg = "user/reg",
   userLogout = "user/logout",
   product = "product",
}

export enum AuthResponses {
   success = "success",
   notLogged = "Not logged",
   wrongEmail = "Пользователя с таким email не существует.",
   wrongPassword = "Введён неверный пароль.",
   unexpected = "Unexpected error",
};