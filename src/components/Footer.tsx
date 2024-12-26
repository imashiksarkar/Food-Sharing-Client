import logo from '@/assets/logo.png'
import { FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <footer className='bg-red-600 mt-12'>
      <div className='con text-center py-8 grid grid-cols-1 gap-10 md:grid-cols-3'>
        <div className='brand flex flex-col gap-4'>
          <img src={logo} alt='logo' className='w-16' />
          <p className='text-start max-w-[30ch]'>
            Explore and enjoy the world of movies with CineVerse.
          </p>
          <ul className='social-links flex items-center gap-6 text-2xl'>
            <li className='hover:text-red-400'>
              <a href='#'>
                <FiFacebook />
              </a>
            </li>
            <li className='hover:text-red-400'>
              <a href='#'>
                <FiLinkedin />
              </a>
            </li>
            <li className='hover:text-red-400'>
              <a href='#'>
                <FiTwitter />
              </a>
            </li>
          </ul>
        </div>

        <div className='company text-start md:justify-self-center'>
          <h4>Company</h4>
          <ul className='mt-4 [&>li:not(:last-child)]:mb-1 [&>li>a:hover]:underline text-slate-400'>
            <li>
              <a href='#'>Help Center</a>
            </li>
            <li>
              <a href='#'>Report</a>
            </li>
            <li>
              <a href='#'>About Us</a>
            </li>
            <li>
              <a href='#'>Career</a>
            </li>
          </ul>
        </div>

        <div className='address ms-5 md:ms-0 md:justify-self-end'>
          <ul className='text-start list-disc flex flex-col gap-2'>
            <li>
              <span>Location</span>
              <br />
              <span className='text-slate-600 dark:text-slate-400'>
                Singra, Natore, Rajshahi
              </span>
            </li>
            <li>
              <span>Email</span>
              <br />
              <span className='text-slate-600 dark:text-slate-400'>
                contact@ashiksarkar.xyz
              </span>
            </li>
            <li>
              <span>Phone</span>
              <br />
              <span className='text-slate-600 dark:text-slate-400'>
                +88 (01710 999999)
              </span>
            </li>
            <li>
              <span>Website</span>
              <br />
              <span className='text-slate-600 dark:text-slate-400'>
                <a
                  href='https://www.ashiksarkar.xyz'
                  className='underline'
                  target='_blank'
                >
                  www.ashiksarkar.xyz
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* Newsletter */}
      <div className='con bg-red-600 pb-8 pt-2 w-full flex gap-4 flex-col md:flex-row items-center justify-between'>
        <h1 className='text-2xl font-medium'>Subscribe to our newsletter</h1>
        <form className='flex flex-col sm:flex-row gap-2 sm:gap-0'>
          <input
            type='email'
            name='email'
            placeholder='Enter your email'
            className='w-full max-w-xs p-2 bg-gray-900 outline-none
            rounded-md sm:rounded-e-none'
          />
          <Button type='submit' className='rounded-md sm:rounded-s-none w-full sm:w-max'>
            Subscribe
          </Button>
        </form>
      </div>
      <div className='text-center py-4 bg-red-500'>
        <p>&copy;{new Date().getFullYear()} All Right Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
