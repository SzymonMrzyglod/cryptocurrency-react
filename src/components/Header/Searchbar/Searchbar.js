import { useEffect, useState, useRef } from 'react';
import style from './Searchbar.module.css';

function Searchbar(props){
    const [name, setName] = useState('');

    const inputRef = useRef();

    const searchCrypto = () => {
        props.onSearch(name);
    }

    const updateSearch = e =>{
        setName(e.target.value)
    }

    const focusInput = () => {
        inputRef.current.focus();
    }

    useEffect(() => {
        focusInput()
    }, []);

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
        >Search</button>
    </div>
    )
    };

export default Searchbar;