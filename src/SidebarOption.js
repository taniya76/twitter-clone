import React from 'react';
import './SidebarOption.css';

//component will be passed by using first letter capital e.g here Icon
function SidebarOption({active,text,Icon}) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <Icon/>
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption;
