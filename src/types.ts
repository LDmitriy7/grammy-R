import {
  Context,
  ForceReply,
  InlineKeyboardMarkup,
  Message,
  ReplyKeyboardMarkup,
  ReplyKeyboardRemove,
} from "./deps.ts"

type ReplyMarkup =
  | ReplyKeyboardMarkup
  | InlineKeyboardMarkup
  | ReplyKeyboardRemove
  | ForceReply

class Msg {
  constructor(public text: string, public markup?: ReplyMarkup) {}
}

interface RFlavor {
  r: (msg: Msg) => Promise<Message.TextMessage>
}

type RContext = Context & RFlavor

export { Msg }
export type { RContext, ReplyMarkup, RFlavor }
