export type IData = {
    name: string
    avatar_url: string
    location : string
    login: string
    public_repos: number
    id: number
    email: string | null
    bio: string | null
    followers: number
    following: number
    created_at: string
    repos_url: string
}


/*Представление должно содержать:

изображение аватара, 
имя пользователя, 
количество подписчиков, 
количество подписчиков, 
биографию, 
адрес электронной почты, 
местоположение, 
дату присоединения 

и список 
общедоступных репозиториев с панелью поиска вверху. */