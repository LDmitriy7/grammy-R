import env from "https://deno.land/x/parse_env@v0.0.1/mod.ts"
import { Msg, RContext, setR } from "../mod.ts"
import { Bot } from "../src/deps.ts"

const token = env.str("TOKEN")
const bot = new Bot<RContext>(token)
const msg = new Msg("Hello!", { force_reply: true })

bot.use(setR)
bot.command("start", (ctx) => ctx.r(msg))
bot.start()
