import { forwardRef } from "react";
const keymap = [81, 87, 69, 65, 83, 68, 90, 88, 67];
const ref = useRef(keymap);
    return(
    document.addEventListener ("keydown", (event)=> (
        keymap.includes(event.code)
        ?
        document.addEventListener(
            'keydown',
            (key) =>{
             key.code === 81
            ? document.getElementById('q').play()
            : key.code === 87
            ? document.getElementById('w').play()
            : key.code === 69
            ? document.getElementById('e').play()
            : key.code === 65
            ? document.getElementById('a').play()
            : key.code === 83
            ? document.getElementById('s').play()
            : key.code === 68
            ? document.getElementById('d').play()
            : key.code === 90
            ? document.getElementById('z').play()
            : key.code === 88
            ? document.getElementById('x').play()
            : key.code === 67
            ? document.getElementById('c').play()
            : false;
        }
        ) 
        : false
        )
    ))
const checkKeys = forwardRef(function checkKeys(event) {
    
    


    
})