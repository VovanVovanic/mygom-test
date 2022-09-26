import React from 'react'
import { Message } from '../components/Message'
import { action } from '@storybook/addon-actions'

export default {
  title: "Information message",
  component: Message
}


const messageCallback = action("Message has been set to:")


export const MessageElement = () => {
  return <Message
    message={"Test Message"}
    error={false}
    setMessage={messageCallback}
  />
}