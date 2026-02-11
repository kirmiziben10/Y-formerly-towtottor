import "../index.css";
import { users } from "../users"
import type { Tweet } from "../tweets"
import { Image, MapPin } from "lucide-react"

interface NewpostProps {
  onPost: (tweet: Tweet) => void;
}

export default function Newpost({ onPost }: NewpostProps) {
  const user = users.find((u) => u.id === "u_0")

  function postTweet(text: string) {
    const newTweet: Tweet = {
      id: "t_" + Date.now(),
      user_id: user?.id || "u_0",
      content: text,
      likes: Math.floor(Math.random() * 1000) + 1000,
      retweets: Math.floor(Math.random() * 1000) + 1000,
      timestamp: new Date().toISOString()
    };
    onPost(newTweet);
    const input = document.getElementById("tweet-text") as HTMLInputElement;
    if (input) input.value = "";
  }

  return (
    <section className="flex flex-col h-30 w-full border-zinc-300 dark:border-zinc-800 border-b">
      <div className="flex flex-row items-start">
        <div className="flex place-items-center size-15 ml-2">
          <img
            className="bg-white dark:bg-black size-11 object-contain rounded-full"
            src={user?.avatar}
            alt="Profile picture"
          />
        </div>
        <div className="flex flex-col w-full min-h-16 m-0">
          <input
            id="tweet-text"
            placeholder="What's happening?"
            className="resize-none h-full text-black dark:text-white w-full text-xl min-h-16"
          ></input>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row h-12 gap-2 items-center"><Image className="cursor-pointer hover:opacity-50" size={18} /><MapPin className="cursor-pointer hover:opacity-50" size={18} /></div>
            <div><button className="cursor-pointer bg-zinc-700 text-white rounded-full pl-4.5 pr-4.5 p-1.75 mr-3.5" onClick={() => postTweet((document.getElementById("tweet-text") as HTMLInputElement)?.value || "")}>Post</button></div>
          </div>
        </div>
      </div>
    </section>
  );
}
