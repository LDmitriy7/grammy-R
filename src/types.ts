import {
  Context,
  ForceReply,
  InlineKeyboardMarkup,
  Message,
  ReplyKeyboardMarkup,
  ReplyKeyboardRemove,
} from "./deps.ts"

type KeyboardMarkup = ReplyKeyboardMarkup | InlineKeyboardMarkup
type ReplyMarkup = KeyboardMarkup | ReplyKeyboardRemove | ForceReply
type Texts = Record<string, string>

interface RFlavor<T extends Texts> {
  texts: T
  rt: (text: string, markup?: ReplyMarkup) => Promise<Message.TextMessage>
  r: (textKey: keyof T, markup?: ReplyMarkup) => Promise<Message.TextMessage>
}

type RContext<T extends Texts> = Context & RFlavor<T>
export type { RContext, ReplyMarkup, RFlavor, Texts }
