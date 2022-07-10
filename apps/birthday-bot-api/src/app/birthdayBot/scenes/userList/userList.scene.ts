import { Scene, SceneEnter, SceneLeave, Hears, Ctx, Sender } from 'nestjs-telegraf';
import {Markup} from 'telegraf'
import { Context } from '../../../interfaces/context.interface';
import { UserListMenuKeyboard, MainMenuKeyboard, EButtons } from '../../buttons/buttons';
import { ESceneNameConstants } from '../constants';
import { UserService } from './userList.service';


@Scene(ESceneNameConstants.UserListScene)
export class UserListScene {
  constructor(private readonly userService: UserService) { }

  @SceneEnter()
  async onSceneEnter(@Ctx() ctx: Context): Promise<void> {
    //TODO тут мы должны подгрузить первых 20 пользователей или сколько есть. 
    //Если меньше 20, то кнопку "Далее" показывать естественно не надо
    const usersList = await this.userService.getUsers()
    console.log(usersList, 'usersList');

    for (let i = 0; i < usersList.length; i++) {
      const template = `${usersList[i].name} ${usersList[i].surname} \n поздравляю с }`
      await ctx.reply(template)
      
    }
    
    await ctx.reply('Выберите \n действие', Markup
      .keyboard(UserListMenuKeyboard)
      .resize()
    )
  }

  @SceneLeave()
  async onSceneLeave(@Ctx() ctx: Context, @Sender('first_name') firstName: string): Promise<void> {
    await ctx.reply(`${firstName}, выберите действие`, Markup
      .keyboard(MainMenuKeyboard)
      .resize()
    )
  }

  @Hears(EButtons.Exit)
  async onLeaveCommand(@Ctx() ctx: Context): Promise<void> {
    await ctx.scene.leave();
  }
}