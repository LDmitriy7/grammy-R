R - reply

```ts
import { setR } from "https://deno.land/x/grammy_r/mod.ts"
import { Composer } from "https://deno.land/x/grammy/mod.ts"

const texts = { start: "Hello", help: "Help:" }
const composer = new Composer(setR(texts))

composer.command("start", (ctx) => ctx.r("start"))
composer.command("help", (ctx) => {
  const text = `${ctx.texts.help} ...`
  return ctx.rt(text)
})
```
