import maja from "../pildid/maja.jpg";
import mina from "../pildid/mina.jpg";
import haigla from "../pildid/haigla.jpg";
import saaremaa from "../pildid/saaremaa.jpg";
import tita from "../pildid/tita.jpg";


const stageData = [
  {
    title: "Level 1: Architecture Student Era",
    caption: `"Design student by day, pure chaos by 5pm."`,
    altImage: maja,
    question: "What did I do after enrolling in architecture school?",
    choices: [
      {
        text: "Was scouted by IKEA to design 60s-inspired line of sustainable furniture for various pets.",
        correct: false,
        altCaption: "Too niche even for Sweden.",
      },
      {
        text: "Invented a revolutionary triangular toilet to fit triangular bathroom spaces (that nobody asked for nor was willing to pay for).",
        correct: false,
        altCaption: "Truly ahead of its time and plumbing standards.",
      },
      {
        text: "Dropped out to re-enroll in a warmer country.",
        correct: false,
        altCaption: "Honestly... tempting.",
      },
      {
        text: "Got full time job as well and got paralyzed by work overload. Who knew 80 work hours a week is enough to make you ill, depressed, and virtually useless?!",
        correct: true,
      },
    ],
  },
  {
    title: "Level 2: Post-Dropout Vibes. Not very good ones.",
    caption: `"I did not do much worth photographing those days so it was either this selfie or a picture of my 95-year-old grandpa lifting me from bed after shoulder surgery."`,
    altImage: mina,
    question: "What did I try next after leaving school?",
    choices: [
      {
        text: "Moved to Bali to become a yogini.",
        correct: false,
        altCaption: "Namastay away from that idea.",
      },
      {
        text: "Became a speed knitter.",
        correct: false,
        altCaption: "Hint: Needles were involved, but not like that.",
      },
      {
        text: "Joined a startup that exclusively sold PowerPoint templates.",
        correct: false,
        altCaption: "Maybe I should have?",
      },
      {
        text: "Enrolled in nursing school to become a radiographer for career safety and stability.",
        correct: true,
      },
    ],
  },
  {
    title: "Level 3: Radiographer Life",
    caption: `"Scan brain, repeat. Found no signs of job satisfaction."`,
    altImage: haigla,
    question: "What was a defining feature of my radiographer years?",
    choices: [
      {
        text: "Once got stuck into MRI machine because I forgot I had underwired bra on.",
        correct: false,
        altCaption: "Definitely would have made the news.",
      },
      {
        text: "Diagnosed my own burnout via X-ray.",
        correct: false,
        altCaption: "If only it showed existential dread.",
      },
      {
        text: "Got promoted after just 2 weeks.",
        correct: false,
        altCaption: "If only - radiographers hardly have a career ladder. Most work for 40 years and never get promoted",
      },
      {
        text: "COVID. As if this job was not exhausting enough to begin with. Felt like a true hero, probably were, too.",
        correct: true,
      },
    ],
  },
  {
    title: "Level 4: The Turning Point",
    caption: `"It started on Tinder date: some girls get killed, but I got married."`,
    altImage: saaremaa,
    question: "What reignited my creative fire?",
    choices: [
      {
        text: "My date gave me vitamin D claiming it was LSD but clarity came anyway",
        correct: false,
        altCaption: "X-ray rooms have no windows. I saw no daylight for half a year at the time. I might had started hallucinating had it actually happened",
      },
      {
        text: "Watched hundreds of artsy movies in foreign languages and decided to become a director.",
        correct: false,
        altCaption: "I have unfortunately no patience for symbolism. I would hate to misinterpret this gloomy shot of a woman smoking in the rain.",
      },
      {
        text: "Considered becoming a YouTube ASMR-artist.",
        correct: false,
        altCaption: "I did not do it, but I maybe I should. As a side hustle, if my schedule allows it, after you hire me.",
      },
      {
        text: "Had two babies who think I am the coolest person in the world. I am not, but they might believe it longer if I have a cool person job that I actually love doing.",
        correct: true,
      },
    ],
  },
  {
    title: "Level 5: The Leap",
    caption: `"I went back to work, did the EXACT same procedure on 20 patients in a row, and thought.. "Is THAT what I do for the rest of my life?"."`,
    altImage: tita,
    question: "What did I do after maternity leave?",
    choices: [
      {
        text: "Started a podcast where my toddlers commented Eurovision.",
        correct: false,
        altCaption: " 'Why all these people have no pants on, mom?'",
      },
      {
        text: "Launched a fashion line for babies with existential quotes.",
        correct: false,
        altCaption: "Crawl, Eat, Cry, Repeat. Marketed for babies but also work for 20-year-olds.",
      },
      {
        text: "Applied to be a peer councellor but was rejected for being too sad.",
        correct: false,
        altCaption: "My experience would have been more suitable for 'Look what happens if you don't...' kind of a thing.",
      },
      {
        text: "Quit my job, went to a career counselor, and chose to pursue software development.",
        correct: true,
      },
    ],
  },
  {
    title: "Final Level: Today",
    caption: `"Star student with self-made fanclub."`,
    question: "Where to next?",
    choices: [
      {
        text: "Living in the woods building websites to introduce wild animals to toddlers.",
        correct: false,
        altCaption: "Who would pay me to do that, animals or toddlers?",
      },
      {
        text: "Running a 'dating' app exclusively for setting up toddler playdates.",
        correct: false,
        altCaption: "If it was true I would never call it a dating app.",
      },
      {
        text: "Finishing software development studies, absolutely loving learning, somewhat patiently waiting for your job offer.",
        correct: true,
      },
      {
        text: "Living in Latvia giving motivational speeches online to other career-turners of age 26+.",
        correct: false,
        altCaption: "Maybe I should? However currently I don't.",
      },
    ],
  },
];

export default stageData;