import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import CredsBar from '@/components/CredsBar';
import FinalCTA from '@/components/FinalCTA';
import Monogram from '@/components/Monogram';
import SmartImage from '@/components/SmartImage';
import type { ImageRef } from '@/components/SmartImage';
import { IMAGES, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Our Staff | Therapists, Coaches & Team',
  description:
    'Meet the licensed therapists, certified coaches, and support team at the William A. Presti Center in Brighton, MI. Warm, experienced professionals who genuinely care.',
  alternates: { canonical: `${SITE.url}/staff` },
};

type TeamMember = {
  name: string;
  title: string;
  credentials: string;
  email: string;
  bio: string[];
  specialties?: string[];
  personal?: string;
  /** If you have a real headshot, provide an ImageRef. Otherwise Monogram renders. */
  photo?: ImageRef;
};

const TEAM: TeamMember[] = [
  {
    name: 'Johanna Ciak',
    title: 'Director & Founder',
    credentials: 'MSW',
    email: 'jo@wapcenter.org',
    photo: IMAGES.staffJohanna,
    bio: [
      "Johanna received her Masters in Social Work from Eastern Michigan University with a concentration in Children and Family Services. She has worked in the Social Work field since 1983.",
      "Johanna founded the William A. Presti Center for Families and Youth to provide a caring, empathetic, supportive environment for people struggling with emotional and mental health issues — and to keep services at a price that actually makes care accessible.",
      "Over her career, Johanna has worked with clients experiencing anxiety, loss, low self-esteem, depression, and other emotional and mental health concerns. She has served as a Therapist, Coach, and Case Manager across mental health, education, and residential settings, and supervised programs for chronically mentally ill and head-injured adults.",
      "Today, Johanna's focus is the ongoing development of the center. She's proud of the team of therapists, coaches, and support staff she's built — and honored to serve Livingston County and the surrounding communities.",
    ],
    personal: 'Johanna lives locally with her husband and her 15-year-old dog. She loves long walks, reading, and collecting jewelry.',
  },
  {
    name: 'Arica VanGelderen',
    title: 'Operations Director, Mentor & Coach',
    credentials: 'MSW',
    email: 'arica@wapcenter.org',
    photo: IMAGES.staffArica,
    bio: [
      "Arica received her Bachelor's degree in Art History from Kalamazoo College and her Masters in Social Work from Loyola University.",
      "As Operations Director, Arica oversees and manages all daily operations at the center — caseload reporting, employee onboarding, compliance, and ongoing training for our staff. She's the steady hand behind the scenes that keeps the practice running smoothly so our clinicians can focus on clients.",
    ],
    personal: 'Arica lives with her husband, three dogs, and two cats. She enjoys art projects and loves sharing her creativity with friends, staff, and family.',
  },
  {
    name: 'Kisha Hath',
    title: 'Therapist & Clinical Supervisor',
    credentials: 'LMSW',
    email: 'kisha@wapcenter.org',
    photo: IMAGES.staffKisha,
    bio: [
      "Kisha received her Masters in Social Work from Michigan State University and her Bachelor of Science from Baker College.",
      "Kisha specializes in working with children and teens, though she has deep experience across all age groups — from clients as young as two through adulthood. Her clinical focus includes trauma, anxiety, depression, family conflict, and sexuality. Her passion is helping clients heal from emotional pain and live empowered lives.",
      "Kisha uses evidence-based practices and incorporates mindfulness, play therapy, and art therapy in her work with children and teens. She validates her clients' feelings, listens to their stories, and provides a safe, welcoming, judgment-free space — whether in person or virtual. She works with your strengths to help you reach your goals, understanding that life is always changing.",
    ],
    specialties: ['Trauma', 'Anxiety & depression', 'Children & teens', 'Family conflict', 'Sexuality', 'Play & art therapy'],
    personal: 'Kisha lives in Howell with her five-year-old Pomchi and her one-year-old cat. She enjoys traveling, concerts, crafting, and spending time with friends — and she\'s an avid movie fan, especially horror.',
  },
  {
    name: 'Marcie Reznik',
    title: 'Certified Life Coach',
    credentials: 'CLC',
    email: 'marcie@wapcenter.org',
    photo: IMAGES.staffMarcie,
    bio: [
      "Marcie is an accredited Certified Life Coach. She works with couples navigating unhealthy communication, long-standing unresolved conflicts, intimacy issues, trust issues, and pre-marital exploration — bringing a supportive, solution-focused approach to resolving conflict.",
      "Marcie also works with adults moving through life transitions: divorce, grief and loss, career change, isolation, low self-esteem, and spiritual exploration. She believes everyone has the power to create the life they desire, and her role is to provide the tools and support to make that happen.",
      "Over 50-plus years of her own life experiences have deepened her compassion and empathy — especially for people dealing with emotional and physical pain. She draws on a wide range of healing modalities to support growth and transformation, and works collaboratively with clients in a warm, welcoming environment where they feel seen and heard.",
    ],
    specialties: ['Couples & communication', 'Life transitions', 'Divorce, grief & loss', 'Self-esteem', 'Pre-marital coaching'],
    personal: 'Marcie lives in Wixom with her husband and one of her daughters. Her hobbies are working out, being outside in nature, and time with family and friends.',
  },
  {
    name: 'Mitchell Brown',
    title: 'Clinical Mental Health Counselor & Coach',
    credentials: 'LLPC · Certified Life Coach',
    email: 'mitchell@wapcenter.org',
    photo: IMAGES.staffMitchell,
    bio: [
      "Mitchell earned his Bachelor's in Psychology from Grand Valley State University and his Masters in Clinical Mental Health Counseling. He's also a Certified Life Coach.",
      "Mitchell works with teens, adults, and children navigating anxiety, depression, trauma, ADHD, low self-esteem, emotional dysregulation, and relationship and peer issues. He previously served as a Behavioral Specialist for children and teens diagnosed with autism, and has mentored teens in sport settings — teaching mutual respect and the value of teamwork.",
      "In sessions, Mitchell uses mindfulness, cognitive behavioral therapy, and solution-focused approaches, with a strong focus on building a warm, trusting, collaborative relationship. He helps clients gain clarity and find new, healthier perspectives on their emotional struggles.",
    ],
    specialties: ['Anxiety & depression', 'ADHD', 'Teens & adults', 'Autism spectrum', 'Trauma', 'CBT & mindfulness'],
    personal: 'In his spare time Mitchell loves to travel, fish, boat, and play sports. He brings a real enthusiasm for life to his work and looks forward to sharing that energy with his clients.',
  },
  {
    name: 'Suzette Presti',
    title: 'Intake Manager',
    credentials: '',
    email: 'suzette@wapcenter.org',
    photo: IMAGES.staffSuzette,
    bio: [
      "Suzette brings a deep range of experience to our Center — an Associate Degree in Diagnostic Medical Sonography and a Bachelor's with emphasis in Management, Communication, and Fine Arts, plus professional work across healthcare, higher education, and business in administrative and management capacities.",
      "Suzette is often the first voice you'll hear when you reach out. She's the person who takes the time to understand what you're looking for and match you with the therapist or coach best suited to your needs — connecting people to resources for a better future is the part of the work she loves most.",
    ],
    personal: 'Suzette is a professional vocalist and choir director. She enjoys people, pets, travel, new experiences, and the outdoors.',
  },
];

export default function StaffPage() {
  return (
    <>
      <Hero
        eyebrow="Our Team"
        title={
          <>
            Real people who <em>genuinely</em> care
          </>
        }
        subtitle="The most important part of therapy is the relationship. Meet the licensed therapists, certified coaches, and support staff who make our practice what it is."
        bgImage={IMAGES.staff}
        bgAlt="Experienced therapist in a warm, supportive session"
        inner
      />

      <CredsBar />

      <section className="staff-intro">
        <div className="eyebrow r">Meet the Team</div>
        <h2 className="section-heading r d1">
          Experienced clinicians. <em>Human</em> first.
        </h2>
        <p className="staff-intro-body r d2">
          Our team brings a wide range of specialties across therapy and coaching. What holds us together is a shared commitment to treating every client like a whole person — not a diagnosis, not a case, not a number. You won&apos;t get cookie-cutter care here.
        </p>
      </section>

      <section className="team-list">
        {TEAM.map((person, i) => (
          <article key={person.name} className={`team-member r ${i < 5 ? `d${(i % 4) + 1}` : ''}`.trim()}>
            <div className="team-photo-col">
              {person.photo ? (
                <SmartImage
                  image={person.photo}
                  alt={`Portrait of ${person.name}`}
                  className="team-photo"
                  sizes="(max-width: 640px) 180px, (max-width: 1024px) 180px, 200px"
                />
              ) : (
                <Monogram name={person.name} tone={i} className="team-photo" />
              )}
            </div>
            <div className="team-body-col">
              <div className="team-title-block">
                <h3 className="team-name">{person.name}</h3>
                {person.credentials && (
                  <div className="team-cred">{person.credentials}</div>
                )}
                <div className="team-role">{person.title}</div>
              </div>
              <div className="team-bio">
                {person.bio.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              {person.specialties && (
                <div className="team-specialties">
                  <div className="team-specialties-label">Specialties</div>
                  <ul>
                    {person.specialties.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}
              {person.personal && (
                <p className="team-personal">{person.personal}</p>
              )}
              <a href={`mailto:${person.email}`} className="team-email">
                {person.email}
              </a>
            </div>
          </article>
        ))}
      </section>

      <FinalCTA
        heading={<>Let&apos;s find your <em>right fit</em></>}
        body="We put real care into matching you with the therapist or coach most likely to help. Tell us a bit about what you're looking for and we'll take it from there."
      />
    </>
  );
}
