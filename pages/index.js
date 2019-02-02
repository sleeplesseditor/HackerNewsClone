import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Link from 'next/link';
import Layout from '../components/Layout';
import StoryList from '../components/StoryList';

class Index extends Component {
    static async getInitialProps({ req, res, query }) {
        let stories;
        let page;

        try {
            page = Number(query.page) || 1;
            const response = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
            stories = await response.json();
        } catch (err) {
            console.log(err);
            stories = [];
        }

        return { page, stories };
    }

    render () {
        const { page, stories } = this.props;

        if(stories.length === 0) {
            return <Error statusCode={503} />;
        }

        return (
            <Layout title="HackerNews Clone">
                <StoryList stories={stories} />

                <button>
                    <Link href={`/?page=${page + 1}`}>
                        <a>Load More...</a>
                    </Link>
                </button>

                <button>
                    <Link href={`/?page=${page - 1}`}>
                        <a>Previous</a>
                    </Link>
                </button>

                <style jsx>
                    {`
                        button {
                            font-size: 24px;
                            font-weight: 600;
                        }

                        button a {
                            text-decoration: none;
                        }
                    `}
                </style>
            </Layout>
        );
    }
}

export default Index;