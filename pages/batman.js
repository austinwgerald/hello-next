import Layout from '../components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'


const Batman = (props) => (
    <Layout>
        <h1>Batman TV Shows!</h1>
        <ul>
            {props.shows.map(({ show }) => (
                <li key={show.id}>
                    <Link as={`/s/${show.id}`} href={`/show?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
        <style jsx>{`
            h1, a {
                font-family: "Arial";
            }
    
            ul {
                padding: 0;
            }
            li {
                list-style: none;
                margin: 5px 0;
            }

            a {
                text-decoration: none;
                color: blue;
                font-family: "Arial";
            }

            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </Layout>
)

Batman.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)

    return {
        shows: data
    }
}

export default Batman