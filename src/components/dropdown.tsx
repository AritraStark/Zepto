import React from 'react'
import { userObj } from '../App'

interface props{
    data: userObj[],
    addEmail : (value : userObj) => void,
}

export default function Dropdown(props: props) {
  return (
    <div className="rounded-md shadow-2xl mx-4 overflow-y-scroll h-40 z-10 absolute bg-white">
        <ul>
            {props.data.map((i: userObj)=><li onClick={() => props.addEmail(i)} key={i.name} className="my-4 mx-1 flex items-center"><img src={`https://picsum.photos/200?random=` + i.picture} alt="pic" className="rounded-full h-8 w-8 mr-4"/><b className="pr-6">{i.name}</b> {i.email}</li>)}
        </ul>
    </div>
  )
}
