const Main = () => {
  return (
    <div className="grow flex flex-col justify-center px-4 gap-5">
      <div className="bg-slate-200 shadow-md border-4 rounded-2xl p-3 text-center">
        <h1 className="text-xl font-semibold">Элементы высшей математики</h1>
        <h2 className="text-xl">Осталось</h2>
        <span className="text-5xl font-bold text-amber-800">26:15</span>
      </div>
      <div className="bg-slate-200 shadow-md border-4 rounded-2xl p-3 text-center">
        <h1 className="text-xl">Следующая пара</h1>
        <span className="text-2xl font-semibold">Бухгалтерский учёт</span>
      </div>
      <div className="bg-slate-200 shadow-md border-4 rounded-2xl p-3">
        <h1 className="text-xl text-center">12 сентября</h1>
        <ul className="mt-4">
          <li className="bg-slate-300 py-2 px-3 text-lg rounded-t-xl">1. Финансы, денежное обращение и кредит</li>
          <li className="bg-orange-300 py-2 px-3 text-lg font-semibold">2. Элементы высшей математики</li>
          <li className="bg-slate-300 py-2 px-3 text-lg rounded-b-xl">3. Бухгалтерский учёт</li>
        </ul>
      </div>
    </div>
  )
}

export default Main