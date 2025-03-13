const FoodSkeleton = () => (
  <div
    className='food-skeleton w-full h-full rounded-md overflow-hidden border p-2
        [&>div]:animate-pulse
        [&>div]:bg-slate-700
        '
  >
    <div className='h-[50%] w-full' />
    <div className='h-6 w-full mt-4' />
    <div className='h-4 w-[40%] mt-4' />
    <div className='h-4 w-[80%] mt-4' />
    <div className='h-4 w-[60%] mt-4' />
    <div className='h-4 w-[60%] mt-4' />
    <div className='h-10 w-[25%] mt-4' />
    <div className='h-10 w-[35%] mt-4' />
  </div>
)

export default FoodSkeleton
