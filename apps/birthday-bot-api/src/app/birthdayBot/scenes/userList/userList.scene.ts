import { Scene, SceneEnter, SceneLeave, Hears, Ctx, Sender } from 'nestjs-telegraf';
import { Markup } from 'telegraf'
import { Context } from '../../../interfaces/context.interface';
import { EButtons, MainMenuKeyboard } from '../../buttons/buttons';
import { userMessage } from '../../templates/message.templates';
import { DEFAULT_SKIP, DEFAULT_TAKE, ESceneNameConstants } from '../constants';
import { UserEmptytMenuKeyboard, UserListMenuKeyboard } from './buttons/buttons';
import { UserList } from './userList.entity';
import { UserService } from './userList.service';
import {UserListModel} from '@prisma/birthday-api'

enum EActionType  {
  Create,
  Next
}

@Scene(ESceneNameConstants.UserListScene)
export class UserListScene {
  constructor(private readonly userService: UserService) { }

  @SceneEnter()
  async onSceneEnter(@Ctx() ctx: Context): Promise<void> {
   await this.generateUserList(ctx)
  }

  @SceneLeave()
  async onSceneLeave(@Ctx() ctx: Context, @Sender('first_name') firstName: string): Promise<void> {
    await ctx.reply(`${firstName}, выберите действие`, Markup
      .keyboard(MainMenuKeyboard)
      .resize()
    )
  }

  @Hears(EButtons.Next)
  async moreUser(@Ctx() ctx: Context): Promise<void> {
    await this.generateUserList(ctx)
  }

  @Hears(EButtons.CreateUser)
  async createUser(@Ctx() ctx: Context): Promise<void> {
    //TODO выход и переход на сцену создания пользователя
  }

  @Hears(EButtons.Exit)
  async onLeaveCommand(@Ctx() ctx: Context): Promise<void> {
    await ctx.scene.leave();
  }

  async generateUserList(ctx: Context): Promise<void> {
    const {count, elements} = await this.userService.getUsers(ctx.session.__scenes.state['skip'] ?? 0)

    //если 0 - создать пользователя выход
    if(!count) {
        await ctx.reply('Пользователей с указанным днём рожденья нет:(')
        await this.actionKeyboard(ctx, EActionType.Create)
      return
    }

    //если меньше DEFAULT_TAKE - вывести, что есть, создать, выход
    if(count < DEFAULT_TAKE) {

      await this.printUsers(ctx, elements)

      await ctx.reply(`Показано ${elements.length} из ${count}`)

      await this.actionKeyboard(ctx, EActionType.Create)
      return
    }

    //если больше 20 - далее, выход
    let currentSkip = ctx.session.__scenes.state['skip'] ?? 0

    if(currentSkip + DEFAULT_SKIP >= count){
      currentSkip = count
    } else {
      currentSkip = currentSkip + DEFAULT_SKIP
    }

    ctx.session.__scenes.state = {
      skip: currentSkip
    }

    await this.printUsers(ctx, elements)

    //писать сколько всего и сколько показано. 20 из 100 пользователей (показвать последним сообщением надо кнопками)
    await ctx.reply(`Показано ${ctx.session.__scenes.state['skip']} из ${count}`)

    //если конец - создать, выход
    if(ctx.session.__scenes.state['skip'] === count){
      await this.actionKeyboard(ctx, EActionType.Create)
    } else {
      await this.actionKeyboard(ctx, EActionType.Next)
    }
  }

  async printUsers(ctx: Context, elements: UserListModel[]): Promise<void>{
    for (let i = 0; i < elements.length; i++) {
      const user = new UserList(elements[i].name, elements[i].surname, elements[i].birthday)
      await ctx.reply(userMessage(user))
    }
  }

  async actionKeyboard(ctx:Context, actionType: EActionType): Promise<void>{
    await ctx.reply('Выберите действие', Markup
      .keyboard(actionType === EActionType.Next ? UserListMenuKeyboard : UserEmptytMenuKeyboard)
      .resize()
    )
  }
}