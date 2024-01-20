import React, { useState } from 'react'

import {
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

import inputBodyState from '../Atoms/inputBodyAtom';
import outputBodyState from '../Atoms/outputBodyAtom';

const Selector = () => {

    const [selected, setSelected] = useState('Python Flask')
    const [inputBody] = useRecoilValue(inputBodyState);
    const [outputBody, setOutputBody] = useRecoilState(outputBodyState);
    const generateRef = React.useRef(null);

    const selectChangeHandler = (e) => {
        setSelected(e.target.value)
    }

    const generateCodeHandler = () => {
        generateRef.current.innerHTML = 'Generating...'

        const dataBody = {
            "language": selected,
            "text": inputBody
        }

        fetch('http://localhost:7000/text', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataBody)
        }).then(res => res.json())
        .then(data => {
            if(data.error) return alert(data.error)
            setOutputBody(data)
        }).finally(() => {
            generateRef.current.innerHTML = 'Generate'
        })
    };
    

  return (
    <div className='grid grid-cols-2 gap-x-5 items-center justify-end'>
        <select onChange={selectChangeHandler} className='border-2 border-gray-300 rounded w-min p-2 mt-5'>
            <option selected value="Python Flask">Python Flask</option>
            <option value="Python Django">Python Django</option>
            <option value="Python FastAPI">Python FastAPI</option>
            <option value="Node Express">Node Express</option>
            <option value="Go">Go</option>
            <option value="RUST">RUST</option>
        </select>
        <button
        ref={generateRef}
        onClick={generateCodeHandler}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 relative shadow rounded mt-5"
      >
        Generate
      </button>
    </div>
  )
}

export default Selector