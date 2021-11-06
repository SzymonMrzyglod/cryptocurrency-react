import { useEffect, useState, useRef} from 'react';
import style from './Searchbar.module.css';
import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';

function Searchbar(props){
    console.log(props);
    const [name, setName] = useState('');
    const history = useHistory();
    const inputRef = useRef();

    const handleOnClick = useCallback(() => history.push('/'), [history]);

    const searchCrypto = () => {
        handleOnClick()
        props.onSearch(name);
        setName('') 
    }

    const updateSearch = e =>{
           setName(e.target.value) 
    }

    const focusInput = () => {
        inputRef.current.focus();
    }

    const validateInput = input => {
        const re = /^[a-zA-Z0-9 ]*$/g
        return re.test(input)
    }

    useEffect(() => {
        focusInput()
    }, []);

    useEffect(e => {
        validateInput(name) ? setName(name) :  setName(name.substr(0, name.length-1))
    }, [name])
    return(
    <div className={`${style.searchbar}`}>
        <input
            ref={inputRef}
            value={name}
            onKeyDown={e => e.key === 'Enter' && searchCrypto()}
            onChange={updateSearch}
            type="text"
            placeholder="Search cryptocurrency..."
        />
        <button 
        onClick={searchCrypto}
        type="submit"
        ><i className="fas fa-search"></i></button>
    </div>
    )
    };

export default Searchbar;