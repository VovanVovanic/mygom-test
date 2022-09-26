import React from 'react'
import { GroupChoices } from '../components/Group'
import {action} from '@storybook/addon-actions'

export default {
  title: "Buttons for grouping",
  component: GroupChoices
}

const groups = ["Group 1", "Group 2", "Group 3", "None"]

const groupCallback = action("One of grouping options was chosen")
const isGroupedCallback = action("isGroped was changed")

export const GroupElements = () => {
  return <GroupChoices
    groups={groups}
    setGroup={isGroupedCallback}
    setGroupBy={groupCallback}
  />
}
