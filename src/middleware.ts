import { NextFunction } from "./deps.ts"
import { RContext, ReplyMarkup, Texts } from "./types.ts"

function setR<T extends Texts>(texts: T) {
  async function middleware(
    ctx: RContext<T>,
    next: NextFunction,
  ): Promise<void> {
    ctx.texts = texts
    ctx.rt = (text: string, markup?: ReplyMarkup) => {
      return ctx.reply(text, { reply_markup: markup, parse_mode: "HTML" })
    }
    ctx.r = (textKey: keyof typeof ctx.texts, markup?: ReplyMarkup) => {
      const text = ctx.texts[textKey]
      return ctx.rt(text, markup)
    }
    await next()
  }
  return middleware
}

export { setR }
