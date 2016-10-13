import React, { Component } from 'react';
import { IconButton, Popover, Menu, MenuItem } from 'material-ui';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import Chip from '../Chip/Chip';
import './meta.css';

class Meta extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      anchor: null,
    }
  }

  onMoreClick = (event) => {
    event.preventDefault();

    this.setState({
      expanded: true,
      anchor: event.currentTarget,
    });
  }

  onCloseMoreClick = () => {
    this.setState({
      expanded: false,
    });
  }

  render() {
    const {
      sourceName,
      sourceIcon,
      posted,
    } = this.props;

    return (
      <div className="meta">
        <Chip icon={sourceIcon} line={sourceName} sub={posted} />
        <IconButton className="more" onClick={this.onMoreClick}>
          <NavigationMoreVert color="rgba(0, 0, 0, .54)" />
        </IconButton>
        <Popover
          open={this.state.expanded}
          anchorEl={this.state.anchor}
          onRequestClose={this.onCloseMoreClick}
          anchorOrigin={{ "horizontal": "right", "vertical": "bottom" }}
          targetOrigin={{ "horizontal": "right", "vertical": "top" }}
        >
          <Menu>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Popover>
      </div>
    );
  }
}

export default Meta;
