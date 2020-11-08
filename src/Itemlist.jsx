import React from 'react';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import "./App.css";


function List(props){
        return(
                <>
                <h4 class="main">
                        <div className="fun d-flex justify-content-center">
                        <li>
                                <p>
                                {props.text}
                                </p>
        
                        </li>                
                                <span onClick={()=>{props.selectme(props.id)}}>
                                <DeleteForeverRoundedIcon style={{color:'red',fontSize:'45',}}/>        
                                </span>

                        </div>
                </h4>                
                </>
        );
}

export default List;