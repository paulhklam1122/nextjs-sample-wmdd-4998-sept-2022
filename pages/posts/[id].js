import { useRouter } from 'next/router'

const PostShow = () => {
  const router = useRouter()
  const { id, title, body } = router.query

  return (
    <div>
      <h1>ID: {id}</h1>
      <h1>Title: {title}</h1>
      <h1>Body: {body}</h1>
    </div>
  )
}

export default PostShow
