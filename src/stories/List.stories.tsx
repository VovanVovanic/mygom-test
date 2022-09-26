import React from 'react'
import { List } from '../components/List'
import { action } from '@storybook/addon-actions'

export default {
  title: "Items List",
  component:List
}

const items = ["Vue", "Angular", "React", "Svelte"]

const onChoiceCallback = action("Following item was chosen")


export const ItemsList = () => {
  return (
    <div style={{position: "relative"}}>
      <List
        open={true}
        group={false}
        groupBy=""
        data={items}
        setItem={onChoiceCallback}
      />
    </div>

  )
}