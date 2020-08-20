import React from "react";
import { Dropdown, Icon, Input, Menu } from "semantic-ui-react";

import "./TopBar.scss";

const Trigger = () => (
  <span>
    <Icon name="user"></Icon>
    John Doe
  </span>
);

const TopBar = () => (
  <Menu className="TopBar">
    <Menu.Item>
      <span>
        <Icon size="large" name="bug" />
        Overnote!
      </span>
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item>
        <Input className="icon" icon="search" placeholder="Search..." />
      </Menu.Item>
      <Dropdown item trigger={<Trigger />}>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => console.log("loging out!")}>
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
);

export default TopBar;
