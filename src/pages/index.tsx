import { BigBox, EmojiLine, YellowBox } from '../components/Component'

export default function Home() {
  return (
    <div className="flex flex-col bg-green-400 h-screen items-center justify-center">
      <BigBox />
      <EmojiLine />
      <YellowBox />
      <YellowBox />
      <EmojiLine />
    </div>
  )
}
