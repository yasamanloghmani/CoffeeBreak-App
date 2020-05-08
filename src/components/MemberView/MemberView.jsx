import React from "react";
import './MemberView.css';

export default function MemberView(props){
    
    return(
        <div>
            <h1>Members</h1>
            { props.lastGroup.users.map((user) => <div className="members"><p>{user.name.toUpperCase()}</p></div>)}
            
        </div>
    )
}