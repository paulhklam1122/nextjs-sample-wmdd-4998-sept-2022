import { uuid } from 'uuidv4'
import { POSTS } from '../../data'

import { apiResponse } from '../../utils/apiResponse'
import { validateFieldPresence } from '../../utils/validation'

const handler = (req, res) => {
  let posts = POSTS

  if (req.method === 'GET') {
    apiResponse(res, 200, { posts })
  }

  if (req.method === 'POST') {
    console.log('request', req)

    let id = uuid()

    const { title, body } = req.body

    validateFieldPresence(res, 'title', title)
    validateFieldPresence(res, 'body', body)

    const newPost = {
      id,
      title,
      body
    }

    posts.push(newPost) && apiResponse(res, 200, { posts })
  }
}

export default handler
