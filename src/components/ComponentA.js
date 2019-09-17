import React from 'react';
import ComponentB from './ComponentB'

const ComponentA = () => {
    return (
        <div class="componentA">
            
            <ComponentB />
            <h1>Hooks Component A</h1>
        </div>
    );
};

export default ComponentA;