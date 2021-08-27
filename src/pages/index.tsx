import Home, { HomeProps } from 'templates/Home'

export default function Index(props: HomeProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  let data = {
    comments: []
  }
  try {
    const response = await fetch(`${process.env.VERCEL_URL}/api/review`)
    data = await response.json()
  } catch {
    console.warn('Api is down!')
  }
  return {
    revalidate: 60 * 60,
    props: { data }
  }
}
