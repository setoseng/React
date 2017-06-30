import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/menu';

import {Link} from 'react-router-dom';
/**
 * Simple Icon Menus demonstrating some of the layouts possible using the `anchorOrigin` and
 * `targetOrigin` properties.
 */


const IconMenuExampleSimple = () => (
  <div>
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <div>
        <MenuItem>
          <Link to="/" class="icon-menu">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/form" class="icon-menu">Form</Link>
        </MenuItem>
      </div>
    </IconMenu>

  </div>
);


export default IconMenuExampleSimple;
