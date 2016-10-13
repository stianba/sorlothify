import React, { Component } from 'react';
import { FlatButton, Popover, Menu, MenuItem } from 'material-ui';
import NavigationExpandMore from 'material-ui/svg-icons/navigation/expand-more';

class ExpandableList extends Component {
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
      items,
    } = this.props;

    const labelColor = 'rgba(0, 0, 0, .54)';

    const listItems = items.map((v, k) => (
      <FlatButton key={k} label={v} labelStyle={{ color: labelColor, fontWeight: 400 }} style={{ minWidth: 0 }} />
    ));

    return (
      <nav className="expandable-list">
        {listItems}
        <FlatButton
          label="Mer"
          labelPosition="before"
          icon={<NavigationExpandMore color={labelColor}  />}
          labelStyle={{ color: labelColor }}
          onClick={this.onMoreClick}
        />
        <Popover
          open={this.state.expanded}
          anchorEl={this.state.anchor}
          onRequestClose={this.onCloseMoreClick}
        >
          <Menu>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Popover>
      </nav>
    );
  }
}

export default ExpandableList;
