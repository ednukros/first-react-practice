import React from 'react'
import Counter from './Counter';
import Gallery from './Gallery';
import Gallery2 from './Gallery2';
import Person from './Person';
import { Section } from './Section';

const Main = () => {
    return (
        <main>
            <Section />
            <Section /> 
            <div className='container-gallery'>         
            <Gallery tittle="Autorretrato" img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/autorrettaro-1907-1657804389.jpeg?crop=1xw:1xh;center,top&resize=980:*" bgColor="green" />
            <Gallery tittle="El sueño" img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/el-sueno-1657804389.jpeg?crop=1xw:1xh;center,top&resize=980:*" bgColor= "brown" />
            <Gallery tittle="El viejo guitarrista ciego" img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/el-viejo-guitarrista-1657804389.jpg?crop=1xw:1xh;center,top&resize=980:*" bgColor="orange" />
            <Gallery tittle="Dora Maar Au Chat" img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dora-maar-au-chat-1657804388.jpeg" bgColor= "purple" />
            <Gallery2 tittle="Haz click y cambio de color" img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dora-maar-au-chat-1657804388.jpeg" bgColor= "purple" />
            </div> 
            <Person name="María" age="32" color="violet" />
            <Person name="Pepe" age="50" color="aquamarine" />
            <Person name="Alberto" age="25" color="pink" />
            <Counter />
        </main>
    )
}

export default Main;