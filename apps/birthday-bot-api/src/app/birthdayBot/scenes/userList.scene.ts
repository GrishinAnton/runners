import { Scene, SceneEnter, SceneLeave, Hears, Ctx, Sender } from 'nestjs-telegraf';
import { Context } from '../../interfaces/context.interface';
import {Markup} from 'telegraf'
import { EButtons, UserListMenuKeyboard, MainMenuKeyboard } from '../buttons/buttons';
import { ESceneNameConstants } from './constants';


@Scene(ESceneNameConstants.UserListScene)
export class UserListScene {
  @SceneEnter()
  async onSceneEnter(@Ctx() ctx: Context): Promise<void> {
    //TODO тут мы должны подгрузить первых 20 пользователей или сколько есть. 
    //Если меньше 20, то кнопку "Далее" показывать естественно не надо

    await ctx.reply('Выберите действие', Markup
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