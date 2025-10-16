'use client'
import { FormEvent, useRef, useState } from "react";
export default function Home() {

  const audioRef = useRef<HTMLAudioElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [text, setText] = useState("")


  const questionAnswer = () => {
    const yes = "yes"
    const no = "no"
    const randomIndex = Math.floor(Math.random() * 2)
    const result = randomIndex === 0 ? yes : no
    return result
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const answer = questionAnswer()
    playAnswer(`../${answer}.m4a`)
  }

  const playAnswer = (answer: string) => {
    const audioElement = audioRef.current
    if (audioElement instanceof HTMLAudioElement) {
      audioElement.src = answer
      audioElement.play().then(() => {
        setIsPlaying(true)
        setText("")
      })
    }

    if (videoRef.current) {
      videoRef.current.play()
    }
  }


  return (
    <div className="flex justify-center">
      <video ref={videoRef} preload="auto" onClick={(e) => e.currentTarget.play()} muted className="h-screen w-full object-fill">
        <source src="../shell43.mp4" />
        <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
      </video>

      {!isPlaying && <div className={`absolute w-full h-full flex flex-col justify-center items-center`}>
        <form onSubmit={onSubmit} className="max-w-2/3 flex flex-col justify-center items-center bg-white/30 backdrop-blur-xs rounded-2xl p-5 gap-6 animate-[fadeIn_0.8s_ease-in-out_1]">
          <h1 className="text-5xl dark:text-black">Спроси у Волшебной ракушки</h1>
          <input type="text" placeholder="Ваш вопрос..." value={text} onChange={(e) => setText(e.target.value)} className="w-full bg-white backdrop-blur-xs border-2 rounded-lg h-12 text-2xl dark:text-black" />
        </form>
      </div>
      }
    </div>
  );
}
