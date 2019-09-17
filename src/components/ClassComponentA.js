import React, { Component } from 'react'
import ClassComponentB from './ClassComponentB'

export default class ClassComponentA extends Component {
    state={
        user:"valentino",
        channel:"vale75020"
    }
    render() {
        return (
            <div class="componentA">
                <h1>Class Component A</h1>
                <ClassComponentB user={this.state.user} channel={this.state.channel}/>
            </div>
        )
    }
}
