import React, { useContext } from 'react'
import { GiveData } from '../..';


const ContextC = () => {
    // const name :string = useContext(GiveData.name);
    // const age :number = useContext(GiveData.age);

    const data = useContext(GiveData);

  return (
    <p>名前は{data.name}で、年齢は{data.age}です</p>

  )
}


export default ContextC