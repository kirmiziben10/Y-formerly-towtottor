export interface Tweet {
  id: string;
  user_id: string;
  content: string;
  likes: number;
  retweets: number;
  timestamp: string;
  reply_to?: string;
  image?: string;
}

export const tweets: Tweet[] = [
  {
    "id": "t_001",
    "user_id": "u_7",
    "content": "Just got off a call with a founder who described their product as \"uber for meditation\" and I genuinely cannot tell if it's genius or parody anymore",
    "likes": 2847,
    "retweets": 412,
    "timestamp": "2026-02-10T09:12:00Z"
  },
  {
    "id": "t_002",
    "user_id": "u_1",
    "content": "hot take: most \"senior\" engineers I interview can't explain how a hash map works but will argue about microservices vs monoliths for 45 minutes",
    "likes": 8923,
    "retweets": 1847,
    "timestamp": "2026-02-10T08:45:00Z"
  },
  {
    "id": "t_003",
    "user_id": "u_4",
    "content": "new piece just dropped 🎨 been working on this one for three weeks straight. sleep is a myth anyway",
    "image": "https://placehold.co/600x400/d4a373/fff?text=New+Illustration",
    "likes": 1456,
    "retweets": 203,
    "timestamp": "2026-02-10T07:30:00Z"
  },
  {
    "id": "t_004",
    "user_id": "u_6",
    "content": "12 hour shift done. someone brought donuts to the break room at 3am and honestly that's the only reason I survived. night shift nurses are a different breed",
    "likes": 4521,
    "retweets": 342,
    "timestamp": "2026-02-10T06:15:00Z"
  },
  {
    "id": "t_005",
    "user_id": "u_3",
    "content": "told my students that the roman empire fell partly because of economic inequality and one kid goes \"so basically they had a housing crisis too\" and honestly… yeah",
    "likes": 34200,
    "retweets": 8400,
    "timestamp": "2026-02-09T19:22:00Z"
  },
  {
    "id": "t_006",
    "user_id": "u_10",
    "content": "just left big tech and joined a 12-person startup. day one they asked me to fix the CI pipeline, write a blog post, AND onboard myself. I love it here (I am terrified)",
    "likes": 6789,
    "retweets": 823,
    "timestamp": "2026-02-09T17:45:00Z"
  },
  {
    "id": "t_007",
    "user_id": "u_2",
    "content": "reading papers about dopamine reward pathways at 1am while my own reward pathway is begging me to go to sleep. the irony is not lost on me",
    "likes": 2341,
    "retweets": 187,
    "timestamp": "2026-02-09T16:30:00Z"
  },
  {
    "id": "t_008",
    "user_id": "u_8",
    "content": "my cat just knocked my laptop off the table during a zoom interview. the interviewer laughed so hard he forgot his next question. I might actually get this job BECAUSE of my cat",
    "likes": 18700,
    "retweets": 3200,
    "timestamp": "2026-02-09T15:00:00Z"
  },
  {
    "id": "t_009",
    "user_id": "u_5",
    "content": "spent 4 hours debugging only to find out I was running the wrong branch. I'm going for a walk.",
    "likes": 7823,
    "retweets": 1204,
    "timestamp": "2026-02-09T14:20:00Z"
  },
  {
    "id": "t_010",
    "user_id": "u_9",
    "content": "unpopular opinion: deep dish isn't pizza, it's a casserole. I will not be taking questions at this time",
    "likes": 5612,
    "retweets": 987,
    "timestamp": "2026-02-09T13:00:00Z"
  },
  {
    "id": "t_011",
    "user_id": "u_12",
    "content": "new IPCC data just came out. tldr: we're not on track but the narrative that \"it's too late\" is factually wrong and counterproductive. thread incoming 🧵",
    "likes": 12400,
    "retweets": 6700,
    "timestamp": "2026-02-09T12:00:00Z"
  },
  {
    "id": "t_012",
    "user_id": "u_11",
    "content": "golden hour in chicago hits different in february. bundled up in 4 layers but the light was worth it",
    "image": "https://placehold.co/600x400/e8985a/fff?text=Chicago+Golden+Hour",
    "likes": 3456,
    "retweets": 234,
    "timestamp": "2026-02-09T11:30:00Z"
  },
  {
    "id": "t_013",
    "user_id": "u_1",
    "content": "reminder that if your standup takes more than 15 min you're just having a meeting",
    "likes": 15600,
    "retweets": 4200,
    "timestamp": "2026-02-09T10:00:00Z"
  },
  {
    "id": "t_014",
    "user_id": "u_7",
    "content": "the fact that we normalized \"hustle culture\" but not \"actually taking your PTO\" says everything about where we are as a society",
    "likes": 23400,
    "retweets": 5600,
    "timestamp": "2026-02-09T09:15:00Z"
  },
  {
    "id": "t_015",
    "user_id": "u_3",
    "content": "parent teacher conferences today. one parent told me their kid hasn't stopped talking about the french revolution since last week. this is why I teach",
    "likes": 8900,
    "retweets": 567,
    "timestamp": "2026-02-08T20:00:00Z"
  },
  {
    "id": "t_016",
    "user_id": "u_8",
    "content": "screenwriting tip nobody asked for: if your character's motivation is \"they want to save the world\" you don't actually have a character yet",
    "likes": 4230,
    "retweets": 890,
    "timestamp": "2026-02-08T18:45:00Z"
  },
  {
    "id": "t_017",
    "user_id": "u_5",
    "content": "just open sourced my rust CLI tool for managing dotfiles. it's not perfect but it's mine and it works and I'm proud of it\n\ngithub.com/devonpark/dotm",
    "likes": 2890,
    "retweets": 456,
    "timestamp": "2026-02-08T17:30:00Z"
  },
  {
    "id": "t_018",
    "user_id": "u_2",
    "content": "my advisor just told me my thesis draft is \"almost there\" which in academia means I have at least 6 more months of revisions",
    "likes": 6700,
    "retweets": 1200,
    "timestamp": "2026-02-08T16:00:00Z"
  },
  {
    "id": "t_019",
    "user_id": "u_10",
    "content": "pro tip for anyone joining a startup: the roadmap is a suggestion, the deadline is real, and the \"quick sync\" is never quick",
    "likes": 3400,
    "retweets": 567,
    "timestamp": "2026-02-08T15:00:00Z"
  },
  {
    "id": "t_020",
    "user_id": "u_9",
    "content": "celtics game was insane tonight. tatum dropped 42 and I screamed so loud my neighbor texted me asking if I was okay",
    "likes": 1890,
    "retweets": 234,
    "timestamp": "2026-02-08T23:30:00Z"
  },
  {
    "id": "t_021",
    "user_id": "u_4",
    "content": "client: \"can you make it pop more?\"\nme: \"can you define pop?\"\nclient: \"you know… pop\"\nme: *stares into the void*",
    "likes": 28900,
    "retweets": 7800,
    "timestamp": "2026-02-08T14:00:00Z"
  },
  {
    "id": "t_022",
    "user_id": "u_6",
    "content": "finished my 23rd book of the year! on track for 50 📚 current read: Project Hail Mary. if you haven't read it yet what are you even doing",
    "likes": 1230,
    "retweets": 89,
    "timestamp": "2026-02-08T12:00:00Z"
  },
  {
    "id": "t_023",
    "user_id": "u_12",
    "content": "people keep saying \"follow the science\" but then ignore scientists when they say inconvenient things. the relationship is one-directional and it's exhausting",
    "likes": 19200,
    "retweets": 4300,
    "timestamp": "2026-02-08T11:00:00Z"
  },
  {
    "id": "t_024",
    "user_id": "u_11",
    "content": "walked past the same alley for 3 years. today the light was finally right. sometimes the shot comes to you, you just have to be patient",
    "image": "https://placehold.co/600x400/4a6741/fff?text=Alley+Light",
    "likes": 5670,
    "retweets": 678,
    "timestamp": "2026-02-07T16:30:00Z"
  },
  {
    "id": "t_025",
    "user_id": "u_7",
    "content": "interviewed a whistleblower today. can't publish for another 2 weeks. sitting on a story this big is physically painful",
    "likes": 4500,
    "retweets": 890,
    "timestamp": "2026-02-07T21:00:00Z"
  },
  {
    "id": "t_026",
    "user_id": "u_1",
    "content": "started learning go this week. day 1: \"this is clean and simple I love it.\" day 3: \"why is error handling like this\"",
    "likes": 11200,
    "retweets": 2300,
    "timestamp": "2026-02-07T10:00:00Z"
  },
  {
    "id": "t_027",
    "user_id": "u_3",
    "content": "my 6 year old asked me why countries exist and I had to explain the concept of borders to someone who shares everything with her sister. humbling experience",
    "likes": 41000,
    "retweets": 9200,
    "timestamp": "2026-02-07T19:00:00Z"
  },
  {
    "id": "t_028",
    "user_id": "u_8",
    "content": "the barista life: regular customer ordered their usual and I had it ready before they even got to the counter. their face lit up and honestly that's my whole serotonin for today",
    "likes": 8900,
    "retweets": 1100,
    "timestamp": "2026-02-07T08:30:00Z"
  },
  {
    "id": "t_029",
    "user_id": "u_2",
    "content": "lab meeting went well! finally got clean results on the fMRI data after 3 months of noise. my PI actually smiled. I didn't know she could do that",
    "likes": 3400,
    "retweets": 234,
    "timestamp": "2026-02-07T17:00:00Z"
  },
  {
    "id": "t_030",
    "user_id": "u_9",
    "content": "SQL will outlive us all",
    "likes": 24500,
    "retweets": 6700,
    "timestamp": "2026-02-07T14:00:00Z"
  },
  {
    "id": "t_031",
    "user_id": "u_10",
    "content": "running a half marathon in the rain wasn't the plan but apparently my stubbornness doesn't check the weather app. new PR though 🏃‍♀️💪",
    "likes": 2100,
    "retweets": 145,
    "timestamp": "2026-02-07T11:00:00Z"
  },
  {
    "id": "t_032",
    "user_id": "u_5",
    "content": "every time I think \"this should be a simple feature\" I end up rewriting half the codebase. the cycle continues",
    "likes": 9800,
    "retweets": 2100,
    "timestamp": "2026-02-06T16:00:00Z"
  },
  {
    "id": "t_033",
    "user_id": "u_4",
    "content": "finally set up a proper invoicing system instead of chasing payments over email like a medieval debt collector. freelance life is 30% art 70% admin",
    "likes": 5600,
    "retweets": 890,
    "timestamp": "2026-02-06T13:00:00Z"
  },
  {
    "id": "t_034",
    "user_id": "u_12",
    "content": "our paper got accepted!! 🎉 two years of work, three rounds of revisions, and one existential crisis later",
    "likes": 7800,
    "retweets": 1200,
    "timestamp": "2026-02-06T10:00:00Z"
  },
  {
    "id": "t_035",
    "user_id": "u_6",
    "content": "night shift protip: the vending machine on floor 3 gives you two snacks if you press B4 and C2 at the same time. you didn't hear this from me",
    "likes": 15600,
    "retweets": 3400,
    "timestamp": "2026-02-06T03:00:00Z"
  },
  {
    "id": "t_036",
    "user_id": "u_11",
    "content": "PSA: if you see someone taking photos of what looks like nothing, we're not weird. the light is just really good on that specific patch of concrete right now. mind your business",
    "likes": 21000,
    "retweets": 5600,
    "timestamp": "2026-02-06T15:45:00Z"
  },
  {
    "id": "t_037",
    "user_id": "u_7",
    "content": "love how every tech CEO's apology follows the same template:\n1. we hear you\n2. we're doing better\n3. *does the exact same thing 6 months later*",
    "likes": 31200,
    "retweets": 8900,
    "timestamp": "2026-02-06T12:00:00Z"
  },
  {
    "id": "t_038",
    "user_id": "u_3",
    "content": "coaching 8 year olds in basketball is 90% reminding them which basket is theirs",
    "likes": 45000,
    "retweets": 11000,
    "timestamp": "2026-02-05T18:00:00Z"
  },
  {
    "id": "t_039",
    "user_id": "u_1",
    "content": "\"we should rewrite this in rust\" - me, every time I see a segfault in production at 2am",
    "likes": 6700,
    "retweets": 1400,
    "timestamp": "2026-02-05T02:15:00Z"
  },
  {
    "id": "t_040",
    "user_id": "u_8",
    "content": "update: I got the job. the cat is now listed as a reference",
    "reply_to": "t_008",
    "likes": 42000,
    "retweets": 8900,
    "timestamp": "2026-02-10T10:00:00Z"
  },
  {
    "id": "t_041",
    "user_id": "u_9",
    "content": "the A/B test results came back and the winning variant was the one where we literally changed nothing. sometimes the data humbles you",
    "likes": 8900,
    "retweets": 2300,
    "timestamp": "2026-02-05T11:00:00Z"
  },
  {
    "id": "t_042",
    "user_id": "u_2",
    "content": "explaining my research at thanksgiving:\n\nfamily: \"so what do you do?\"\nme: \"I look at brain scans\"\nfamily: \"can you tell what I'm thinking?\"\nme: \"...no\"\nfamily: *visible disappointment*",
    "likes": 14500,
    "retweets": 3200,
    "timestamp": "2026-02-05T20:00:00Z"
  },
  {
    "id": "t_043",
    "user_id": "u_10",
    "content": "hot take: the best product managers are the ones who say no to 80% of feature requests. your users don't actually want 47 settings menus",
    "likes": 5600,
    "retweets": 1200,
    "timestamp": "2026-02-05T09:00:00Z"
  },
  {
    "id": "t_044",
    "user_id": "u_4",
    "content": "drew my barista because they always remember my order. they cried. I cried. everyone in line was confused. great tuesday",
    "likes": 23000,
    "retweets": 4500,
    "timestamp": "2026-02-04T14:00:00Z"
  },
  {
    "id": "t_045",
    "user_id": "u_5",
    "content": "github copilot just autocompleted my resignation letter. it knows.",
    "likes": 56000,
    "retweets": 12000,
    "timestamp": "2026-02-04T16:00:00Z"
  }
]