import React from 'react'

const link = props => {
        return (
            <>
            <div>
                {props.link.description} ({props.link.url})
            </div>
            </>
        )
    }

export default link