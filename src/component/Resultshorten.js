import React, {useEffect, useState} from 'react'
import './linkshortner.css' 
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FaClone } from 'react-icons/fa';
function Resultshorten({inputValue}) {
    const [shortenLink , setShortenLink] = useState('');
    const [copied , setCopied] = useState(false)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setCopied(false)
        },2000)
        return ()=>clearTimeout(timer)
    },[copied])

    return (
        <div className='link_shortened'>
            <h2 className='link_shortened_head'>the url shortened</h2>
            <div className='link_shortened_content'>
                <p className='link_shorten_text'>{shortenLink}</p>
                <CopyToClipboard 
                    text={shortenLink}
                    onCopy={()=>{setCopied(true)}}>
                <button  className={copied ? "copied" : ''} type="button"><FaClone className='clone_icon'/></button>
                </CopyToClipboard>
            </div>
        </div>
    )
}

export default Resultshorten
