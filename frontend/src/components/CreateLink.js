import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { FEED_QUERY, POST_MUTATION } from '../../src/querylib'
import { LINKS_PER_PAGE } from '../constants'

class CreateLink extends Component {
    state = {
        description: '',
        url: ''
    }

    render() {
        const { description, url } = this.state
        console.log('createlink this.props.history', this.props.history)
        return (
            <>
                <div className="flex flex-column mt3">
                    <input
                        className='mb2'
                        value={description}
                        onChange={event => this.setState({ description: event.target.value })}
                        type='text'
                        placeholder='A description for the link'
                    />
                    <input
                        className='mb2'
                        value={url}
                        onChange={event => this.setState({ url: event.target.value })}
                        type='text'
                        placeholder='the URL for the link'
                    />
                </div>
                <Mutation
                    mutation={POST_MUTATION}
                    variables={{ description, url }}
                    onCompleted={() => this.props.history.push('/new/1')}
                    update={(store, { data: { post } }) => {
                        const first = LINKS_PER_PAGE
                        const skip = 0
                        const orderBy = 'createdAt_DESC'
                        const data = store.readQuery({
                            query: FEED_QUERY,
                            variables: { first, skip, orderBy }
                        })
                        data.feed.links.unshift(post)
                        store.writeQuery({
                            query: FEED_QUERY,
                            data,
                            variables: { first, skip, orderBy }
                        })
                    }}
                >
                    {postMutation => (
                        <button onClick={postMutation}>
                            Submit
                                    </button>
                    )}
                </Mutation>
            </>
        )
    }
}

export default CreateLink