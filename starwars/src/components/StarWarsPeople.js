import React from 'react'

// export function StarWarsPeople(props){
//     console.log(props)
//     return(
//         props.info.map(person => {
//             return props.info={person}
//         })
//         // {nums.map((names => {return <StarWarsPeople info={names} />}))}
//     )}

    // export const StarWarsPeople = (props) => { 
    //     // console.log('props', props)
    //     return(
    //     <div>
    //     <p>{props.info}</p>
    //     <p>Hardcode removeme</p>
    //     </div> 

    export function StarWarsPeople(props){
        console.log('props', props)
        return(
            <div className='container'>
                {props.info.map(data =>
                 <h2>{data.name}</h2>       
            )}
            </div>
        )}