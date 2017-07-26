import React from 'react';

const NamesList = (props) => {

  const nameItems = props.names.filter(function(name){
    return name.length === 4
  })
    .map(function(name){
      return <li> { name } </li>
  });

  return (
    <div>
      <h3>Names</h3>
      <ul>
        { nameItems }
      </ul>
    </div>
  )
}



const MappingAndFiltering = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <NamesList names={props.allTheData.names}/>
    </div>
  )
}

export default MappingAndFiltering;
