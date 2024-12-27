import logo from '@/assets/logo.png'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Switch } from '@/components/ui/switch'
import { useAuth } from '@/contexts/AuthProvider'
import { useTheme } from '@/contexts/ThemeProvider'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link, NavLink } from 'react-router'

import userAvatarBlack from '@/assets/avatar-black.png'
import userAvatarWhite from '@/assets/avatar-white.png'

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const { user, logOut } = useAuth()

  return (
    <section className='navbar bg-red-500 py-4 text-white'>
      <div className='con'>
        <nav className='flex items-center justify-between'>
          <NavLink to='/'>
            <figure className='logo'>
              <img className='w-10' src={logo} alt='png' />
            </figure>
          </NavLink>

          <span className='flex items-center gap-6'>
            <NavLinks isAuthenticated={!!user} />

            <Popover>
              <PopoverTrigger>
                <Avatar className='w-10'>
                  <AvatarImage src={user?.photoURL || undefined} />
                  <AvatarFallback>
                    <img
                      className='block dark:hidden'
                      src={userAvatarBlack}
                      alt='Avatar'
                    />
                    <img
                      className='hidden dark:block'
                      src={userAvatarWhite}
                      alt='Avatar'
                    />
                  </AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className='w-max me-4'>
                <ul className='flex flex-col gap-2'>
                  {user ? (
                    <li>{user.displayName}</li>
                  ) : (
                    <>
                      <li>
                        <Link to='/auth/login' className='underline'>
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link to='/auth/register' className='underline'>
                          Register
                        </Link>
                      </li>
                    </>
                  )}

                  <li className='flex items-center gap-4'>
                    <label
                      htmlFor='toggle-theme'
                      className='cursor-pointer select-none'
                    >
                      Toggle Theme
                    </label>
                    <Switch
                      id='toggle-theme'
                      checked={theme === 'dark'}
                      onCheckedChange={(checked) =>
                        setTheme(checked ? 'dark' : 'light')
                      }
                    />
                  </li>
                  {user && (
                    <li>
                      <Button variant='destructive' onClick={logOut}>
                        Logout
                      </Button>
                    </li>
                  )}
                </ul>
              </PopoverContent>
            </Popover>

            <Sheet>
              <SheetTrigger>
                <Button
                  variant='default'
                  className='h-auto aspect-square p-1 bg-slate-600 hover:bg-slate-700 cursor-pointer dark:bg-slate-300 dark:hover:bg-slate-400 lg:hidden'
                  asChild
                >
                  <GiHamburgerMenu className='w-9 h-9 text-secondary' />
                </Button>
              </SheetTrigger>
              <SheetContent className='w-max py-8 lg:hidden'>
                <SheetHeader className='hidden'>
                  <SheetTitle className='hidden' />
                  <SheetDescription className='hidden' />
                </SheetHeader>

                <NavLinks type='mobile' isAuthenticated={!!user} />
              </SheetContent>
            </Sheet>
          </span>
        </nav>
      </div>
    </section>
  )
}

const NavLinks = ({
  type = 'desktop',
  isAuthenticated,
}: {
  type?: 'desktop' | 'mobile'
  isAuthenticated: boolean
}) => {
  return (
    <ul
      className={`[&>li::after]:content-[''] [&>li::after]:block [&>li::after]:w-0 [&>li:has(>a.active)::after]:w-1/2 [&>li::after]:h-1 [&>li::after]:bg-red-300 [&>li:has(>a:hover)::after]:w-3/4 [&>li::after]:rounded [&>li::after]:transition-all [&>li::after]:duration-300 [&>li::after]:mx-auto [&>li>a]:text-lg [&>li>a]:font-medium ${
        type === 'mobile'
          ? 'flex lg:hidden flex-col [&>li]:w-max py-4 gap-4'
          : 'hidden lg:flex gap-8'
      }`}
    >
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/foods' end>
          Available Foods
        </NavLink>
      </li>
      {isAuthenticated && (
        <li>
          <NavLink to='/dashboard'>Dashboard</NavLink>
        </li>
      )}
    </ul>
  )
}

export default Navbar
