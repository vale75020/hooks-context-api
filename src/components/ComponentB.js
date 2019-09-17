import React, {useContext} from 'react';
import ComponentC from './ComponentC';
import { UserContext, ChannelContext } from '../App';


const ComponentB = () => {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div class="componentB">
            <ComponentC />
            <h1>Hooks Component B</h1>
            <h4>{user} - {channel}</h4>
        </div>
    );
};

export default ComponentB;