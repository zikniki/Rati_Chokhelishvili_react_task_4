import React from 'react'
import HeaderAtom from '../atoms/HeaderAtom'
import HeaderIconPart from '../atoms/HeaderIconPart'
import './style.css'



function HeaderMolecule({count}) {
    return (
        <div className='Header'>
            <HeaderAtom navbar1='Collections' navbar2='Men' navbar3='Women' navbar4='About' navbar5='Contact' />
            <HeaderIconPart count={count}/>
        </div>
    )
}

export default HeaderMolecule