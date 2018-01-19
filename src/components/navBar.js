import React, { Component } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import {Label} from 'reactstrap';

import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { withRouter } from 'react-router-dom'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.goTo = this.goTo.bind(this);
  }

  componentDidMount() {
  }

  goTo(url) {
    console.log('clicked');
    this.props.history.push(url);
  }

  dropdownToggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      isOpen: false,
    });
  }

  render() {

    return (
      <Toolbar className="main-tb">
        <ToolbarGroup>
          <List>
          <ListItem
            disabled={true}
            leftAvatar={
              <Avatar
                src="https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/20915310_336831750106316_1444846933928452863_n.jpg?oh=4170276467c567dac2232caa7f366b85&oe=5AF9F2D6"
                size={65}
              />
            }
          >
            <Label className="ml-3"><h2 className="usefont">Mila Yuhta</h2></Label>
          </ListItem>
          </List>
        </ToolbarGroup>
        <ToolbarGroup>
          <Menu className="art-menu">
            <MenuItem primaryText="Главная" onClick={() => this.goTo("/home")}/>
            <MenuItem primaryText="Главная1" onClick={() => this.goTo("/home1")}/>
            <MenuItem primaryText="Главная2" onClick={() => this.goTo("/home2")}/>
            <MenuItem primaryText="Галерея" onClick={() => this.goTo("/gallery")}/>
            <MenuItem primaryText="Персона" onClick={() => this.goTo("/person")}/>
            <MenuItem primaryText="Творчество" />
            <MenuItem primaryText="Контакт" onClick={() => this.goTo("/contact")}/>
          </Menu>
          <ToolbarSeparator />
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="RU" />
            <MenuItem primaryText="EN" />
            <MenuItem primaryText="UA" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

export default withRouter(NavBar)