import React from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import Face from '@material-ui/icons/Face';
import MenuList from '@material-ui/core/MenuList';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuItem from '@material-ui/core/MenuItem';
import LocationCity from '@material-ui/icons/LocationCity'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

 
const menuItemsAdmin = [
    'Dashboard',
    'Users',
    'Customers',
    'Settings',
    'Module0',
    'Module1',
    'Module2',
    'Module3',
    'Module4',
    'Module5',
    'Module6',
    'Module7',
    'Module8'
];

class SideMenu extends React.Component {  
    constructor(props) {  
        super(props)
        this.state = {
            user: JSON.parse(localStorage.getItem('user')),
            active: 'Dashboard',
            location:''
        }
    }

    handleClick = (menuItem) => {
        this.setState({ active: menuItem });
    }

    render() { 
        const activeStyle = { background: 'rgb(68, 56, 56)' };
        const modiFiedAdmin = menuItemsAdmin.filter((item) => {
            if (item === 'Dashboard' || item === 'Users' || item === 'Customers' || item === 'Settings' || item === 'Module0' || item === 'Module1' || item === 'Module2' || item === 'Module3' || item === 'Module4' || item === 'Module5' || item === 'Module6' || item === 'Module7' || item === 'Module8' ) {
                return item
            }
        })

        return (
            <div className="sidebar">    
                <div className="sidebarMenu">
                    <MenuList>
                        {modiFiedAdmin.map((menuItem, i) =>
                            <Link key={menuItem + i} component={RouterLink} style={{color: '#aaa'}}onClick={() => this.handleClick(menuItem)} to={'/' + menuItem} >
                                <MenuItem style={this.state.active === menuItem ? activeStyle : {}} >
                                    {(menuItem === 'Dashboard') ? <Face style={{marginRight: '10px'}} /> : ''}
                                    {menuItem === 'Users' ? <SupervisorAccount style={{marginRight: '10px'}}/> : ''}
                                    {menuItem === 'Customers' ? <AccountBoxIcon style={{marginRight: '10px'}}/> : ''}
                                    {menuItem === 'Settings' ? <SettingsIcon style={{marginRight: '10px'}}/> : ''}
                                    {menuItem === 'Module0' ? <LocationCity style={{marginRight: '10px'}}/> : ''}
                                    {menuItem === 'Module1' ? <LocationCity style={{marginRight: '10px'}}/> : ''}
                                    {menuItem === 'Module2' ? <LocationCity style={{marginRight: '10px'}}/> : ''}
                                    {menuItem === 'Module3' ? <LocationCity style={{marginRight: '10px'}}/> : ''}
                                    {menuItem === 'Module4' ? <LocationCity style={{marginRight: '10px'}}/> : ''}
                                    {menuItem === 'Module5' ? <LocationCity style={{marginRight: '10px'}}/> : ''}
                                    {menuItem === 'Module6' ? <LocationCity style={{marginRight: '10px'}}/> : ''}
                                    {menuItem === 'Module7' ? <LocationCity style={{marginRight: '10px'}}/> : ''}
                                    {menuItem === 'Module8' ? <LocationCity style={{marginRight: '10px'}}/> : ''}
                                    {menuItem}</MenuItem>
                            </Link>
                        )}
                    </MenuList>           
                </div>    
            </div>
        );
    }
}


export default SideMenu;

 
