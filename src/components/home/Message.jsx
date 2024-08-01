import React from 'react'
import { message1 } from '../../data/message-data'

function Message() {
  return (
    <section>
      <div>
        {
          message1.map((data) => (
            <h1>{data.message}</h1>
          ))}
      </div>
    </section>
  )
}

export default Message