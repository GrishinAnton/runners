export enum EButtons {
    SearchUser = '🔍 Найти пользователя',
    UserList = '😎 Список пользователей',
    Settings = '☸ Настройки',
    AddCongratulation = '📢 Добавить поздравление',
    Next = 'Далее',
    Exit = 'Выход',
    Start = 'Главное меню',
    CreateUser = 'Создать пользователя'
  }
  
  export const MainMenuKeyboard = [
    [EButtons.SearchUser, EButtons.UserList], 
    [EButtons.Settings, EButtons.AddCongratulation], 
  ]

