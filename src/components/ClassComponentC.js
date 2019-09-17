import React from 'react';

const ClassComponentC = ({user, channel}) => {
    return (
        <div class="componentC">
            <h1>Class Component C</h1>
            <h4>{user}</h4>
            <h4>{channel}</h4>
        </div>
    );
};

export default ClassComponentC;