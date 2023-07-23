import 'grid_zoom_items.css'

export default function grid_zoom_items() {
  return (
<>
<div className="w-full h-full bg-slate-100">
  <div className="grid parent h-full w-full justify-between [&_div]:bg-slate-200 ">

      <div className="row-1 hover:bg-slate-400">coucou</div>
      <div className="row-1 hover:bg-slate-400">test2</div>
      <div className="row-1 hover:bg-slate-400">test3</div>

      <div className="row-2 hover:bg-slate-400">test3</div>
      <div className="row-2 hover:bg-slate-400">coucou</div>
      <div className="row-2 hover:bg-slate-400">test2</div>

      <div className="row-3 hover:bg-slate-400">test3</div>
      <div className="row-3 hover:bg-slate-400">coucou</div>
      <div className="row-3 hover:bg-slate-400">test2</div>
      
    </div>
  </div>

</>

  )
}
