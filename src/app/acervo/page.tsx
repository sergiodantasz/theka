export default function Page() {
  return (
    <section>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        <h1 className='text-5xl text-pink-500 lg:text-7xl'>
          Novidades da semana
        </h1>
        <div className='h-90 bg-amber-400 lg:row-span-2'></div>
        <div className='self-end text-neutral-500'>
          <h2 className='text-2xl'>A cabeça do santo</h2>
          <h6>Socorro Acioli - 2014</h6>
        </div>
      </div>
    </section>
  );
}
