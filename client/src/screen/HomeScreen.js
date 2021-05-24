import React from 'react'
import pizzadata  from '../../src/4.1 pizzasdata';
import Pizza from '../../src/components/Pizza';
export default function HomeScreen() {
    return (
        <div>
          <div className="row">
            {pizzadata.map(pizza=>{
                return <div className="col-md-4">
                    <div>
                     <Pizza pizzadata={pizza}/>
                    </div>
                </div>    
            })}
          </div>
        </div>
    )
}
