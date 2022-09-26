import React from 'react'
import { Dropdown } from '../components/Dropdown'
import{List} from '../components/List'
import { action } from '@storybook/addon-actions'

export default {
  title: "App Story",
  component: Dropdown
}

const items = ["Vue", "Angular", "React", "Svelte"]


export const MessageElement = () => {
  return <Dropdown
    theme="books"
    data={items}
  >
  </Dropdown>
}