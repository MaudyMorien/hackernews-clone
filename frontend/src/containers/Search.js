import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import Link from '../components/Link'
import { FEED_SEARCH_QUERY } from '../../src/querylib'

class Search extends Component {

    state = {
        links: [],
        filter: ''
    }

    render() {
        return (
            <div>
                <div>
                    Search
          <input
                        type='text'
                        onChange={event => this.setState({ filter: event.target.value })}
                    />
                    <button onClick={() => this._executeSearch()}>OK</button>
                </div>
                {this.state.links.map((link, index) => (
                    <Link key={link.id} link={link} index={index} />
                ))}
            </div>
        )
    }

    _executeSearch = async () => {
        const { filter } = this.state
        const result = await this.props.client.query({
            query: FEED_SEARCH_QUERY,
            variables: { filter },
        })
        const links = result.data.feed.links
        this.setState({ links })
    }

}

export default withApollo(Search)