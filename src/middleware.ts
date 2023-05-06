import { NextFunction } from "./deps.ts"
import { Msg, RContext } from "./types.ts"

async function setR(ctx: RContext, next: NextFunction): Promise<void> {
  ctx.r = (msg: Msg) => {
    return ctx.reply(msg.text, { reply_markup: msg.markup })
  }
  await next()
}

export { setR }
