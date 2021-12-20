import Link from 'next/link'
import { useRouter } from 'next/router'

const article = ({ article }) => {
  // const router = useRouter()
  // const { id } = router.query
  console.log(article)
  return (
    <>
      <h1>{article.title}</h1>
      <h2>This is article {article.id}</h2>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

// Each time we visit page we call this function and grab the path id 
export const getServerSideProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  const article = await res.json()

  return {
    props: {
      article
    }
  }
}
 
export default article