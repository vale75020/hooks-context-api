import React from 'react';
import ClassComponentC from './ClassComponentC'

const ClassComponentB = ({user, channel}) => {
    return (
        <div class="componentB">
                <h1>Class Component B</h1>
                <h4>{user} - {channel}</h4>
                <ClassComponentC user={user} channel={channel}/>
            </div>
    );
};

export default ClassComponentB;
