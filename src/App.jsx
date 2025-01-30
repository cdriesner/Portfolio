import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const App = () => {
  return (
    <div>
      <div className='fixed left-0 top-0 -z-10 h-full w-full bg-[url("/CircuitBoard.svg")] bg-cover' />
      <div className='relative min-h-[100vh]'>
        <div className='z-10 max-w-[1400px] justify-between p-4 text-white md:top-[50%] md:mx-auto md:flex md:translate-y-[50%] md:px-20'>
          <div className='relative max-md:my-16'>
            <div className='my-6 text-2xl'>Hey I'm</div>
            <div className='my-6 text-7xl'>Calvin Driesner</div>
            <div className='my-6 text-xl'>Fullstack Software Developer from Beaverton, OR.</div>
            <div className='my-6'>
              <a href='#about-me' className='mr-2 rounded-full bg-bush-orange px-4 py-2 capitalize'>
                About Me
              </a>
              <a className='m-2' href='/MyResume.pdf' download>
                Download Resume
              </a>
            </div>
          </div>
          <div className='relative h-fit w-80 max-md:mb-16'>
            <img src='/IMG_8238.png' className='relative left-0 top-0 w-full rounded-2xl shadow-lg' />
            <div className='absolute -left-2 top-4 flex w-36 items-center rounded bg-white px-4 py-2 md:-left-12'>
              <div className='mr-2 font-poppins text-5xl font-bold text-bush-orange'>3</div>
              <div className='font-bold text-black'>Years of Experience</div>
            </div>
            <div className='absolute -right-8 bottom-6 flex w-36 items-center rounded bg-white px-4 py-2'>
              <div className='mr-2 font-poppins text-5xl font-bold text-bush-red'>2</div>
              <div className='font-bold text-black'>Websites Launched</div>
            </div>
            <img src='/trophy.svg' className='absolute -right-8 -top-5 h-20 w-20 rounded bg-white p-4' />
          </div>
        </div>
      </div>
      <section id='about-me' className='bg-gray-100 px-6 py-12 md:px-12 lg:px-24'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='mb-6 text-3xl font-bold text-dark-brown'>About Me</h2>
          <p className='mb-6 text-lg text-gray-600'>
            Hi, I'm <span className='font-semibold text-dark-brown'>Calvin Driesner</span>, a
            <span className='font-semibold text-dark-brown'> Portland, OR</span> based developer with a lifelong passion
            for coding. From my childhood days of experimenting with code to my current expertise, programming has
            always been a cornerstone of who I am.
          </p>
          <div className='space-y-6'>
            <p className='text-lg text-gray-600'>
              As a skilled <span className='font-semibold text-dark-brown'>React developer</span>, I've successfully
              launched
              <span className='font-semibold text-dark-brown'> two fully-functional websites</span>, showcasing my
              ability to deliver intuitive, user-focused designs and scalable solutions.
            </p>
            <p className='text-lg text-gray-600'>
              Alongside my front-end expertise, I have strong backend development experience with
              <span className='font-semibold text-dark-brown'> Node.js</span>, allowing me to build robust and efficient
              server-side applications.
            </p>
            <p className='text-lg text-gray-600'>
              I thrive on creating seamless user experiences and bringing ideas to life through clean, maintainable
              code. Whether it's developing interactive interfaces or designing scalable backend architectures, I
              approach every project with creativity, precision, and a drive for excellence.
            </p>
          </div>
          <p className='mt-8'>
            <a
              href='#portfolio'
              className='rounded-lg bg-dark-brown px-6 py-3 font-medium text-white shadow-md hover:bg-light-brown'
            >
              View My Work
            </a>
          </p>
        </div>
      </section>
      <section
        id='portfolio'
        className='bg-gradient-to-b from-light-brown/25 to-dark-brown/25 px-6 py-12 md:px-12 lg:px-24'
      >
        <div className='mx-auto max-w-6xl'>
          <h2 className='mb-8 text-center text-3xl font-bold text-white'>Portfolio</h2>
          <p className='mb-12 text-center text-lg text-white'>
            Here are two websites I've successfully launched, showcasing my expertise in React and Node.js. Click on
            them to explore!
          </p>

          <div className='mb-12 flex flex-col items-center md:flex-row'>
            <img
              src='/fly-thumb.png'
              alt='Fly-Buy-Wire Thumbnail'
              className='h-fit w-full rounded-lg object-cover shadow-lg md:w-2/5'
            />
            <div className='mt-6 text-white md:ml-8 md:mt-0'>
              <h3 className='text-2xl font-semibold'>Fly&#x2022;Buy&#x2022;Wire</h3>
              <p className='mt-4 text-gray-300'>
                This dynamic and user-friendly aviation marketplace, built with React and Express.js, features a
                responsive design, seamless navigation, and optimized performance. It includes real-time messaging and
                location-based search functionality. Currently in its early stages, I am actively growing its user base.
              </p>
              <a
                href='https:/flybuywire.com'
                target='_blank'
                className='mt-4 inline-block text-blue-300 hover:text-blue-400 hover:underline'
              >
                Visit Website →
              </a>
            </div>
          </div>

          <div className='mb-12 flex flex-col items-center md:flex-row-reverse'>
            <img
              src='/lake-thumb.png'
              alt='Lake Oswego Registration Thumbnail'
              className='h-fit w-full rounded-lg object-cover shadow-lg md:w-2/5'
            />
            <div className='mt-6 text-white md:mr-8 md:mt-0'>
              <h3 className='text-2xl font-semibold'>Lake Oswego Registration</h3>
              <p className='mt-4 text-gray-300'>
                This website is a scalable web application built with React and Node.js, designed to deliver a smooth
                and secure user experience with two-factor authentication (2FA). It enables the Lake Oswego Corporation
                to efficiently collect user registration information and allows users to conveniently pay their yearly
                fees online.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='technologies' className='bg-dark-brown px-6 py-12 text-white md:px-12 lg:px-24'>
        <div className='mx-auto max-w-6xl'>
          <h2 className='mb-8 text-center text-3xl font-bold'>Technologies</h2>
          <p className='mb-12 text-center text-lg'>
            Below are the key technologies I've worked with to build dynamic and scalable web applications.
          </p>

          <div className='grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-3'>
            <div className='rounded-lg bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-600 px-6 py-6 text-white shadow-lg'>
              <div className='mb-4 text-4xl'>
                <FaHtml5 />
              </div>
              <h3 className='text-xl font-semibold'>HTML</h3>
              <p className='mt-4 text-gray-300'>
                I've used HTML to structure the content and layout of the websites I've built, ensuring accessibility
                and SEO optimization. It's the foundation for every web project I've worked on.
              </p>
            </div>

            <div className='rounded-lg bg-gradient-to-br from-indigo-600 via-indigo-500 to-blue-500 px-6 py-6 text-white shadow-lg'>
              <div className='mb-4 text-4xl'>
                <FaCss3Alt />
              </div>
              <h3 className='text-xl font-semibold'>CSS</h3>
              <p className='mt-4 text-gray-300'>
                I utilize CSS for styling my web applications, creating responsive layouts and dynamic visual elements.
                CSS frameworks like Tailwind have allowed me to efficiently design beautiful, user-friendly interfaces.
              </p>
            </div>

            <div className='rounded-lg bg-gradient-to-br from-yellow-500 via-yellow-600 to-orange-600 px-6 py-6 text-white shadow-lg'>
              <div className='mb-4 text-4xl'>
                <FaJs />
              </div>
              <h3 className='text-xl font-semibold'>JavaScript</h3>
              <p className='mt-4 text-gray-300'>
                JavaScript is the backbone of my dynamic web applications. I use it for everything from DOM manipulation
                to managing application state and handling user interactions in React.
              </p>
            </div>
          </div>

          <div className='mt-12 grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-2'>
            <div className='rounded-lg bg-gradient-to-br from-green-400 via-green-500 to-teal-500 px-6 py-6 text-white shadow-lg'>
              <div className='mb-4 text-4xl'>
                <FaNodeJs />
              </div>
              <h3 className='text-xl font-semibold'>Node.js</h3>
              <p className='mt-4 text-gray-300'>
                I use Node.js to build scalable backend services, handling everything from API creation to server-side
                logic. It's essential for real-time features and efficiently processing requests.
              </p>
            </div>

            <div className='rounded-lg bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 px-6 py-6 text-white shadow-lg'>
              <div className='mb-4 text-4xl'>
                <FaNodeJs />
              </div>
              <h3 className='text-xl font-semibold'>Express.js</h3>
              <p className='mt-4 text-gray-300'>
                Express.js helps streamline my Node.js backend development. It simplifies the creation of RESTful APIs,
                middleware handling, and routing, making it easier to build robust applications.
              </p>
            </div>
          </div>

          <div className='mt-12 grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-3'>
            <div className='rounded-lg bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-800 px-6 py-6 text-white shadow-lg'>
              <div className='mb-4 text-4xl'>
                <FaDatabase />
              </div>
              <h3 className='text-xl font-semibold'>PostgreSQL</h3>
              <p className='mt-4 text-gray-300'>
                I use PostgreSQL as my preferred relational database, leveraging its power for complex queries and
                ensuring data integrity in production environments. It's critical for handling large datasets and
                providing scalability.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='contact-me' className='px-6 py-12 text-white md:px-12 lg:px-24'>
        <div className='mx-auto max-w-6xl'>
          <h2 className='mb-8 text-center text-3xl font-bold'>Contact Me</h2>
          <p className='mb-12 text-center text-lg'>
            Feel free to reach out if you have any questions or want to discuss potential projects. I'd love to hear
            from you!
          </p>

          <div className='grid grid-cols-1 gap-8 text-center md:grid-cols-2 lg:grid-cols-3'>
            <div className='rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-6 py-6 text-white shadow-lg'>
              <div className='mb-4 text-4xl'>
                <FaEnvelope />
              </div>
              <h3 className='text-xl font-semibold'>Email</h3>
              <p className='mt-4 text-gray-300'>
                You can reach me via email at{' '}
                <a href='mailto:driesnercalvin@gmail.com' className='cursor-pointer font-semibold text-black underline'>
                  driesnercalvin@gmail.com
                </a>
              </p>
            </div>

            <div className='rounded-lg bg-gradient-to-r from-gray-800 via-gray-900 to-black px-6 py-6 text-white shadow-lg'>
              <div className='mb-4 text-4xl'>
                <FaGithub />
              </div>
              <h3 className='text-xl font-semibold'>GitHub</h3>
              <p className='mt-4 text-gray-300'>
                Check out my repositories on GitHub for some of the projects I've worked on.{' '}
                <a
                  href='https://github.com/cdriesner'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-300 hover:underline'
                >
                  Visit my GitHub
                </a>
              </p>
            </div>

            <div className='rounded-lg bg-gradient-to-r from-bush-red to-bush-orange px-6 py-6 text-white shadow-lg'>
              <div className='mb-4 text-4xl'>
                <FaLinkedin />
              </div>
              <h3 className='text-xl font-semibold'>LinkedIn</h3>
              <p className='mt-4 text-gray-300'>
                Connect with me on LinkedIn to discuss opportunities or collaborations.{' '}
                <a
                  href='https://www.linkedin.com/in/calvin-driesner'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='cursor-pointer font-semibold text-black underline'
                >
                  Visit my LinkedIn
                </a>
              </p>
            </div>
          </div>

          <div className='mt-12 rounded-lg bg-gray-800 p-8 shadow-lg' id='contact'>
            <h3 className='mb-6 text-center text-2xl font-semibold text-white'>Send Me a Message</h3>
            <form action='https://formspree.io/f/mvgolaoj' method='POST' className='space-y-4'>
              <div>
                <label htmlFor='name' className='mb-2 block text-white'>
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full rounded-md bg-gray-700 px-4 py-2 text-white'
                  placeholder='Enter your name'
                  required
                />
              </div>

              <div>
                <label htmlFor='email' className='mb-2 block text-white'>
                  Your Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full rounded-md bg-gray-700 px-4 py-2 text-white'
                  placeholder='Enter your email'
                  required
                />
              </div>

              <div>
                <label htmlFor='message' className='mb-2 block text-white'>
                  Your Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  className='w-full rounded-md bg-gray-700 px-4 py-2 text-white'
                  placeholder='Type your message here'
                  rows='4'
                  required
                />
              </div>

              <button
                type='submit'
                className='mt-4 w-full rounded-md bg-gradient-to-r from-bush-red to-bush-orange px-4 py-2 text-white hover:scale-[102%] hover:bg-gradient-to-r'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
