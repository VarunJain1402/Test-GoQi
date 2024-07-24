const CartItem = ({ item, itemIndex }) => {
  return (
    <>
      <div className='flex items-center p-2 md:p-5 justify-between mt-2 mb-2 md:mx-5 '>
        <div className='flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center'>
          <div className='w-[30%]'>
            {/* <img className="object-cover " src={item.urls.regular} alt=""/> */}
            <img
              className='object-cover w-64 h-64'
              src={item.urls.full}
              alt=''
            />
          </div>
          <div className='md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]'>
            <h1 className='text-xl text-slate-700 font-semibold'>
              {item.alt_description}
            </h1>
            <h1 className='text-base text-slate-700 font-medium'>
              {item.description}
            </h1>
            <div className='flex items-center justify-between'>
              <p className='font-bold text-lg text-green-600'>
                {item.price ? `$${item.price}` : (Math.random()*100).toFixed(2) }
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem
