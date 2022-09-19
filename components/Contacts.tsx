import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'; 

type Props = {}

function Contacts({}: Props) {
    const [textZ, countZ] = useTypewriter({
        words: [
            "Lets Get In Touch",
    ],
    loop: true,
    delaySpeed:3500,
    });
  return(   
    
     <div>
        <h1>
            {textZ}
        </h1>        
        
    </div>
  );
  }
