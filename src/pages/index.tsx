import Home, { HomeProps } from 'templates/Home'

export default function Index(props: HomeProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.VERCEL_URL}/api/review`)
  const data = await response.json()
  return {
    revalidate: 60 * 60,
    props: { data }
  }
}
