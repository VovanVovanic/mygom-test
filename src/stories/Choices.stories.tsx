import React from 'react'
import { Choices } from '../components/Choices'
import { action } from '@storybook/addon-actions'

export default {
  title: "Chosen Items",
  component: Choices
}

const items = ["Vue", "Angular", "React", "Svelte"]

const deleteCallback = action("Following item was chosen for deleting:")

export const ChosenElements = () => {
  return <Choices
    data={items}
    theme="books"
    onRemove={deleteCallback}
  />
}