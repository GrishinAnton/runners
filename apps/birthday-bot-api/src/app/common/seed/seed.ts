import { UserList } from "../../birthdayBot/scenes/userList/userList.entity";

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }


export const seedUsersList = (count: number): UserList[] => {

    const result = []

    for (let i = 0; i < count; i++) {
        const {name, surname, birthday} = new UserList(`Anton${i}`, `Grishin${i}`, randomDate(new Date(1980, 0, 1), new Date()))
        result.push({name, surname, birthday})
    }
    return result
}