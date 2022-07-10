import { UserList } from "../scenes/userList/userList.entity"
import { getAge, getBirthdayFormat } from '@runners/shared/common'

export const userBirthdayMessage = ({name, surname, birthday}: UserList) => {
    return `${name} ${surname}, поздравляем тебя с ${getAge(birthday)} летием!`
}

export const userMessage = ({name, surname, birthday}: UserList) => {
    return `${name} ${surname} ${getBirthdayFormat(birthday)}`
}