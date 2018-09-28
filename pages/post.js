import { withRouter } from 'next/router'
import Layout from '../components/MyLayout'

// const Page = withRouter((props) => (
//     <Layout>
//         <h1>{props.router.query.title}</h1>
//         <p>this is the Blog post content.</p>
//     </Layout>
// ))

const Content = withRouter((props) => (
    <div>
        <h1>{props.router.query.title}</h1>
        <p>This is the Blog post content.</p>
    </div>
))

const Page = (props) => (
    <Layout>
        <Content/>
    </Layout>
)

export default Page