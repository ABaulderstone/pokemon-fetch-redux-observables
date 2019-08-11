import React from 'react'
import {Table} from 'antd';
const columns = [
    {
        title: "Name",
        dataIndex: 'name'
     },
     {title: "More info",
     dataIndex: 'url'

     }
]
const PokemonTable = ({pokemon}) => (
    <Table columns={columns} dataSource={pokemon} /> 

)
export default PokemonTable