import { Update, Start, Help, On, Hears } from 'nestjs-telegraf';

@Update()
export class EchoUpdate {
  @Start()
  async startCommand(ctx: any) {
    console.log(ctx.update.message, 'asd');
    await ctx.reply('Welcome');
  }

  @Help()
  async helpCommand(ctx: any) {
    console.log('asd');

    await ctx.reply('Send me a sticker');
  }

  @On('sticker')
  async onSticker(ctx: any) {
    console.log('asd');

    await ctx.reply('👍');
  }

  @Hears('hi')
  async hearsHi(ctx: any) {
    console.log('asd');

    await ctx.reply('Hey there');
  }
}

