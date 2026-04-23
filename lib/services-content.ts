import { IMAGES } from './site';

export type ServiceContent = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDesc: string;
  audience: string;
  heroImage: string;
  heroAlt: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  approach: string[];
  whoFor: string[];
  faqs: { q: string; a: string }[];
  related: string[]; // slugs
};

export const SERVICE_CONTENT: ServiceContent[] = [
  {
    slug: 'add-therapy',
    title: 'ADD / ADHD Therapy',
    shortTitle: 'ADD Therapy',
    metaTitle: 'ADD / ADHD Therapy in Brighton, MI | Children, Teens, Adults',
    metaDesc:
      'Evidence-based ADD and ADHD therapy in Brighton, MI for children, teens, and adults. Build focus, executive function, and emotional regulation — without judgment. $82 flat fee, HSA qualified.',
    audience: 'Children, Teens & Adults',
    heroImage: IMAGES.add,
    heroAlt: 'Person organizing notes in soft natural light',
    intro:
      'ADD and ADHD aren\'t character flaws — they\'re differences in how the brain manages attention, motivation, and follow-through. Our therapists help children, teens, and adults build practical strategies that fit how their mind actually works, while also addressing the anxiety, shame, and exhaustion that so often come with years of being misunderstood.',
    sections: [
      {
        heading: 'A different way of thinking, not a broken one',
        body: [
          'For many of our clients, the moment they understand their ADHD brain isn\'t broken — it\'s wired differently — is the moment things start to shift. We help you (or your child) move from "what\'s wrong with me?" to "how does my brain work, and what does it actually need?"',
          'That reframe alone changes everything. From there, we work on the practical: routines that stick, emotional regulation when frustration spikes, and tools for school, work, and relationships.',
        ],
      },
      {
        heading: 'What therapy looks like here',
        body: [
          'For children, sessions often blend play, conversation, and parent coaching so the strategies we build in the office actually work at home and at school.',
          'For teens, we focus on self-understanding, executive function skills (planning, time management, follow-through), and the social and emotional pieces — because most teens with ADHD are also wrestling with self-esteem and overwhelm.',
          'For adults, sessions are direct, collaborative, and focused on what\'s actually getting in the way at work, in relationships, and in daily life.',
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
    metaTitle: 'Anxiety Therapy in Brighton, MI | Evidence-Based Treatment',
    metaDesc:
      'Compassionate, evidence-based anxiety therapy in Brighton, MI. Get tools to quiet the noise, ease panic, and feel grounded again. All ages. $82 flat fee. HSA qualified.',
    audience: 'All Ages',
    heroImage: IMAGES.anxiety,
    heroAlt: 'Calm window light over a quiet seat',
    intro:
      'Anxiety isn\'t weakness — it\'s a nervous system stuck in overdrive. Whether yours shows up as racing thoughts, panic attacks, constant worry, or a tightness in your chest you can\'t quite name, you\'re not alone. And there are real, proven ways through it.',
    sections: [
      {
        heading: 'You don\'t have to live like this',
        body: [
          'For many people, anxiety has been around so long it feels like personality — just "the way I am." But anxiety is a pattern your nervous system learned, and patterns can be unlearned. With the right support, the volume comes down. The thoughts get quieter. The body settles.',
          'In our work together, we don\'t just manage symptoms — we get curious about what\'s underneath. What is your anxiety trying to protect you from? What does it need to hear before it can let go?',
        ],
      },
      {
        heading: 'How we work with anxiety',
        body: [
          'We use evidence-based approaches — CBT, exposure work where helpful, mindfulness, and somatic tools that engage the body, not just the mind. We also pay attention to story: the experiences, beliefs, and relationships that shaped how you respond to stress.',
          'Sessions are paced to your nervous system. We won\'t push you faster than you\'re ready. And we\'ll celebrate the small wins — because they\'re not actually small.',
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
      'Autistic people don\'t need to be "fixed" — they need spaces that understand them. Our work with autistic clients of every age is rooted in neurodiversity-affirming principles: we honor how your brain works, support the things that are genuinely hard, and never ask you to mask in our office.',
    sections: [
      {
        heading: 'Affirming, not corrective',
        body: [
          'Too much of the support available to autistic people focuses on making them appear less autistic. That\'s not what we do. We work with you — not on you — to address what actually makes life harder: sensory overwhelm, burnout, social exhaustion, anxiety, and the experience of being misunderstood.',
          'For parents of autistic kids, we offer education, communication strategies, and a space to process the emotional reality of advocating for a child the world isn\'t built for.',
        ],
      },
      {
        heading: 'What we can help with',
        body: [
          'Autistic burnout, sensory regulation, and emotional overwhelm. Anxiety and depression that often travel alongside being autistic in a non-autistic world. Identity and self-understanding — especially for late-diagnosed adults. Communication skills and self-advocacy. Social challenges, friendships, and relationships on your terms.',
          'For teens and young adults, we also work on the transitions that often hit hard: changing schools, leaving home, entering the workforce, navigating intimate relationships.',
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
      "Play-based, developmentally-attuned therapy for children ages 5–12 in Brighton, MI. We help kids find language for big feelings. $82 flat fee. HSA qualified.",
    audience: 'Ages 5–12',
    heroImage: IMAGES.children,
    heroAlt: 'Child\'s drawing supplies on a sunlit table',
    intro:
      'Kids don\'t always have words for what they\'re feeling — but their behavior is communicating something. Our children\'s therapy creates a safe, playful space where children can explore their inner world, learn to name big emotions, and build the skills to navigate them.',
    sections: [
      {
        heading: 'Therapy that meets kids where they are',
        body: [
          'Children process the world differently than adults — through play, story, art, and movement. Our work with younger clients honors that. Sessions are warm, age-appropriate, and structured around what helps your specific child feel safe and engaged.',
          'We also work closely with parents. You know your child better than anyone, and you\'re the most important person in their healing. We\'ll partner with you, share strategies you can use at home, and help you understand what your child is going through.',
        ],
      },
      {
        heading: 'What we help children with',
        body: [
          'Anxiety and worry. Big emotions that lead to meltdowns or shutdowns. Social struggles and friendship difficulties. Adjustment to divorce, loss, or change. Trauma. Self-esteem. School-related stress. Sibling conflict.',
          'We also support children with ADHD, autism spectrum traits, and emotional dysregulation — always with a strengths-based, non-shaming approach.',
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
      'Depression isn\'t just sadness — it can be exhaustion, numbness, irritability, or a heaviness that makes ordinary things feel impossibly hard. Whatever it looks like for you, you don\'t have to push through it alone, and you don\'t have to be in crisis to deserve help.',
    sections: [
      {
        heading: 'You\'re not lazy. You\'re not broken.',
        body: [
          'Depression lies. It tells you you\'re weak, that things will always feel this way, that you\'re a burden. None of that is true — but it\'s incredibly hard to argue with on your own. Therapy is, in part, having someone in your corner who can see what you can\'t see right now.',
          'We work with you to gently identify the patterns keeping the depression in place, build small wins, and reconnect with the parts of life that have felt lost or numb.',
        ],
      },
      {
        heading: 'Our approach',
        body: [
          'We blend evidence-based methods — CBT, behavioral activation, mindfulness — with deep relational care. We pay attention to your story, your context, and your nervous system.',
          'For some clients, depression travels alongside grief, trauma, life transitions, or an undiagnosed neurodivergence. Part of our work is figuring out what\'s actually going on, so the support fits.',
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
      'Most couples wait far too long to come in. By the time they do, they\'re exhausted, hurt, and often wondering if it\'s too late. It\'s usually not. Whatever brought you here — distance, conflict, betrayal, or simply feeling like roommates — there\'s real, structured work that can help.',
    sections: [
      {
        heading: 'It\'s not about who\'s right',
        body: [
          'Couples therapy isn\'t a referee match. It\'s a guided process for understanding the patterns the two of you are stuck in — the moments where one of you reaches and the other pulls away, where the same fight happens again with different words.',
          'We help you slow those moments down, see them with new eyes, and build the skills (and the safety) to do them differently.',
        ],
      },
      {
        heading: 'What we work on',
        body: [
          'Communication patterns that keep going sideways. Trust repair after infidelity, betrayal, or breaches of any kind. Intimacy and connection — emotional, physical, and the in-between. Conflict that escalates fast and leaves both of you hurt. Parenting, finances, in-laws, and the practical realities that put pressure on partnership.',
          'Some couples come to heal. Some come to figure out whether to stay. Both are valid reasons to be in the room. We hold space for either outcome.',
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
  },

  {
    slug: 'couples-coaching',
    title: 'Couples Coaching',
    shortTitle: 'Couples Coaching',
    metaTitle: 'Couples Coaching in Brighton, MI | Practical Tools, Fast',
    metaDesc:
      'Forward-focused couples coaching in Brighton, MI. Learn practical communication and connection tools fast. $82 flat fee. HSA qualified. Evening and virtual options.',
    audience: 'Couples',
    heroImage: IMAGES.coaching,
    heroAlt: 'Two people in a focused, warm conversation',
    intro:
      'Couples coaching is for partnerships that don\'t need deep clinical work but want sharper tools, clearer communication, and a stronger foundation. Think of it as practical, structured, forward-focused — less about excavating the past, more about building what you want next.',
    sections: [
      {
        heading: 'Coaching vs. counseling — what\'s the difference?',
        body: [
          'Coaching is goal-oriented and structured around skill-building and accountability. Counseling tends to go deeper into history, healing, and clinical concerns.',
          'If your relationship is fundamentally healthy and you want to make it stronger — better communication, better conflict, more intentional connection — coaching may be the right fit. If there are deeper wounds, mental-health concerns, or significant trust ruptures, counseling is usually the better starting point. We can help you figure out which makes sense.',
        ],
      },
      {
        heading: 'What you\'ll work on',
        body: [
          'Communication frameworks that actually hold up under stress. Conflict styles and how to handle the moments where you usually go sideways. Emotional and physical intimacy. Shared vision, values, and life planning. Accountability between sessions, with real practice and feedback.',
          'Coaching is often shorter-term — many couples feel a real shift in 6–10 sessions.',
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
      'Being a teenager right now is genuinely hard. Social media, school pressure, identity, friendships, family dynamics, the future — it\'s a lot, and most teens don\'t feel safe taking any of it to the adults in their life. Our work with teens creates a space that\'s actually theirs: confidential, real, and respectful.',
    sections: [
      {
        heading: 'Therapy that doesn\'t feel like more pressure',
        body: [
          'A lot of teens come in skeptical — sometimes after being "told" they have to. We get it. We don\'t lecture, we don\'t pretend to be cool, and we don\'t treat teens like problems to be solved. We treat them like people worth listening to.',
          'Most teens, after a session or two, decide they\'re actually glad to have a place that\'s just theirs. That sense of choice and ownership is part of what makes therapy work.',
        ],
      },
      {
        heading: 'What we help with',
        body: [
          'Anxiety, depression, and overwhelm. School stress, perfectionism, and burnout. Friendships, bullying, and social conflict. Identity, including LGBTQ+ identity and gender. Self-esteem, body image, and disordered eating concerns. Family conflict and communication. Trauma. Grief. Substance use. Internet and gaming overuse.',
          'For parents, we partner with you on how to support your teen without intruding on their therapy. The trust between us and your teen is essential — we\'ll talk with you about how to be involved in a way that respects that.',
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
  },

  {
    slug: 'teen-coaching',
    title: 'Teen Coaching',
    shortTitle: 'Teen Coaching',
    metaTitle: 'Teen Coaching in Brighton, MI | Mentoring & Goals',
    metaDesc:
      'Goal-driven teen coaching in Brighton, MI for ages 13–18. School, friendships, identity, and what comes next. $82 flat fee. HSA qualified.',
    audience: 'Ages 13–18',
    heroImage: IMAGES.coaching,
    heroAlt: 'Teen and mentor working together at a desk',
    intro:
      'Teen coaching is mentoring with structure. It\'s for teens who don\'t need clinical therapy but want a trusted adult in their corner — someone outside of family and school — to help them set goals, build skills, and figure out who they want to be.',
    sections: [
      {
        heading: 'A trusted adult who isn\'t a parent or teacher',
        body: [
          'There\'s real power in having an adult who isn\'t grading you, raising you, or evaluating you. Our coaches step into that role with care: present, honest, and on your teen\'s side.',
          'Sessions are collaborative. Your teen sets the goals — academic, social, personal, or all of the above — and we partner with them to actually move toward them.',
        ],
      },
      {
        heading: 'What coaching can focus on',
        body: [
          'Time management, study skills, and academic focus. Friendship and social confidence. Identity, values, and self-understanding. Decision-making and planning for what comes after high school. Building healthy habits around sleep, screens, and well-being. Confidence, leadership, and follow-through.',
          'Coaching is shorter-term and more action-oriented than therapy. If we notice clinical concerns come up — anxiety, depression, trauma — we\'ll talk openly about whether therapy is a better fit, and help make that handoff.',
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
        heading: 'Different from therapy. Just as serious.',
        body: [
          'Coaching is forward-focused. We\'re less interested in unpacking why something happened and more interested in what you want now and what\'s in the way. That said, our coaches are part of a clinical center — so if therapy turns out to be the better fit, we say so, and the handoff is seamless.',
          'Coaching tends to be shorter-term, more action-oriented, and structured around clear goals. You\'ll do real work between sessions — and you\'ll have a partner holding the bar steady.',
        ],
      },
      {
        heading: 'What coaching is often used for',
        body: [
          'Career direction, transitions, and leadership growth. Habits, health, and life redesign. Relationship and communication skills. Identity and values clarification. Major decisions: whether to stay, leave, start, finish.',
          'We work with adults at every stage — early-career, mid-life, post-retirement — and with teens through our dedicated teen coaching track.',
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
      'Adulthood doesn\'t come with a manual. Most of the people we work with are competent, caring, capable people who are quietly carrying a lot — work pressure, relationship strain, grief, anxiety, the slow weight of unprocessed experience. Therapy is a space to set some of that down and actually look at it, with a trained professional in your corner.',
    sections: [
      {
        heading: 'You don\'t need to be in crisis to come in',
        body: [
          'One of the biggest myths about therapy is that it\'s for "serious" problems only. Plenty of our clients are functioning well by every external measure — and quietly exhausted, anxious, or unhappy underneath. Therapy is a place to attend to that, before it gets worse, and often before anyone else even notices.',
          'Other clients come during clear hard seasons: divorce, a death, a diagnosis, a job loss, a major decision. Both reasons to come in are completely valid.',
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
      'High-functioning people quietly burning out',
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
  },
];

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return SERVICE_CONTENT.find((s) => s.slug === slug);
}
