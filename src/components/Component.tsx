import React from 'react'
import Image from 'next/image'

export function BigBox() {
  return (
    <div className="flex flex-col bg-blue-200 border p-6 text-center mt-10 font-serif">
      <h1 className="text-4xl text-green-400 font-semibold">
        🎉 ÁSGEIR SEÐLABANKASTJÓRI 🎉
      </h1>
      <p className="text-orange-400 font-semibold text-2xl mt-2">
        CELEBRATES LOWER INTEREST RATES!
      </p>
      <div className="mx-auto mt-6 mb-1 border-orange-400 border-2 border-solid rounded-full overflow-hidden w-40 h-40">
        <Image
          src="/assets/images/asgeir.jpg"
          alt="Asgeir"
          className="object-cover w-full h-full"
          width={160}
          height={160}
        />
      </div>
    </div>
  )
}

export function EmojiLine() {
  return (
    <div className="emoji-line text-2xl my-5">
      🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊
    </div>
  )
}

export function YellowBox() {
  return (
    <div className="flex bg-yellow-300 border-2 border-green-500 border-dashed p-4 my-5 w-1000 text-center">
      <p className="text-xl text-purple-500 font-semibold">
        Lower rates mean more fun!!! 💃🏼🕺🏼🎶 Party time with Ásgeir!!🎉🥳
      </p>
    </div>
  )
}
