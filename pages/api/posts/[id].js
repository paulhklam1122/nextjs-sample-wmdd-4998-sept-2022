import { POSTS } from '../../../data'
import { validateFieldPresence } from '../../../utils/validation'
import find from 'lodash.find'
import remove from 'lodash.remove'
import { apiResponse } from '../../../utils/apiResponse'

const handler = (req, res) => {
  let postId = parseInt(req.query.id)
  validateFieldPresence(res, 'id', postId)

  let post = findPostById(res, postId)

  if (req.method === 'GET') {
    return apiResponse(res, 200, { post })
  }

  if (req.method === 'PATCH') {
    console.log('query', req.query)

    let title = req.body.title
    let body = req.body.body

    validateFieldPresence(res, 'title', title)
    validateFieldPresence(res, 'body', body)

    post.title = title
    post.body = body

    return apiResponse(res, 200, { post })
  }

  if (req.method === 'DELETE') {
    let posts = POSTS

    remove(posts, { id: post.id })

    return apiResponse(res, 200, { post })
  }
}

const findPostById = (res, id) => {
  let posts = POSTS

  let post = find(posts, { id })

  if (!post) {
    return apiResponse(res, 404, { errorMessage: `A post with id: ${id} could not be found` })
  }

  return post
}

export default handler
