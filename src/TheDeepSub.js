import React, { useContext } from 'react'
import { DarkTheme } from './App'



const TheDeepSub = () => {

    const { dark, setDark } = useContext(DarkTheme)
    console.log(dark)
    return (
        <div className='dark_btn'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat distinctio deleniti cum, minus in delectus dicta dolorem mollitia fuga alias ipsam quam libero placeat quas sequi nesciunt asperiores beatae id obcaecati voluptates repellendus? Incidunt, excepturi. Natus aliquam sint, error quaerat, magnam quis saepe harum iure nihil aperiam deleniti blanditiis rerum.
            <label htmlFor='btn' className={`Brn ${dark ? 'on' : ''}`}>
                dark
            </label><input type="checkbox" id='btn' onChange={() => setDark(!dark)} />
            <button id='btn' onClick={() => setDark(!dark)}>DarkMode</button>
        </div>
    )
}

export default TheDeepSub