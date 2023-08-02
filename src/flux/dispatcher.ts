import { Dispatcher } from 'flux'

const dispatcher = new Dispatcher()

export const dispatch = dispatcher.dispatch

export default dispatcher 