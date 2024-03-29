import type {GetStaticProps, NextPage} from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Header from './../components/Header';
import Hero from './../components/Hero';
import About from './../components/About';
import WorkExperience from './../components/WorkExperience';
import Skills from './../components/Skills';
import Projects from './../components/Projects';
import ContactMe from './../components/ContactMe';
import {ArrowUpCircleIcon} from '@heroicons/react/24/solid';
import {Experience, PageInfo, Project, Skill, Social} from './../typings';
import {fetchProjects} from './../utils/fetchProjects';
import {fetchSkills} from './../utils/fetchSkills';
import {fetchSocials} from './../utils/fetchSocials';
import {fetchExperiences} from './../utils/fetchExperiences';
import {fetchPageInfo} from './../utils/fetchPageInfo';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({pageInfo, experiences, projects, skills, socials}: Props) => {
  return (
    <div className='bg-[rgb(27,27,27)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Jen Tchai | Frontend Developer | Portfolio Site</title>
        <meta name="description" content="Jen Tchai Frontend Developer Portfolio Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 

      <Header socials={socials} />

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      <section id='skills' className='snap-start'>
        <Skills skills={skills} />
      </section>

      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-11 md:bottom-5 w-full cursor-pointer'>
          <div className='hidden md:flex flex-col items-center justify-center'>
            <button className='h-10 w-10 rounded-full filter hover:transform-[50%] cursor-pointer'>
              <ArrowUpCircleIcon className='text-[#FBC101] h-8 w-8' />
            </button>
              <p className=''>Go to Top</p>
          </div>
        </footer>
      </Link>
    </div>
  )
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    // the following means that NextJS will attempt to regenerate the page when a request comes in, at most once per 10 secs
    revalidate: 10,
  };
}