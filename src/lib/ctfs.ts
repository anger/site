export const ctfEvents = [
  {
    name: "SparkCTF 2024",
    desc: "",
    challenges: [
      {
        name: "Skip, and away!",
        category: "pwn",
        href: "https://github.com/anger/CTF-Challenges/tree/main/pwn/skipskipandaway",
        writeup: "https://github.com/anger/CTF-Challenges/blob/main/pwn/skipskipandaway/solve.py",
        desc: "A binary exploitation challenge that leverages undefined behavior in setjmp() and longjmp() functions to bypass protections and achieve code execution",
      },
    ],
  },
  {
    name: "cr3 CTF 2024",
    desc: "",
    challenges: [
      {
        name: "secretclub",
        category: "web",
        href: "https://github.com/cr3mov/cr3ctf-2024/tree/main/challenges/web/secretclub",
        writeup: "https://github.com/cr3mov/cr3ctf-2024/tree/main/challenges/web/secretclub/solution",
        desc: "A web challenge involving hidden Express.js functionality that can be exploited to bypass internal security checks and achieve XSS for privilege escalation",
      },
    ],
  },
  {
    name: "PatriotCTF 2023",
    desc: "",
    challenges: [
      {
        name: "Pick Your Starter",
        category: "web",
        href: "https://github.com/MasonCompetitiveCyber/PatriotCTF2023/tree/main/Web/pickyourstarter",
        writeup: "https://sanlokii.eu/writeups/patriotctf/pick-your-starter/",
        desc: "A web application vulnerable to blind Server-Side Template Injection that can be exploited for remote code execution",
      },
      {
        name: "Guessing Game",
        category: "pwn",
        href: "https://github.com/MasonCompetitiveCyber/PatriotCTF2023/tree/main/pwn/guessinggame",
        writeup:
          "https://github.com/MasonCompetitiveCyber/PatriotCTF2023/tree/main/pwn/guessinggame",
        desc: "A classic buffer overflow vulnerability that requires careful exploitation to gain control of program execution and retrieve the flag",
      },
      {
        name: "Wing it",
        category: "rev",
        href: "https://github.com/MasonCompetitiveCyber/PatriotCTF2023/tree/main/Rev/wing_it",
        writeup:
          "https://github.com/MasonCompetitiveCyber/PatriotCTF2023/tree/main/Rev/wing_it",
        desc: "A beginner friendly reverse engineering challenge that introduces fundamental concepts of reverse engineering",
      },
      {
        name: "Uh Oh!",
        category: "misc",
        href: "https://github.com/MasonCompetitiveCyber/PatriotCTF2023/tree/main/misc/Uh%20Oh!",
        writeup:
          "https://github.com/MasonCompetitiveCyber/PatriotCTF2023/tree/main/misc/Uh%20Oh!",
        desc: "A regex-focused challenge that tests pattern matching skills and knowledge of regular expression syntax",
      },
    ],
  },
];
