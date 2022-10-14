import { apiResponse } from './apiResponse'

export const validateFieldPresence = (res, fieldName, fieldValue) => {
  if (!fieldValue) {
    apiResponse(res, 422, { errorMessage: `${fieldName} is a required field` })
  }
}
