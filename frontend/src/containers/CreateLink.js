import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`

class CreateLink extends Component {
    state = {
        description: '',
        url: ''
    }

    render() {
        const { description, url } = this.state
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