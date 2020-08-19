import React from 'react'
import { Icon, Input, Menu } from 'semantic-ui-react'

import './TopBar.scss'

const TopBar = () => (
  <Menu className="TopBar" size="large">
    <Menu.Item>
      <span>
        <Icon size="large" name="bug" />
        Overnote!
      </span>
    </Menu.Item>
    <Menu.Item position="right">
      <Input className='icon' icon='search' placeholder='Search...' />
    </Menu.Item>
  </Menu>
)

export default TopBar
