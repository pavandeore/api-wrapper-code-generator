import React, { useEffect, useRef } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import outputBodyState from '../Atoms/outputBodyAtom';

const OutputBox = () => {
    const [outputBody, setOutputBody] = useRecoilState(outputBodyState);
    const copyRef = useRef(null);

    useEffect(() => {

    }, [outputBody])

    const copyTextHandler = () => { 
        navigator.clipboard.writeText(outputBody.data)
        copyRef.current.innerHTML = 'copied'

        setTimeout(() => {
            copyRef.current.innerHTML = 'copy'
        }, 1000);
    }

  return (
    <div>
        <div className='flex justify-between'>
            <span>Generated API wrapper code</span>
            <button ref={copyRef} onClick={copyTextHandler} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-4 rounded'>
                copy
            </button>
        </div>
        <pre className='w-full h-96 border-2 border-gray-300 resize-none mt-1 p-1 rounded overflow-y-scroll whitespace-pre-wrap'>{outputBody.data}</pre>
    </div>
  )
}

export default OutputBox