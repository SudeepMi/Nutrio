import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import TopBar from './components/TopBar'

function Blog() {
    const [posts, setPosts] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [headlines, setHeadlines] = React.useState([])
    const [active, setActive] = React.useState(0)

    React.useEffect(() => {
        document.title = "Blog"
        axios.get('https://www.indexofsciences.com/index.php/wp-json/wp/v2/posts').then(res => {
            setPosts(res.data)
        })
    }, [])

    React.useEffect(() => {
        const headlines = posts.map(post => {
            return post.title.rendered
        })
        setHeadlines(headlines)
    }, [posts])

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [active])

    return (
        <div>
            <TopBar component={"blogs"} />
            <div className="container">
                <div className="row">
                    {/* <div className="col-md-4">
                        {headlines.map((headline, index) => {
                            return (
                                <div className="mb-3" key={index}>
                                    <div className="">
                                        <Link className="card-title" to={`#${headline}`}>{headline}</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div> */}
                    
                        {posts.length > 0 && (
                            <div className='col-md-12'>
                            <div key={posts[active].id} className="card" id={posts[active].title.rendered} itemID={posts[active].id}>
                                <h1 className="card-header">{posts[active].title.rendered}</h1>
                                <div dangerouslySetInnerHTML={{ __html: posts[active].content.rendered }}  className="card-body" />
                                <div className='card-footer'>
                                    <div className='d-flex justify-content-between'>
                                        <button className='btn btn-outline-dark btn-outline btn-lg px-5 m-5' onClick={() => {
                                            if (active > 0) {
                                                setActive(active - 1)
                                            }
                                        }}>
                                            <i className="fas fa-arrow-left mx-2"></i>
                                            Previous
                                        </button>
                                        <button className='btn btn-outline-dark btn-outline btn-lg px-5 m-5' onClick={() => {
                                            if (active < posts.length - 1) {
                                                setActive(active + 1)
                                            }
                                        }}>
                                            Next
                                            <i className="fas fa-arrow-right mx-2"></i>
                                        </button>
                                        </div>
                                </div>
                            </div>
                            </div>
                        )}
               
                </div>
            </div>
        </div>
    )
}

export default Blog