import { useContext, useState } from "react";
import { useParams, useLocation} from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import { users } from "./users";
import { tweets } from "./tweets";
import type { Tweet } from "./tweets";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post"

export default function Profile() {
  const { handle } = useParams()
  const location = useLocation()
  console.log(handle)
  let user;

  if (handle === undefined) {
    user = users.find((u) => {
      return u.id === "u_0"
    });
  } else {
    user = users.find((u) => {
      return u.handle === handle
    });
  }

  const { theme, setTheme } = useContext(ThemeContext);
  const [tweetList, setTweetList] = useState<Tweet[]>(()=>tweets.filter((t)=>t.user_id===user?.id));
  console.log(tweetList)

  return (
    <div
      className={
        "bg-zinc-50 dark:bg-black text-black dark:text-white flex justify-center min-h-screen w-full transition-colors duration-300 " +
        theme
      }
    >
      <div className="w-316.25 flex flex-row min-h-screen">
        <Sidebar />
        <main className="flex flex-row space-between content-between w-262.5">
          <div className="flex flex-col w-150 border-zinc-300 dark:border-zinc-800 border-r">
            <div className="flex flex-row items-center justify-start backdrop-blur-sm z-50 w-full h-13.5 border-zinc-300 dark:border-zinc-800 border-b shrink-0 sticky top-0">
              <h1>{user?.name}</h1>
            </div>
            <div className="flex flex-col">
              <div className="h-50 bg-gray-500"></div>
              <div className="flex flex-row items-end relative h-20 border-b border-zinc-300 dark:border-zinc-800">
                <div className="size-30 rounded-full absolute inset-x-2 border-2 -inset-y-15 object-contain bg-white dark:bg-black">
                  <div className="flex place-items-center h-full w-full"><img className="rounded-full " src={user?.avatar} alt="" /></div>
                </div>
                <div>
                  <h1 className=" ml-35">This is the profile for {user?.handle}</h1>
                </div>
              </div>
            </div>

            {tweetList.map(t => (
                      <Post key={t.id} tweet={t} />
                    ))}
          </div>
        </main>
      </div>
    </div>
  );
}
