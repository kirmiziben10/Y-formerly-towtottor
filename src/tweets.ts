export interface Tweet {
    id: string;
    user_id: string; 
    content: string;
    likes: number;
    retweets: number;
    timestamp: string;
    reply_to?:string;
    image?:string;
}

export const tweets: Tweet[] = [
  {
    "id": "t_001",
    "user_id": "u_1",
    "content": "The limits of my language mean the limits of my world. We need new words for digital emotions.",
    "likes": 450,
    "retweets": 120,
    "timestamp": "2025-10-20T08:00:00Z"
  },
  {
    "id": "t_002",
    "user_id": "u_3",
    "content": "There is something profoundly calming about the way moss reclaims concrete. Nature is the ultimate slow algorithm.",
    "likes": 890,
    "retweets": 340,
    "timestamp": "2025-10-20T08:15:00Z"
  },
  {
    "id": "t_003",
    "user_id": "u_6",
    "content": "Anxiety is just experiencing the future before you've earned it. Be here now.",
    "likes": 2100,
    "retweets": 800,
    "timestamp": "2025-10-20T09:00:00Z"
  },
  {
    "id": "t_004",
    "user_id": "u_4",
    "content": "Just finished running the simulation. It turns out gravity is just space-time trying to hug matter.",
    "likes": 3200,
    "retweets": 1500,
    "timestamp": "2025-10-20T09:30:00Z"
  },
  {
    "id": "t_005",
    "user_id": "u_7",
    "content": "The Fibonacci sequence isn't just math; it's the universe's favorite design pattern.",
    "image": "https://placehold.co/600x400/png?text=Golden+Ratio",
    "likes": 560,
    "retweets": 90,
    "timestamp": "2025-10-20T10:00:00Z"
  },
  {
    "id": "t_006",
    "user_id": "u_2",
    "content": "Blue is not a color. It is a frequency. We are painting with vibrations.",
    "reply_to": "t_005",
    "likes": 120,
    "retweets": 10,
    "timestamp": "2025-10-20T10:05:00Z"
  },
  {
    "id": "t_007",
    "user_id": "u_5",
    "content": "Bach's fugues are essentially multi-threaded processing for the human soul.",
    "likes": 670,
    "retweets": 230,
    "timestamp": "2025-10-20T11:00:00Z"
  },
  {
    "id": "t_008",
    "user_id": "u_9",
    "content": "Is consciousness a noun or a verb? I'm starting to think it's a frequency.",
    "likes": 880,
    "retweets": 400,
    "timestamp": "2025-10-20T12:00:00Z"
  },
  {
    "id": "t_009",
    "user_id": "u_8",
    "content": "3AM at the airport. The liminality is palpable. We are nowhere and everywhere.",
    "likes": 2300,
    "retweets": 560,
    "timestamp": "2025-10-20T13:45:00Z"
  },
  {
    "id": "t_010",
    "user_id": "u_10",
    "content": "Holding a fossil is the only form of time travel we have. 65 million years in the palm of my hand.",
    "likes": 1200,
    "retweets": 300,
    "timestamp": "2025-10-20T14:20:00Z"
  },
  {
    "id": "t_011",
    "user_id": "u_1",
    "content": "We are drowning in information but starving for wisdom. - E.O. Wilson",
    "likes": 5000,
    "retweets": 2000,
    "timestamp": "2025-10-20T15:00:00Z"
  },
  {
    "id": "t_012",
    "user_id": "u_4",
    "content": "If the multiverse theory is true, there is a universe where I understood that lecture on string theory.",
    "likes": 4500,
    "retweets": 1200,
    "timestamp": "2025-10-20T16:00:00Z"
  },
  {
    "id": "t_013",
    "user_id": "u_7",
    "content": "Fractals are proof that complexity arises from simplicity iterated.",
    "likes": 340,
    "retweets": 45,
    "timestamp": "2025-10-20T16:30:00Z"
  },
  {
    "id": "t_014",
    "user_id": "u_6",
    "content": "We suffer more often in imagination than in reality.",
    "reply_to": "t_003",
    "likes": 890,
    "retweets": 200,
    "timestamp": "2025-10-20T17:00:00Z"
  },
  {
    "id": "t_015",
    "user_id": "u_3",
    "content": "Why do we design cities for cars when we should design them for humans and trees?",
    "likes": 6700,
    "retweets": 2300,
    "timestamp": "2025-10-20T18:00:00Z"
  },
  {
    "id": "t_016",
    "user_id": "u_5",
    "content": "Silence is not the absence of sound, but a specific note we have forgotten how to hear.",
    "likes": 450,
    "retweets": 120,
    "timestamp": "2025-10-20T19:00:00Z"
  },
  {
    "id": "t_017",
    "user_id": "u_2",
    "content": "Shadows are just light's way of sculpting volume.",
    "likes": 320,
    "retweets": 40,
    "timestamp": "2025-10-20T19:30:00Z"
  },
  {
    "id": "t_018",
    "user_id": "u_9",
    "content": "The brain is the only object in the known universe that named itself.",
    "likes": 12000,
    "retweets": 5600,
    "timestamp": "2025-10-20T20:00:00Z"
  },
  {
    "id": "t_019",
    "user_id": "u_10",
    "content": "Civilization is a thin crust over a volcano of entropy.",
    "likes": 230,
    "retweets": 50,
    "timestamp": "2025-10-20T21:00:00Z"
  },
  {
    "id": "t_020",
    "user_id": "u_8",
    "content": "Nostalgia is a glitch in our memory compression algorithm.",
    "likes": 890,
    "retweets": 120,
    "timestamp": "2025-10-20T22:00:00Z"
  },
  {
    "id": "t_021",
    "user_id": "u_1",
    "content": "Reading Dostoevsky feels like surgery without anesthesia.",
    "likes": 450,
    "retweets": 80,
    "timestamp": "2025-10-20T23:00:00Z"
  },
  {
    "id": "t_022",
    "user_id": "u_4",
    "content": "Quantum entanglement: spooky action at a distance, or just the universe refusing to let go?",
    "likes": 670,
    "retweets": 150,
    "timestamp": "2025-10-21T08:00:00Z"
  },
  {
    "id": "t_023",
    "user_id": "u_7",
    "content": "Code is poetry that does something.",
    "likes": 900,
    "retweets": 300,
    "timestamp": "2025-10-21T09:00:00Z"
  },
  {
    "id": "t_024",
    "user_id": "u_5",
    "content": "Minor keys aren't sad; they are just introspection with sound.",
    "likes": 410,
    "retweets": 50,
    "timestamp": "2025-10-21T10:00:00Z"
  },
  {
    "id": "t_025",
    "user_id": "u_3",
    "content": "The best architect is time.",
    "likes": 300,
    "retweets": 40,
    "timestamp": "2025-10-21T11:00:00Z"
  },
  {
    "id": "t_026",
    "user_id": "u_6",
    "content": "You don't have to have an opinion on everything. It's okay to just observe.",
    "likes": 5000,
    "retweets": 1200,
    "timestamp": "2025-10-21T12:00:00Z"
  },
  {
    "id": "t_027",
    "user_id": "u_9",
    "content": "Sleep is just a nightly defragmentation of the hard drive.",
    "likes": 600,
    "retweets": 100,
    "timestamp": "2025-10-21T13:00:00Z"
  },
  {
    "id": "t_028",
    "user_id": "u_2",
    "content": "Symmetry is overrated. Give me the beauty of the asymmetrical, the flawed, the real.",
    "likes": 350,
    "retweets": 60,
    "timestamp": "2025-10-21T14:00:00Z"
  },
  {
    "id": "t_029",
    "user_id": "u_10",
    "content": "We are star stuff contemplating the stars. Recursive cosmology.",
    "likes": 2000,
    "retweets": 500,
    "timestamp": "2025-10-21T15:00:00Z"
  },
  {
    "id": "t_030",
    "user_id": "u_8",
    "content": "The smell of old books is the smell of decomposition, yet it smells like life.",
    "likes": 780,
    "retweets": 200,
    "timestamp": "2025-10-21T16:00:00Z"
  }
]