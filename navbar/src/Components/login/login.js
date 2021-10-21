import axios from "axios";
import { useContext, useState } from "react"
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import React from "react";

function Login (){
    return (
        <div className="App">
        <br/>
        <form onSubmit={handleSubmit}>
            <h2>Digite seu nome de Usuário</h2>
            <input type="text" value={name} onChange={event => setName(event.target.value)}/>
            <button>login</button>
        </form>
        <br/>
    </div> 
    )
}