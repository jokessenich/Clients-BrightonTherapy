import { IMAGES } from './site';

type ImageRef = { src: string; width: number; height: number; alt: string };

export type ServiceContent = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDesc: string;
  audience: string;
  heroImage: ImageRef;
  heroAlt: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  approach: string[];
  whoFor: string[];
  faqs: { q: string; a: string }[];
  related: string[]; // slugs
  /** Optional real testimonial to display on this service page */
  testimonial?: {
    quote: string;
    author: string;
    context?: string;
    rating?: number;
  };
};

export const SERVICE_CONTENT: ServiceContent[] = [
  {
    slug: 'add-therapy',
    title: 'ADD / ADHD Therapy',
    shortTitle: 'ADD Therapy',
    metaTitle: 'ADD / ADHD Therapy in Brighton, MI | Children, Teens, Adults',
    metaDesc:
      'ADD and ADHD therapy in Brighton, MI for children, teens, and adults. Build focus, follow-through, and emotional regulation in a supportive space. $82 flat fee, HSA qualified.',
    audience: 'Children, Teens & Adults',
    heroImage: IMAGES.add,
    heroAlt: 'Person organizing notes in soft natural light',
    intro:
      'ADD and ADHD aren\'t character flaws or a lack of effort. They\'re differences in how the brain handles attention, motivation, and follow-through. Our therapists work with children, teens, and adults to build practical strategies that fit how their mind actually works, while also addressing the worry, frustration, and exhaustion that often come along with it.',
    sections: [
      {
        heading: 'What ADHD can feel like',
        body: [
          'Difficulty focusing, finishing tasks, or holding onto details — even when the task matters to you.',
          'Time slipping by without you noticing, or running late even when you\'re trying not to.',
          'Strong emotions that come on fast, and feel hard to manage in the moment.',
          'A long history of feeling like you\'re not measuring up, no matter how hard you try.',
        ],
      },
      {
        heading: 'Common signs to watch for',
        body: [
          'Trouble staying organized at home, school, or work.',
          'Restlessness, fidgeting, or feeling like your mind is always running.',
          'Putting things off until the last possible moment, then scrambling.',
          'Forgetfulness with appointments, deadlines, or things you meant to do.',
          'Difficulty starting tasks, especially ones that feel boring or overwhelming.',
        ],
      },
      {
        heading: 'How we can help',
        body: [
          'For children, sessions blend play, conversation, and parent coaching so the strategies we work on actually carry over to home and school.',
          'For teens, we focus on self-understanding, building skills around planning and follow-through, and the emotional pieces — because most teens with ADHD are also working through self-esteem and overwhelm.',
          'For adults, sessions are direct and collaborative, focused on what\'s actually getting in the way at work, in relationships, and in daily life. Our goal is for you to feel less stuck, less ashamed, and more equipped.',
        ],
      },
    ],
    approach: [
      'Cognitive Behavioral Therapy (CBT) adapted for ADHD',
      'Executive function coaching and skill-building',
      'Parent training and family systems support',
      'Mindfulness and emotional regulation tools',
      'Strengths-based, neurodiversity-affirming care',
    ],
    whoFor: [
      'Adults recently diagnosed (or wondering if they should be)',
      'Teens struggling with school, motivation, or self-esteem',
      'Children whose families want collaborative, non-shaming support',
      'Anyone tired of being told to "just try harder"',
    ],
    faqs: [
      {
        q: 'Do you diagnose ADHD?',
        a: 'We provide therapy and support, not formal psychological testing. If a diagnosis is needed, we can refer you to a trusted local provider for evaluation.',
      },
      {
        q: 'Do I need to be on medication to do therapy here?',
        a: 'No. Many of our clients use a combination of therapy and medication, others use therapy alone. We work alongside whatever path is right for you.',
      },
      {
        q: 'How long does ADHD therapy usually take?',
        a: 'There\'s no fixed timeline — some clients see meaningful change in 8–12 sessions, others find ongoing support helpful longer-term. We talk openly about progress as we go.',
      },
    ],
    related: ['anxiety-therapy', 'teenage-therapy', 'childrens-therapy'],
  },

  {
    slug: 'anxiety-therapy',
    title: 'Anxiety Therapy',
    shortTitle: 'Anxiety Therapy',
    metaTitle: 'Anxiety Therapy in Brighton, MI | Compassionate Care',
    metaDesc:
      'Compassionate anxiety therapy in Brighton, MI. Get tools to quiet the noise, ease panic, and feel grounded again. All ages. $82 flat fee. HSA qualified.',
    audience: 'All Ages',
    heroImage: IMAGES.anxiety,
    heroAlt: 'Calm window light over a quiet seat',
    intro:
      'Anxiety can show up as racing thoughts, a tight chest, panic, constant worry, or just a feeling that something\'s off and you can\'t name why. Whatever shape it takes for you, you\'re not alone — and there are real ways through it.',
    sections: [
      {
        heading: 'What anxiety feels like',
        body: [
          'Anxiety can leave you feeling powerless and uncertain, affecting both your emotions and your physical well-being.',
          'When it sticks around, it can lead to depression and persistent negative thoughts that wear down your quality of life.',
          'It can cause daily distress — interfering with your relationships, your decisions, and the things you used to enjoy.',
        ],
      },
      {
        heading: 'Symptoms to watch for',
        body: [
          'Avoiding social situations out of fear of judgment or embarrassment.',
          'Sudden panic attacks, and the ongoing fear of when the next one might come.',
          'Irrational fears, or avoidance of certain places, objects, or situations.',
          'Recurring nightmares, flashbacks, or emotional numbness tied to past trauma.',
          'Physical symptoms — chest tightness, stomach upset, headaches, trouble sleeping.',
        ],
      },
      {
        heading: 'How we can help',
        body: [
          'Our therapists provide tools and strategies to manage anxiety when it\'s overwhelming, so you have something to reach for in the hard moments.',
          'We also help you trace the roots of your anxiety. Treatment focuses on resolving the events or circumstances underneath it — not just managing the symptoms on the surface.',
          'The goal is for you to live freely again. We\'re here to help you reclaim your life from anxiety that\'s been running the show.',
        ],
      },
    ],
    approach: [
      'Cognitive Behavioral Therapy (CBT)',
      'Mindfulness and grounding techniques',
      'Somatic and nervous-system regulation tools',
      'Exposure-based work (when appropriate)',
      'Trauma-informed care',
    ],
    whoFor: [
      'Generalized anxiety, worry, or rumination',
      'Panic attacks',
      'Social anxiety',
      'Health anxiety',
      'Anxiety alongside depression, ADHD, or trauma',
    ],
    faqs: [
      {
        q: 'How long until I feel better?',
        a: 'Many clients notice meaningful relief within 6–12 sessions, but everyone\'s timeline is different. We\'ll check in regularly so therapy actually works for your life.',
      },
      {
        q: 'I don\'t want to do anything that feels too intense. Is that okay?',
        a: 'Yes. We move at your pace, and you\'re always in charge. We\'ll never push you into something you\'re not ready for.',
      },
      {
        q: 'Can teletherapy help with anxiety?',
        a: 'Absolutely. Many people find it easier to start therapy from a familiar space at home, and the work is just as effective.',
      },
    ],
    related: ['depression-therapy', 'adult-counseling', 'teenage-therapy'],
    testimonial: {
      quote: "She opened my eyes, gave me a different point of view, pulled me out of some dark places and gave me tools to manage my stress, anxiety and toxic people. All at a price I could actually afford. I am in a much better place because of her.",
      author: 'Lisa M.',
      context: 'Google review',
      rating: 5,
    },
  },

  {
    slug: 'autism-spectrum-disorder',
    title: 'Autism Spectrum Therapy',
    shortTitle: 'Autism Spectrum Disorder',
    metaTitle: 'Autism Spectrum Support in Brighton, MI | Affirming Therapy',
    metaDesc:
      'Neurodiversity-affirming therapy for autistic children, teens, and adults in Brighton, MI. Support that respects how your brain works. $82 flat fee. HSA qualified.',
    audience: 'Children, Teens & Adults',
    heroImage: IMAGES.autism,
    heroAlt: 'Soft natural light through warm textured curtains',
    intro:
      'Autistic people don\'t need to be fixed. They need spaces that understand them. Our work with autistic clients of every age is rooted in neurodiversity-affirming principles. We honor how your brain works, support the things that are genuinely hard, and never ask you to mask in our office.',
    sections: [
      {
        heading: 'What we mean by affirming',
        body: [
          'A lot of the support available to autistic people focuses on making them appear less autistic. That\'s not what we do.',
          'We work with you, not on you. Our goal isn\'t to change who you are. It\'s to help with the things that genuinely make life harder, like sensory overwhelm, burnout, social exhaustion, and the experience of being misunderstood.',
          'For parents of autistic kids, we offer education, communication strategies, and a space to process the emotional reality of advocating for a child the world isn\'t built for.',
        ],
      },
      {
        heading: 'What we can support',
        body: [
          'Autistic burnout, sensory regulation, and emotional overwhelm.',
          'Worry and low mood that often travel alongside being autistic in a non-autistic world.',
          'Identity and self-understanding, especially for late-diagnosed adults.',
          'Communication skills and self-advocacy.',
          'Social connection, friendships, and relationships on your terms.',
          'For teens and young adults, the transitions that often hit hard: changing schools, leaving home, entering the workforce, navigating relationships.',
        ],
      },
      {
        heading: 'How we can help',
        body: [
          'Our therapists meet you where you are, with care and without judgment. We listen carefully and adjust the work to fit you, rather than asking you to fit the work.',
          'We also collaborate with parents, partners, and family members when that\'s helpful, so the people in your life can be part of the support.',
          'You\'re welcome here whether you have a formal diagnosis or are still figuring it out.',
        ],
      },
    ],
    approach: [
      'Neurodiversity-affirming framework',
      'CBT adapted for autistic cognition',
      'Sensory and burnout-recovery support',
      'Family education and parent coaching',
      'Identity exploration and self-advocacy work',
    ],
    whoFor: [
      'Children and teens diagnosed with ASD',
      'Adults newly diagnosed or self-identifying',
      'Parents seeking guidance and support',
      'Autistic clients dealing with co-occurring anxiety, depression, or trauma',
    ],
    faqs: [
      {
        q: 'Do you require a formal autism diagnosis to begin therapy?',
        a: 'No. Many of our adult clients are self-identified or in the process of seeking diagnosis. You\'re welcome here either way.',
      },
      {
        q: 'Is your approach ABA-based?',
        a: 'No. We are neurodiversity-affirming and do not practice or recommend behaviorist approaches focused on suppressing autistic traits.',
      },
      {
        q: 'Can you work with my whole family?',
        a: 'Yes. We frequently support parents and siblings alongside our work with the autistic family member.',
      },
    ],
    related: ['childrens-therapy', 'teenage-therapy', 'anxiety-therapy'],
  },

  {
    slug: 'childrens-therapy',
    title: "Children's Therapy",
    shortTitle: "Children's Therapy",
    metaTitle: "Children's Therapy in Brighton, MI | Ages 5–12",
    metaDesc:
      "Play-based, developmentally-attuned therapy for children ages 5–12 in Brighton, MI. We help kids find words for big feelings. $82 flat fee. HSA qualified.",
    audience: 'Ages 5–12',
    heroImage: IMAGES.children,
    heroAlt: 'Child\'s drawing supplies on a sunlit table',
    intro:
      'Kids don\'t always have words for what they\'re feeling, but their behavior is communicating something. Our children\'s therapy creates a safe, playful space where children can explore what they\'re going through, learn to name big emotions, and build the skills to navigate them.',
    sections: [
      {
        heading: 'What kids often bring in',
        body: [
          'Worry and fears that get in the way of school, sleep, or friendships.',
          'Big emotions that lead to meltdowns, shutdowns, or trouble at home.',
          'Friendship struggles, social anxiety, or feeling left out.',
          'Adjustment to divorce, a move, a loss, or a major change at home.',
          'Behavioral challenges, low confidence, or trouble managing frustration.',
          'School-related stress and pressure.',
        ],
      },
      {
        heading: 'What therapy looks like for kids',
        body: [
          'Children process the world through play, story, art, and movement, and our work honors that. Sessions are warm, age-appropriate, and structured around what helps your specific child feel safe and engaged.',
          'We don\'t lecture, push, or treat kids like problems to solve. We follow their lead, build trust, and create space for what they\'re carrying to come out in a way that fits them.',
        ],
      },
      {
        heading: 'How we partner with parents',
        body: [
          'You know your child better than anyone, and you\'re the most important person in their healing. We meet with you regularly to share what we\'re working on, talk through strategies for home, and answer your questions.',
          'We also protect the trust we\'re building with your child, so they always know their therapy space is theirs. We\'ll talk openly with you about what to share, what to keep between us, and how to be involved in a way that helps.',
        ],
      },
    ],
    approach: [
      'Play therapy and expressive arts',
      'Cognitive Behavioral Therapy (CBT) adapted for kids',
      'Parent coaching and family involvement',
      'Trauma-informed, attachment-based care',
      'Mindfulness and emotional regulation skills',
    ],
    whoFor: [
      'Children ages 5–12 navigating anxiety, sadness, or behavioral challenges',
      'Families going through divorce, loss, or major transition',
      'Parents looking for guidance and partnership',
      'Children with ADHD, ASD, or emotional dysregulation',
    ],
    faqs: [
      {
        q: 'Will I be involved in my child\'s therapy?',
        a: 'Yes. Parent involvement is essential. We\'ll meet with you regularly to share what we\'re working on, discuss strategies for home, and answer your questions — while also protecting your child\'s sense of trust and privacy.',
      },
      {
        q: 'My child is nervous about coming in. What should I tell them?',
        a: 'Many kids feel nervous before their first session. We keep first sessions playful and low-pressure — think more "getting to know each other" than "talking about problems." We\'re happy to talk through introductions on the phone before your first visit.',
      },
      {
        q: 'How often will we come in?',
        a: 'Weekly is typical for the first stretch, then we taper as things stabilize. We\'ll review the plan with you regularly.',
      },
    ],
    related: ['teenage-therapy', 'add-therapy', 'autism-spectrum-disorder'],
    testimonial: {
      quote: "My wife and I were a little skeptical about using a counseling service for our kids but we decided to try the Presti Center. It turned out to be just what we needed — a safe, friendly atmosphere where our kids could open up to someone besides Dad and Mom. Our kids stated that they would definitely return for more counseling if ever needed.",
      author: 'K. Bell',
      context: 'Parent of child clients',
      rating: 5,
    },
  },

  {
    slug: 'depression-therapy',
    title: 'Depression Therapy',
    shortTitle: 'Depression Therapy',
    metaTitle: 'Depression Therapy in Brighton, MI | Compassionate Care',
    metaDesc:
      'Compassionate depression therapy for adults, teens, and children in Brighton, MI. A path forward when everything feels heavy or numb. $82 flat fee. HSA qualified.',
    audience: 'All Ages',
    heroImage: IMAGES.depression,
    heroAlt: 'Soft morning light through a quiet window',
    intro:
      'Depression isn\'t just sadness. It can feel like exhaustion, numbness, irritability, or a heaviness that makes ordinary things feel impossibly hard. Whatever it looks like for you, you don\'t have to push through it alone, and you don\'t have to be in crisis to deserve help.',
    sections: [
      {
        heading: 'What depression can feel like',
        body: [
          'A persistent low mood, sadness, or sense of emptiness that doesn\'t lift with rest or distraction.',
          'Exhaustion that doesn\'t make sense for what you\'ve done that day.',
          'Numbness, or feeling disconnected from people and things you used to care about.',
          'Harsh self-criticism, or a quiet conviction that you\'re a burden, lazy, or somehow not enough.',
          'A loss of motivation that can feel like the very thing that would help is the hardest thing to do.',
        ],
      },
      {
        heading: 'Common signs to watch for',
        body: [
          'Trouble getting out of bed, getting dressed, or starting the day.',
          'Pulling away from friends, family, or activities that used to feel good.',
          'Sleeping too much or not enough, eating too much or not enough.',
          'Difficulty concentrating, making decisions, or remembering things.',
          'Irritability, especially in teens and children, who may show depression as anger or withdrawal rather than sadness.',
          'Thoughts of self-harm or that life isn\'t worth it. If you\'re experiencing these, please reach out to us or call 988 (Suicide & Crisis Lifeline) right away.',
        ],
      },
      {
        heading: 'How we can help',
        body: [
          'Our therapists work with you to gently understand what\'s keeping the depression in place, build small wins, and reconnect with the parts of life that have felt lost or numb.',
          'We also help you make sense of what\'s underneath. For some clients, depression travels alongside grief, trauma, life transitions, or an undiagnosed neurodivergence. Part of our work is figuring out what\'s actually going on, so the support fits.',
          'You\'re not lazy and you\'re not broken. Depression lies, and one of the things therapy offers is someone in your corner who can see what you can\'t see right now.',
        ],
      },
    ],
    approach: [
      'Cognitive Behavioral Therapy (CBT)',
      'Behavioral activation',
      'Mindfulness-based approaches',
      'Trauma-informed care',
      'Coordination with prescribers when medication is part of your care',
    ],
    whoFor: [
      'Adults living with persistent low mood, exhaustion, or numbness',
      'Teens whose depression shows up as withdrawal, irritability, or self-criticism',
      'New parents navigating postpartum depression',
      'People whose depression is tied to grief, trauma, or major life change',
    ],
    faqs: [
      {
        q: 'I don\'t have the energy to start therapy. What if I can\'t commit?',
        a: 'This is one of the hardest parts of depression — the very thing that would help feels impossible. We start small. The first step is just one phone call. We\'ll go from there.',
      },
      {
        q: 'Do I need medication?',
        a: 'Not necessarily. Many clients do well with therapy alone. For others, a combination is most effective. We can refer you to a trusted prescriber if needed.',
      },
      {
        q: 'I\'m worried about safety — for myself or someone I love. What should I do?',
        a: 'If you or someone you love is in immediate danger, call 988 (Suicide & Crisis Lifeline) or 911. We\'re also here to talk and help you find the right next step — please reach out.',
      },
    ],
    related: ['anxiety-therapy', 'adult-counseling', 'teenage-therapy'],
  },

  {
    slug: 'couples-counseling',
    title: 'Couples Counseling',
    shortTitle: 'Couples Counseling',
    metaTitle: 'Couples Counseling in Brighton, MI | Repair & Reconnect',
    metaDesc:
      'Couples counseling in Brighton, MI to repair connection, rebuild trust, and learn to talk to each other again. $82 flat fee. HSA qualified. Evening and virtual options.',
    audience: 'Couples',
    heroImage: IMAGES.couples,
    heroAlt: 'Couple sitting together in soft natural light',
    intro:
      'Most couples wait too long to come in. By the time they do, they\'re tired, hurt, and sometimes wondering if it\'s too late. It\'s usually not. Whatever brought you here, there\'s real work that can help.',
    sections: [
      {
        heading: 'When couples come in',
        body: [
          'When the same fight keeps happening, just with different words.',
          'When trust has been broken — through infidelity, dishonesty, or other ruptures.',
          'When connection has slowly faded and you feel more like roommates than partners.',
          'When communication has stopped working and conversations turn into conflict or silence.',
          'After a major life change — a new baby, a loss, a move, a job shift — that has put pressure on the relationship.',
          'When one or both partners aren\'t sure whether to stay.',
        ],
      },
      {
        heading: 'What we work on',
        body: [
          'Communication that holds up under stress, instead of breaking down at the worst moments.',
          'Trust repair after infidelity, betrayal, or other breaches.',
          'Emotional and physical intimacy, and the closeness that gets lost along the way.',
          'Conflict that escalates fast and leaves both partners hurt.',
          'The practical pressures on partnership: parenting, finances, in-laws, and the daily logistics of a shared life.',
        ],
      },
      {
        heading: 'How we can help',
        body: [
          'Couples therapy isn\'t about deciding who\'s right. It\'s a guided process for understanding the patterns the two of you are stuck in, and learning to do them differently.',
          'We help you slow down the moments that usually go sideways, hear each other again, and build the safety to talk about what really matters.',
          'Some couples come to heal. Some come to figure out whether to stay together. Both are valid reasons to be in the room, and we hold space for either outcome.',
        ],
      },
    ],
    approach: [
      'Emotionally Focused Therapy (EFT) principles',
      'Gottman-informed methods',
      'Communication and conflict-resolution skill-building',
      'Trust-repair and infidelity recovery work',
      'Discernment counseling for couples uncertain about staying',
    ],
    whoFor: [
      'Couples feeling distant, disconnected, or stuck',
      'Couples recovering from infidelity or betrayal',
      'Couples preparing for marriage or major life change',
      'Couples who fight the same fight on repeat',
      'Couples figuring out whether to stay together',
    ],
    faqs: [
      {
        q: 'What if my partner doesn\'t want to come?',
        a: 'It\'s common for one partner to be more hesitant. Sometimes a single session — just to ask questions — is enough to ease that. You\'re also welcome to start individual work; it can change the relationship even when only one person comes in.',
      },
      {
        q: 'Do you work with non-monogamous couples?',
        a: 'Yes. We work with couples and partnerships of all configurations.',
      },
      {
        q: 'How long does couples therapy take?',
        a: 'Many couples see meaningful change in 12–20 sessions. Trust repair and deeper work can take longer. We\'ll talk openly about progress and timeline as we go.',
      },
    ],
    related: ['couples-coaching', 'adult-counseling', 'family-workshop'],
    testimonial: {
      quote: "She has helped me individually and through couples therapy. She is the only therapist I have ever felt safe with and always gives honest and constructive feedback. She is not afraid to tell you the things you may not want to hear. I don't know where I would be without her help through some very difficult times.",
      author: 'J. D.',
      context: 'Google review',
      rating: 5,
    },
  },

  {
    slug: 'couples-coaching',
    title: 'Couples Coaching',
    shortTitle: 'Couples Coaching',
    metaTitle: 'Couples Coaching in Brighton, MI | Practical Tools, Fast',
    metaDesc:
      'Forward-focused couples coaching in Brighton, MI. Learn practical communication and connection tools fast. $82 flat fee. HSA qualified. Evening and virtual options.',
    audience: 'Couples',
    heroImage: IMAGES.couples2,
    heroAlt: 'Two people holding hands at sunset, in a moment of connection',
    intro:
      'Couples coaching is for partnerships that don\'t need deep clinical work but want sharper tools, clearer communication, and a stronger foundation. It\'s practical and forward-focused. Less about excavating the past, more about building what you want next.',
    sections: [
      {
        heading: 'When coaching is a good fit',
        body: [
          'When your relationship is fundamentally healthy and you want to make it stronger.',
          'When you\'re preparing for marriage and want a strong foundation to start from.',
          'When you\'re recalibrating after a major change, like becoming parents.',
          'When you want better communication, better conflict, and more intentional connection.',
          'When you want practical skills and accountability, not deep clinical work.',
        ],
      },
      {
        heading: 'What you\'ll work on',
        body: [
          'Communication frameworks that hold up under stress.',
          'Conflict styles, and how to handle the moments where you usually go sideways.',
          'Emotional and physical intimacy.',
          'Shared vision, values, and life planning.',
          'Practice between sessions, with feedback to make sure the work actually carries over.',
        ],
      },
      {
        heading: 'How coaching is different from counseling',
        body: [
          'Coaching is goal-oriented and structured around skill-building and accountability. Counseling tends to go deeper into history, healing, and clinical concerns.',
          'If your relationship is in a good place and you want growth, coaching may be the right fit. If there are deeper wounds, mental-health concerns, or significant trust ruptures, counseling is usually the better starting point.',
          'We can help you figure out which makes sense, and we\'re happy to switch gears if it turns out the other is a better fit. Many couples feel a real shift in 6 to 10 sessions of coaching.',
        ],
      },
    ],
    approach: [
      'Skill-based and goal-driven',
      'Structured frameworks for communication and conflict',
      'Between-session practice and accountability',
      'Vision and values alignment',
      'Shorter-term, focused work',
    ],
    whoFor: [
      'Pre-marital couples wanting a strong foundation',
      'New parents recalibrating their partnership',
      'Couples in fundamentally healthy relationships seeking growth',
      'Couples wanting practical tools without deep clinical work',
    ],
    faqs: [
      {
        q: 'Is coaching covered by insurance or HSA?',
        a: 'Coaching is not typically billable to insurance, but most HSA accounts cover it. We\'re happy to provide receipts.',
      },
      {
        q: 'Can we switch from coaching to counseling if we need to?',
        a: 'Yes. We\'ll talk openly with you about what\'s working and what isn\'t, and shift gears if needed.',
      },
      {
        q: 'Do you offer virtual coaching?',
        a: 'Yes — many couples find the convenience of teletherapy makes it easier to commit to the work.',
      },
    ],
    related: ['couples-counseling', 'coaching-and-mentoring', 'adult-counseling'],
  },

  {
    slug: 'teenage-therapy',
    title: 'Teen Therapy',
    shortTitle: 'Teen Therapy',
    metaTitle: 'Teen Therapy in Brighton, MI | Ages 13–18',
    metaDesc:
      'Teen therapy in Brighton, MI for ages 13–18. A confidential space teens actually want to come to. $82 flat fee. HSA qualified. Evening and virtual options.',
    audience: 'Ages 13–18',
    heroImage: IMAGES.teen,
    heroAlt: 'Teenager looking thoughtfully out a sunlit window',
    intro:
      'Being a teenager right now is genuinely hard. Social media, school pressure, identity, friendships, family, the future — it\'s a lot, and most teens don\'t feel safe taking it to the adults in their life. Our work with teens creates a space that\'s actually theirs: confidential, real, and respectful.',
    sections: [
      {
        heading: 'What teens often bring in',
        body: [
          'Worry, low mood, or feeling overwhelmed.',
          'School stress, perfectionism, and burnout.',
          'Friendships, bullying, and conflict with peers.',
          'Identity and self-understanding, including questions around gender and sexuality.',
          'Self-esteem, body image, and concerns about eating.',
          'Family conflict and trouble communicating at home.',
          'Trauma, grief, or a major loss.',
          'Substance use, or too much time on phones, social media, or gaming.',
        ],
      },
      {
        heading: 'What therapy looks like for teens',
        body: [
          'A lot of teens come in skeptical, sometimes after being told they have to. We get it. We don\'t lecture, we don\'t pretend to be cool, and we don\'t treat teens like problems to be solved. We treat them like people worth listening to.',
          'Most teens, after a session or two, decide they\'re actually glad to have a place that\'s just theirs. That sense of choice and ownership is part of what makes therapy work.',
          'Sessions are confidential and at the teen\'s pace. We follow their lead, and we don\'t push.',
        ],
      },
      {
        heading: 'How we work with parents',
        body: [
          'The trust between us and your teen is essential, so we\'re thoughtful about how parents are involved.',
          'We share general updates with you — how things are going, what we\'re working on — but specifics of what your teen shares stay between us, unless someone is in danger. We\'ll go over this clearly in the first session so everyone knows what to expect.',
          'We\'re also here to support you. Parenting a teenager is hard, and we offer guidance on how to be in your teen\'s corner without intruding on their therapy.',
        ],
      },
    ],
    approach: [
      'Cognitive Behavioral Therapy (CBT)',
      'Dialectical Behavior Therapy (DBT) skills',
      'Mindfulness and somatic regulation',
      'Trauma-informed care',
      'Family and parent coaching as needed',
    ],
    whoFor: [
      'Teens with anxiety, depression, or overwhelm',
      'Teens navigating identity, including LGBTQ+ youth',
      'Teens dealing with bullying, social conflict, or peer issues',
      'Teens after a major loss, change, or trauma',
      'Families looking for support during the teen years',
    ],
    faqs: [
      {
        q: 'Will you tell my parents what I say?',
        a: 'Therapy is confidential. We share general updates with parents (how things are going, what we\'re working on) but specifics of what you share stay between us — unless you\'re in danger or someone else is. We\'ll go over this clearly in the first session so you know exactly what to expect.',
      },
      {
        q: 'My teen really doesn\'t want to come. What should I do?',
        a: 'It\'s common. We sometimes start with a single "no commitment" session — just to meet, ask questions, see if it feels okay. Most teens are surprised by how different therapy feels once they\'re actually in the room.',
      },
      {
        q: 'Do you offer evening sessions?',
        a: 'Yes. We have evening hours specifically because we know after-school time is precious for teens and families.',
      },
    ],
    related: ['teen-coaching', 'anxiety-therapy', 'depression-therapy'],
    testimonial: {
      quote: "I left a message after hours and got a call the next morning from the owner. She spoke to me for a half hour on the phone and said she had the right therapist for my daughter. I was so impressed. We have been to a few different places and nothing compares to how our therapist handles teenagers. Go here with confidence.",
      author: 'M. F.',
      context: 'Parent of teen client',
      rating: 5,
    },
  },

  {
    slug: 'teen-coaching',
    title: 'Teen Coaching',
    shortTitle: 'Teen Coaching',
    metaTitle: 'Teen Coaching in Brighton, MI | Mentoring & Goals',
    metaDesc:
      'Goal-driven teen coaching in Brighton, MI for ages 13–18. School, friendships, identity, and what comes next. $82 flat fee. HSA qualified.',
    audience: 'Ages 13–18',
    heroImage: IMAGES.conversation,
    heroAlt: 'Two people in a focused, supportive conversation',
    intro:
      'Teen coaching is mentoring with structure. It\'s for teens who don\'t need clinical therapy but want a trusted adult in their corner. Someone outside of family and school who can help them set goals, build skills, and figure out who they want to be.',
    sections: [
      {
        heading: 'What coaching can focus on',
        body: [
          'Time management, study skills, and academic focus.',
          'Friendship and social confidence.',
          'Identity, values, and self-understanding.',
          'Decision-making and planning for what comes after high school.',
          'Healthy habits around sleep, screens, and well-being.',
          'Confidence, leadership, and follow-through.',
        ],
      },
      {
        heading: 'How coaching works',
        body: [
          'There\'s real value in having an adult who isn\'t grading you, raising you, or evaluating you. Our coaches step into that role with care: present, honest, and on your teen\'s side.',
          'Sessions are collaborative. Your teen sets the goals, and we partner with them to actually move toward them. The work is shorter-term and more action-oriented than therapy.',
          'If we notice clinical concerns come up — worry, low mood, trauma — we\'ll talk openly about whether therapy is a better fit, and help make that handoff.',
        ],
      },
      {
        heading: 'How we partner with parents',
        body: [
          'We talk with you about how to support your teen\'s goals at home, and we keep you in the loop on the work in age-appropriate ways.',
          'As with our therapy work, we protect the trust we\'re building with your teen. We\'ll share general updates and be clear about what stays between us, so your teen knows their coaching space is theirs.',
        ],
      },
    ],
    approach: [
      'Goal-setting and accountability frameworks',
      'Strengths-based mentoring',
      'Skill-building (executive function, communication, decision-making)',
      'Between-session practice and feedback',
      'Collaboration with parents on age-appropriate involvement',
    ],
    whoFor: [
      'Teens who want a mentor in their corner',
      'High-achievers facing burnout, perfectionism, or pressure',
      'Teens navigating identity, friendships, and growth',
      'Teens preparing for college, gap years, or post-high-school life',
    ],
    faqs: [
      {
        q: 'How is coaching different from therapy?',
        a: 'Coaching is forward-focused, action-oriented, and shorter-term. Therapy goes deeper into history, healing, and clinical concerns. Some teens benefit from one, some from the other, and some from both at different times.',
      },
      {
        q: 'Is coaching covered by insurance?',
        a: 'Coaching isn\'t typically insurance-billable, but it\'s usually HSA-eligible. We provide receipts.',
      },
      {
        q: 'Can my teen do coaching virtually?',
        a: 'Yes — many teens love the convenience of meeting from their own space.',
      },
    ],
    related: ['teenage-therapy', 'coaching-and-mentoring', 'add-therapy'],
  },

  {
    slug: 'coaching-and-mentoring',
    title: 'Coaching & Mentoring',
    shortTitle: 'Coaching & Mentoring',
    metaTitle: 'Life Coaching & Mentoring in Brighton, MI | Certified Coaches',
    metaDesc:
      'Certified life coaching and mentoring in Brighton, MI. Goal-focused, accountable, and grounded in real growth. $82 flat fee. HSA qualified.',
    audience: 'All Ages',
    heroImage: IMAGES.coaching,
    heroAlt: 'Mentor and client in a focused, warm conversation',
    intro:
      'Coaching is a partnership for change. It\'s for people who know there\'s a next chapter — in career, relationships, health, identity, or purpose — and want a structured, accountable space to actually get there. Our certified coaches bring real training, real warmth, and real honesty.',
    sections: [
      {
        heading: 'When coaching helps',
        body: [
          'When you\'re at a career or life crossroads and want help thinking it through.',
          'When you\'re working on habits, health, or a redesign of how you spend your days.',
          'When you want to build communication or relationship skills with structure and accountability.',
          'When you\'re sorting out values, identity, or what matters most to you now.',
          'When you\'re facing a major decision: whether to stay, leave, start, or finish.',
        ],
      },
      {
        heading: 'What coaching looks like',
        body: [
          'Coaching tends to be shorter-term, more action-oriented, and structured around clear goals you set.',
          'You\'ll do real work between sessions, with a partner holding the bar steady. Most clients see meaningful progress in 6 to 12 sessions, though some choose to continue longer for ongoing accountability.',
          'We work with adults at every stage — early career, mid-life, post-retirement — and with teens through our dedicated teen coaching track.',
        ],
      },
      {
        heading: 'How coaching is different from therapy',
        body: [
          'Coaching is forward-focused. We\'re less interested in unpacking why something happened and more interested in what you want now and what\'s in the way.',
          'Our coaches are part of a clinical center, so if therapy turns out to be the better fit, we say so, and the handoff is seamless. A quick conversation up front is usually enough to figure out which one makes sense for you.',
        ],
      },
    ],
    approach: [
      'Certified coaching methodology',
      'Goal-setting, accountability, and structured frameworks',
      'Strengths-based and forward-focused',
      'Between-session practice and reflection',
      'Clear referrals to therapy when appropriate',
    ],
    whoFor: [
      'Adults at career or life crossroads',
      'High-performers wanting structure, accountability, and growth',
      'Anyone navigating a major transition (relationship, role, identity)',
      'People who tried therapy and want something more action-oriented',
    ],
    faqs: [
      {
        q: 'How is coaching billed?',
        a: 'Coaching is $82 per session, the same as our therapy rate. It\'s usually HSA-eligible but typically not insurance-billable.',
      },
      {
        q: 'How do I know if I need coaching or therapy?',
        a: 'A quick conversation is usually enough to figure that out. We\'re happy to talk through your goals and recommend the better fit.',
      },
      {
        q: 'How long does coaching take?',
        a: 'Most clients see real progress in 6–12 sessions, though some choose to continue longer for ongoing accountability.',
      },
    ],
    related: ['adult-counseling', 'couples-coaching', 'teen-coaching'],
  },

  {
    slug: 'adult-counseling',
    title: 'Adult Counseling',
    shortTitle: 'Adult Counseling',
    metaTitle: 'Adult Counseling & Therapy in Brighton, MI | Individual Sessions',
    metaDesc:
      'Adult counseling and individual therapy in Brighton, MI. A confidential space to be heard — for anxiety, life transitions, grief, and more. $82 flat fee. HSA qualified.',
    audience: 'Adults',
    heroImage: IMAGES.adult,
    heroAlt: 'Adult in calm individual therapy session',
    intro:
      'Many of the adults who come in are doing well by every external measure — capable, caring, holding a lot together. They\'re also tired, worried, or stuck on something they can\'t quite name. Therapy is a space to set some of that down and look at it, with someone in your corner.',
    sections: [
      {
        heading: 'It\'s never the wrong time to come to therapy',
        body: [
          'We\'re here for you on your rainy days and your sunny days. Plenty of our clients aren\'t in a crisis when they come in — they\'re doing fine on the outside and just want a space to attend to what\'s underneath, before things get heavier.',
          'Other clients come during clear hard seasons: a divorce, a death, a diagnosis, a job loss, a major decision. Both reasons to come in are completely valid.',
        ],
      },
      {
        heading: 'What we work with',
        body: [
          'Anxiety, depression, stress, and burnout. Grief and loss. Trauma and the long shadow it can cast. Relationship struggles — partners, family, friends, work. Major life transitions: divorce, parenthood, empty nesting, retirement. Identity, purpose, and meaning. Patterns that keep repeating despite your best efforts. Substance use and addiction. Codependency. Self-esteem.',
          'Sessions are collaborative, paced to you, and grounded in real care. We don\'t do generic therapy — we work with the specific human in front of us.',
        ],
      },
    ],
    approach: [
      'Cognitive Behavioral Therapy (CBT)',
      'Trauma-informed care',
      'Mindfulness and somatic approaches',
      'Insight-oriented and relational work',
      'Coordination with prescribers and other providers as needed',
    ],
    whoFor: [
      'Adults navigating anxiety, depression, or stress',
      'Adults processing grief, trauma, or major loss',
      'Adults in life transitions — divorce, career, parenthood, midlife',
      'Adults feeling stretched thin, overwhelmed, or close to burnout',
      'Anyone wanting a confidential space to be heard',
    ],
    faqs: [
      {
        q: 'What if I\'m not sure what to talk about?',
        a: 'That\'s normal. Many clients come in not quite knowing where to start. Part of what we do is help you find the threads.',
      },
      {
        q: 'Do you accept insurance?',
        a: 'We are a flat-fee practice at $82 per session. Many clients use HSA funds, and we can provide superbills for out-of-network reimbursement if your plan offers it.',
      },
      {
        q: 'How often will we meet?',
        a: 'Weekly is standard, especially at the start. As things stabilize, some clients shift to every other week or as-needed.',
      },
    ],
    related: ['anxiety-therapy', 'depression-therapy', 'coaching-and-mentoring'],
    testimonial: {
      quote: "I've seen my therapist on and off for over a year. I always felt comfortable talking to her, and she has helped me so much. Scheduling was super easy and convenient. I would highly recommend her and the WAP Center.",
      author: 'Erin K.',
      context: 'Google review',
      rating: 5,
    },
  },
];

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return SERVICE_CONTENT.find((s) => s.slug === slug);
}
