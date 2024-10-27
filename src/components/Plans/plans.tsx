

interface PlanProps {
    title: string;
    span: string;
    spanTwo: string;
    paragraf: string;
}

export const Plans = ({ title, paragraf, span, spanTwo }: PlanProps) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold leading-6 text-white">{title}</h2>
      <p className="mt-4 text-zinc-300">{paragraf}</p>
      <p className="mt-8">
        <span className="text-5xl font-extrabold">{span}</span>
        <span className="text-base font-medium text-zinc-100">{spanTwo}</span>
      </p>
      <button className="flex justify-center font-semibold rounded-md bg-white text-black w-full mt-8 py-2">Contratar</button>
    </div>
  )
}
