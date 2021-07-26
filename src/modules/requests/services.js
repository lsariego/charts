import { customError } from '../errors/custom'
import cancellationSingleton from './cancellation'

/**
 * Factory to create a wrapper to call services.
 *
 * Generate a wrapper with the following signature:
 *
 *  interface Args {
 *    actionType?: string;
 *    [key: string]: any;
 *  }
 *  interface Response {
 *    data: object;
 *    headers: object;
 *    request: object;
 *    status: number;
 *  }
 *
 *  type ServiceWrapper = (args: Args) => Promise<Response>
 *
 * E.g.
 *
 *  getService('https://api.example.com/auth', { actionType: GET_SERVICE, id: 2, ... })
 */
export const factoryService = callback => {
  const cancellation = cancellationSingleton()

  return serviceArgs => {
    const { actionType, ...requestArgs } = serviceArgs || {}

    setTimeout(() => cancellation.emitActionType(actionType), 0)

    return callback(requestArgs).catch(error => {
      throw customError(error)
    })
  }
}
