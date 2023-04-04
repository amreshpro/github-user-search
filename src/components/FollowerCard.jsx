

const FollowerCard = ({avatar_url,login,html_url,id}) => {
  return (

    <div className="flex gap-2 items-center" key={id}>

<div className="img m-1">
  <img src={avatar_url} className="w-12 h-12  rounded-full" alt="" />
</div>
<div className="text">
  <h1 className="text-lg">{login}</h1>
<a href={html_url} className="text-blue-400 underline m-1">{html_url}</a>
</div>


    </div>
  )
}
export default FollowerCard