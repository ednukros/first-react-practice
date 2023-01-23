import React from 'react'
import Person from './Person';
import { Section } from './Section';

const Main = () => {
    return (
        <main>
            <Section />
            <Section />
            <Person name="María" age="32" color="violet" />
            <Person name="Pepe" age="50" color="aquamarine"/>
            <Person name="Alberto" age="25" color="pink"/>
        </main>
    )
}

export default Main;