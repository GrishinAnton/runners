import {  Ctx, Start, Update, Hears, Sender } from 'nestjs-telegraf';
import { Context } from '../interfaces/context.interface';
import { Markup } from 'telegraf'
import { MainMenuKeyboard, EButtons } from './buttons/buttons';
import { ESceneNameConstants } from './scenes/constants';


@Update()
export class BirthdayUpdate {
  @Start()
   async onStart(@Ctx() ctx: Context,  @Sender('first_name') firstName: string): Promise<void> {
    console.log(ctx.from);
    
     await ctx.reply(`${firstName}, выберите действие`, Markup
      .keyboard(MainMenuKeyboard)
      .resize()
    )
  }

  @Hears(EButtons.UserList)
  async UserList(@Ctx() ctx: Context): Promise<void> {
    //Мы должны пойти на сервер за данным
    //Сохранить пагинацию 0 -20
    //По кнопке далее ходить на сервер с увеличением пагинации
    
    await ctx.scene.enter(ESceneNameConstants.UserListScene);

  }
}
