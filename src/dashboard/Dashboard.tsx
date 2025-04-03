import { NavLink, Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <section className='dashboard h-full'>
      <div className='h-full grid grid-cols-1 md:grid-cols-[1fr_4fr]'>
        <aside className='p-4 h-full  rounded-md border-r-2'>
          <ul className='flex flex-col gap-2 [&>li>a]:block [&>li>a]:p-2 [&>li>a]:bg-gray-700 [&>li>a]:rounded-md [&>li>a.active]:bg-gray-500'>
            <li>
              <NavLink to='/dashboard/foods' end>
                My Foods
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/foods/new'>Add Food</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/foods/request'>Requested Foods</NavLink>
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
