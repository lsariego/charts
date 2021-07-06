import Logger from 'loglevel'
import { isDevEnv } from '../../config/settings/environment'

Logger.setLevel(isDevEnv ? Logger.levels.DEBUG : Logger.levels.WARN)

export default Logger
