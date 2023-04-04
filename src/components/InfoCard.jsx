


const InfoCard = ({count,icon,title,bg}) => {
  return (
    <div className="flex shadow-lg gap-6 bg-slate-100 p-2 w-42">

<div className={`icon ${bg} text-center flex justify-center items-center rounded-full m-1 w-16 h-16`}>
  {icon}
</div>
<div className="info">
    <h1 className="text-2xl">{count}</h1>
    <h3 className="text-gray-500">{title}</h3>
</div>



    </div>
  )
}
export default InfoCard