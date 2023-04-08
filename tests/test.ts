import { setR } from "../mod.ts"
import { Composer } from "../src/deps.ts"

const texts = { start: "Hello", help: "Help:" }
const composer = new Composer(setR(texts))

composer.command("start", (ctx) => ctx.r("start"))
composer.command("help", (ctx) => {
  const text = `${ctx.texts.help} ...`
  return ctx.rt(text)
})
