import React, { useEffect, useState } from 'react'
import "../App.css"

const Progressbar = ({progress}) =>{
    const [animationProgress, setAnimationProgress] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setAnimationProgress(progress)
        },100)
    },[progress])

    return(
        <>
        <div className='outer'>
            <div className='inner'
            style={{
                //width:`${progress}px`,
                transform:`translateX(${animationProgress-100}%)`,
                color:progress < 10 ? "red":"white"
            }}
            role='progressbar'
            aria-valuenow={progress}
            aria-valuemax={'100'}
            aria-valuemin={'0'}
            
            >
            {progress}%
            </div>
            
        </div>

        
        </>
    )

}
const ProgressBar = () => {
    const bars = [5, 20, 30, 50, 60, 90, 100];
  return (
    <div>
        <h1>Progress Bar</h1>
        {
            bars.map((value, index) => (
                <Progressbar progress={value} key={index} />
            ))
        }
       
        
    </div>
  )
}

export default ProgressBar