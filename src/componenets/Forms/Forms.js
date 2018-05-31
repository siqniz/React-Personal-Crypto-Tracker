import React, { Component } from 'react'


const form = (props) => {

    return (

        <div>
            <label>{props.label}</label>
            <input formtype={props.formtype} {...props.htmlprops} />
        </div>
    );

}

export default form;