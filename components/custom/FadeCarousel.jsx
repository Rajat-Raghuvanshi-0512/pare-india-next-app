import { useState, useEffect } from 'react'

const FadeCarousel = ({ children }) => {
  const [counter, setCounter] = useState(1)
  const [pause, setPause] = useState(false)
  const content = children

  const handleNext = () => {
    if (counter !== content.length) {
      setCounter(counter + 1)
    } else {
      setCounter(1)
    }
  }

  const handleMouse = () => {
    setPause(!pause)
  }

  useEffect(() => {
    let interval = setInterval(() => {
      if (!pause) {
        handleNext()
      } else {
        clearInterval(interval)
      }
    }, 3000)
    return () => clearInterval(interval)
  })

  return (
    <>
      <div className="relative" onMouseEnter={handleMouse} onMouseLeave={handleMouse}>
        {content.map((item, index) => (
          <div
            className={
              counter - 1 === index
                ? 'absolute left-0 top-0 z-[200] flex  h-screen w-full animate-pulse items-center justify-center'
                : 'hidden'
            }
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  )
}

export default FadeCarousel
