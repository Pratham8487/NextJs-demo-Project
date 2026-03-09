export interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
  duration: string;
  level: string;
  lessons: number;
  learningOutcomes: string[];
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Guitar Mastery",
    slug: "guitar-mastery",
    description:
      "Master acoustic and electric guitar with lessons covering chords, scales, fingerstyle techniques, and solo improvisation.",
    fullDescription:
      "This comprehensive guitar course takes you from foundational chord shapes to advanced solo improvisation. You'll learn essential strumming patterns, fingerstyle techniques, music theory applied to the fretboard, and how to play across multiple genres including rock, blues, folk, and pop. Each module builds on the last, giving you a structured path to becoming a confident guitarist capable of performing, composing, and jamming with other musicians.",
    price: 99.99,
    instructor: "John Doe",
    isFeatured: true,
    image: "/courses/guitar.jpg",
    duration: "12 weeks",
    level: "Beginner to Intermediate",
    lessons: 48,
    learningOutcomes: [
      "Master essential open and barre chord shapes",
      "Play fingerstyle patterns and arpeggios",
      "Understand scales and modes on the fretboard",
      "Improvise solos using pentatonic and blues scales",
      "Develop rhythm and strumming techniques",
      "Perform songs across multiple genres",
    ],
  },
  {
    id: 2,
    title: "Piano Fundamentals",
    slug: "piano-fundamentals",
    description:
      "Build a strong foundation in piano with hand positioning, scales, chord progressions, and beautiful melodies.",
    fullDescription:
      "Start your piano journey with proper technique from day one. This course covers correct hand positioning, posture, major and minor scales, chord inversions, and sight reading. You'll progress through classical and contemporary pieces while building muscle memory and musical ear training. By the end, you'll be able to read sheet music, play with both hands independently, and perform a repertoire of songs with confidence.",
    price: 89.99,
    instructor: "Sarah Johnson",
    isFeatured: true,
    image: "/courses/piano.jpg",
    duration: "10 weeks",
    level: "Beginner",
    lessons: 40,
    learningOutcomes: [
      "Develop proper hand positioning and posture",
      "Read sheet music and understand notation",
      "Play major and minor scales fluently",
      "Understand chord progressions and inversions",
      "Perform classical and contemporary pieces",
      "Build independence between left and right hands",
    ],
  },
  {
    id: 3,
    title: "Music Production Studio",
    slug: "music-production-studio",
    description:
      "Create professional music tracks using modern DAWs with beat making, sound design, and mixing techniques.",
    fullDescription:
      "Dive into the world of digital music production and learn to create professional-quality tracks from scratch. This course covers DAW workflows, MIDI programming, sampling, synthesis, beat construction, arrangement techniques, mixing, and basic mastering. You'll work with industry-standard tools and techniques used by today's top producers, building a portfolio of original tracks across electronic, pop, and hip-hop genres.",
    price: 129.99,
    instructor: "Alex Carter",
    isFeatured: true,
    image: "/courses/edm.jpg",
    duration: "14 weeks",
    level: "Intermediate",
    lessons: 56,
    learningOutcomes: [
      "Navigate and produce in a professional DAW",
      "Design unique sounds using synthesis and sampling",
      "Construct beats and program drum patterns",
      "Arrange complete tracks with intro, verse, and chorus",
      "Mix tracks with EQ, compression, and effects",
      "Apply basic mastering techniques for release-ready audio",
    ],
  },
  {
    id: 4,
    title: "Vocal Training Pro",
    slug: "vocal-training-pro",
    description:
      "Improve your singing with breathing techniques, pitch control exercises, vocal range development, and stage confidence.",
    fullDescription:
      "Transform your voice with professional vocal training designed for singers of all levels. This course focuses on diaphragmatic breathing, vocal warm-ups, pitch accuracy, tone quality, and range expansion. You'll also learn performance techniques including microphone control, stage presence, and how to connect emotionally with your audience. Each lesson includes practical exercises you can practice daily to see real vocal improvement.",
    price: 74.99,
    instructor: "Emma Wilson",
    isFeatured: true,
    image: "/courses/singing.jpg",
    duration: "8 weeks",
    level: "All Levels",
    lessons: 32,
    learningOutcomes: [
      "Master diaphragmatic breathing for vocal support",
      "Improve pitch accuracy and intonation",
      "Expand your vocal range safely",
      "Develop a rich, consistent tone quality",
      "Build stage confidence and performance skills",
      "Learn proper microphone technique",
    ],
  },
  {
    id: 5,
    title: "DJ Performance Academy",
    slug: "dj-performance-academy",
    description:
      "Learn the art of DJing including beat matching, mixing transitions, live performance techniques, and crowd engagement.",
    fullDescription:
      "Step behind the decks and learn everything you need to become a skilled DJ. This course covers beat matching by ear and with software, seamless transitions, EQ mixing, effects usage, track selection, and reading a crowd. You'll practice with both digital and vinyl setups, learn to build energy through a set, and develop your unique DJ identity. The course culminates in planning and executing a full live set.",
    price: 109.99,
    instructor: "Jason King",
    isFeatured: false,
    image: "/courses/hiphop.jpg",
    duration: "10 weeks",
    level: "Beginner to Intermediate",
    lessons: 38,
    learningOutcomes: [
      "Beat match tracks manually and with software",
      "Execute smooth transitions and creative mixes",
      "Use EQ, filters, and effects musically",
      "Read a crowd and select appropriate tracks",
      "Structure and plan a complete DJ set",
      "Develop your unique style and brand as a DJ",
    ],
  },
  {
    id: 6,
    title: "Music Theory Essentials",
    slug: "music-theory-essentials",
    description:
      "Understand scales, harmony, rhythm patterns, and chord structures to strengthen your musical knowledge and creativity.",
    fullDescription:
      "Unlock the language of music with this comprehensive theory course. Starting from the basics of notation and rhythm, you'll progress through scales, intervals, chord construction, harmonic analysis, and form. This course bridges the gap between playing by ear and truly understanding what makes music work. Whether you're a singer, instrumentalist, or producer, music theory will elevate your creativity and communication with other musicians.",
    price: 79.99,
    instructor: "Emily Clark",
    isFeatured: true,
    image: "/courses/music-theory.jpg",
    duration: "8 weeks",
    level: "Beginner",
    lessons: 30,
    learningOutcomes: [
      "Read and write standard music notation",
      "Understand major and minor scales and modes",
      "Construct and identify chords and intervals",
      "Analyze harmonic progressions in songs",
      "Apply rhythm and time signature concepts",
      "Use theory to compose and arrange music",
    ],
  },
  {
    id: 7,
    title: "Drumming Basics",
    slug: "drumming-basics",
    description:
      "Learn rhythm fundamentals, drum kit setup, basic grooves, fills, and timing to build a solid percussive foundation.",
    fullDescription:
      "Get behind the kit and start drumming with confidence. This course teaches you proper stick technique, drum kit setup and tuning, essential rock and pop grooves, fills and transitions, and how to play with a metronome. You'll develop limb independence, learn to read drum notation, and build the coordination needed to play along with songs. Perfect for complete beginners who want a solid rhythmic foundation.",
    price: 69.99,
    instructor: "David Brown",
    isFeatured: false,
    image: "/courses/drums.jpg",
    duration: "8 weeks",
    level: "Beginner",
    lessons: 28,
    learningOutcomes: [
      "Set up and tune a drum kit properly",
      "Hold drumsticks with correct technique",
      "Play essential rock, pop, and funk grooves",
      "Execute basic fills and smooth transitions",
      "Read drum notation and rhythm charts",
      "Develop limb independence and coordination",
    ],
  },
  {
    id: 8,
    title: "Songwriting Workshop",
    slug: "songwriting-workshop",
    description:
      "Develop your songwriting skills by learning lyric writing, melody creation, chord progressions, and storytelling through music.",
    fullDescription:
      "Turn your musical ideas into complete, polished songs. This workshop covers every aspect of songwriting from finding inspiration and crafting lyrics to building melodies, choosing chord progressions, and structuring arrangements. You'll study techniques used by great songwriters across genres, complete weekly writing assignments, and receive feedback on your work. By the end, you'll have a collection of original songs ready to perform or record.",
    price: 119.99,
    instructor: "Ryan Walker",
    isFeatured: false,
    image: "/courses/songwriting.jpg",
    duration: "10 weeks",
    level: "Intermediate",
    lessons: 36,
    learningOutcomes: [
      "Find inspiration and overcome writer's block",
      "Write compelling lyrics with narrative structure",
      "Create memorable melodies and hooks",
      "Choose effective chord progressions for any mood",
      "Structure songs with verse, chorus, and bridge",
      "Polish and revise songs to a professional standard",
    ],
  },
  {
    id: 9,
    title: "Jazz Improvisation Lab",
    slug: "jazz-improvisation-lab",
    description:
      "Explore advanced improvisation techniques used in jazz music and learn to create expressive solos and chord voicings.",
    fullDescription:
      "Take your musicianship to the next level with this immersive jazz improvisation course. You'll study the language of jazz through transcription, learn to navigate complex chord changes, explore modes and scales for soloing, and develop your own improvisational voice. The course includes play-along tracks, real-time improvisation exercises, and analysis of solos by jazz legends. Suitable for any instrument.",
    price: 109.99,
    instructor: "Michael Davis",
    isFeatured: true,
    image: "/courses/jazz-piano.jpg",
    duration: "12 weeks",
    level: "Advanced",
    lessons: 44,
    learningOutcomes: [
      "Navigate ii-V-I progressions and jazz standards",
      "Apply modes and bebop scales in improvisation",
      "Transcribe and analyze solos by jazz masters",
      "Develop rhythmic variety and phrasing in solos",
      "Comp chords and voice lead through changes",
      "Build confidence performing in a jazz ensemble",
    ],
  },
  {
    id: 10,
    title: "Film Scoring Academy",
    slug: "film-scoring-academy",
    description:
      "Learn how to compose cinematic music for films, games, and media using orchestration and modern digital production tools.",
    fullDescription:
      "Compose powerful music for visual media in this hands-on film scoring course. You'll learn orchestration fundamentals, how to spot a scene, sync music to picture, and create emotional impact through harmony, rhythm, and instrumentation. The course combines traditional composition techniques with modern virtual instruments and DAW workflows. You'll score multiple scenes across different genres and build a demo reel for your portfolio.",
    price: 129.99,
    instructor: "Samuel Wright",
    isFeatured: true,
    image: "/courses/film-scoring.jpg",
    duration: "14 weeks",
    level: "Intermediate to Advanced",
    lessons: 50,
    learningOutcomes: [
      "Spot scenes and sync music to visual media",
      "Orchestrate for strings, brass, woodwinds, and percussion",
      "Create emotional impact through harmonic choices",
      "Work with virtual instruments and sample libraries",
      "Score across genres: drama, action, comedy, horror",
      "Build a professional film scoring demo reel",
    ],
  },
  {
    id: 11,
    title: "Bass Guitar Essentials",
    slug: "bass-guitar-essentials",
    description:
      "Understand bass rhythms, grooves, slap techniques, and walking bass lines for beginners and intermediate players.",
    fullDescription:
      "Become the backbone of any band with this comprehensive bass guitar course. You'll learn proper technique, essential groove patterns across rock, funk, R&B, and jazz, slap and pop technique, walking bass lines, and how to lock in with a drummer. The course emphasizes feel, timing, and musicality — the qualities that separate a good bassist from a great one. Includes play-along tracks for every lesson.",
    price: 79.99,
    instructor: "Chris Martin",
    isFeatured: false,
    image: "/courses/bass.jpg",
    duration: "10 weeks",
    level: "Beginner to Intermediate",
    lessons: 36,
    learningOutcomes: [
      "Play essential bass grooves in multiple genres",
      "Execute slap and pop techniques with confidence",
      "Construct walking bass lines for jazz standards",
      "Lock in rhythmically with drums and percussion",
      "Read bass tablature and standard notation",
      "Develop a strong sense of feel and dynamics",
    ],
  },
  {
    id: 12,
    title: "Live Performance Mastery",
    slug: "live-performance-mastery",
    description:
      "Develop stage presence, audience connection, and live performance techniques to perform confidently on any stage.",
    fullDescription:
      "Whether you're performing at an open mic or a sold-out venue, this course prepares you to own the stage. You'll learn how to manage performance anxiety, engage with an audience, use stage movement effectively, handle technical aspects like sound checks and monitoring, and build a setlist that creates an unforgettable experience. Includes video analysis of iconic performances and practical exercises to build your confidence.",
    price: 99.99,
    instructor: "Liam Parker",
    isFeatured: false,
    image: "/courses/live-performance.jpg",
    duration: "6 weeks",
    level: "All Levels",
    lessons: 24,
    learningOutcomes: [
      "Overcome stage fright and performance anxiety",
      "Engage and connect with any audience",
      "Use stage movement and body language effectively",
      "Handle sound checks and monitor setups",
      "Build setlists that create energy and flow",
      "Analyze and learn from iconic live performances",
    ],
  },
];
