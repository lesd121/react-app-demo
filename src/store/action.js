// @flow

type PageTitleAction = { type: 'PAGE_TITLE', str:string }
type RecordAction = { type: 'RECORD', str:string }

type Action =
  | PageTitleAction
  | RecordAction

export function pageTitle(value: string): Action {
  return { type: 'PAGE_TITLE', str: value}
}

export function record(value: string): Action {
  return {type: 'RECORD', str: value}
}