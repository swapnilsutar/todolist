import React, { useState } from "react";
import {Button, TextField } from "@material-ui/core";
// import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import './App.css';
import Itemlist from "./Itemlist";

function Card(){

    const [ MyInputitem , setInputitem ] = useState();
    const [ mynewitem , setmynewitem ] = useState([]);

    const inputitem = (e) =>{
        console.log(e.target.value);
        setInputitem(e.target.value);
    }
    
    const additem = (e1) =>{    
        e1.preventDefault();

        setmynewitem((allitem)=>{
                return[...allitem,MyInputitem];
        });

        // setmynewitem(MyInputitem);
        setInputitem("");
    }

    const del = (id1) =>{
        setmynewitem((allitem)=>{
            return allitem.filter((vala,index)=>{
                return index !== id1;
            })
        })
    }

    return(
        <>
            <div className="container">
            
                <div className="row ">
                    <div className="col-lg-6 mx-auto  justify-content-center">

                        <div className="frame ">

                            <div className="">
                            <div className="card-title">
                                <h2 className="text-center">   
                                TODO LIST
                                </h2>
                            </div>
                                <form onSubmit={additem} >
                                    <div className="d-flex justify-content-center">
                                    <TextField 
                                        onChange={inputitem}
                                        placeholder="Enter an item" 
                                        className="w-50" 
                                        type="text"
                                        value={MyInputitem}
                                        variant="outlined"
                                        style={{color:'#43a047'}}
                                        required/>
                                        <Button type="submit" style={{backgroundColor:'#43a047',margin:'1px'}}>
                                        <AddIcon style={{fontSize:'40px',color:'white' }} fontSize='42px' />
                                        </Button>
                                    
                                    </div>
                                </form>
                                
                            <br/>

                            <div className="listitem">
                                <ol>
                                        {
                                        mynewitem.map((val,index)=>{
                                            return <Itemlist
                                                text= {val}
                                                id = {index}
                                                selectme= {del}
                                            />;
                                            
                                        })
                                        }
                                </ol>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;