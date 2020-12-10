import React from 'react';
import './actions.css';
import Button from '../../button/button';
import PersonIcon from '@material-ui/icons/Person';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Actions = () => {
    return (
        <div className="actions">
            <Button label="LOG IN" />
            <Button primary label="SIGN UP" />
            <div className="profile">
                <PersonIcon className="hoverable"/>
                <ArrowDropDownIcon />
            </div>
        </div>
    )
}

export default Actions;