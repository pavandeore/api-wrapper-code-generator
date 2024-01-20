
import React from 'react'
import {
    useRecoilState
  } from 'recoil';
import inputBodyState from '../Atoms/inputBodyAtom';
  

const InputBox = () => {

    const [text, setText] = useRecoilState(inputBodyState);

    const handleChange = (event) => {
        setText(event.target.value);
    };

  return (
    <div>
        <p>
            Input your code logic here 
            <span className='text-xs text-orange-500 ml-2'> it doesn't even need to be complete</span>
        </p>
        <textarea value={text} onChange={handleChange} className='w-full h-96 border-2 border-gray-300 resize-none mt-1 p-1 rounded'></textarea>
    </div>
  )
}

export default InputBox