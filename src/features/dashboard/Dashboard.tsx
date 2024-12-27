import { NavLink, Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <section className='dashboard h-full'>
      <div className='h-full grid grid-cols-1 md:grid-cols-[1fr_4fr]'>
        <aside className='p-4 h-full  rounded-md border-r-2'>
          <ul className='flex flex-col gap-2 [&>li>a]:block [&>li>a]:p-2 [&>li>a]:bg-gray-600 [&>li>a]:rounded-md'>
            <li>
              <NavLink to='/dashboard/foods'>
                Foods
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/foods/new'>Add Food</NavLink>
            </li>
          </ul>
        </aside>

        <div className='p-4 h-full'>
          <Outlet />
        </div>
      </div>
    </section>
  )
}

export default Dashboard
