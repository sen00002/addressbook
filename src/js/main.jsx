
import ReactDOM from "react-dom";
import React from "react";
import {contacts} from "./contacts";
import { AddressList, ContactDetails } from "./drawAddressBook";


let state = {};

function setState(changes){
    let item,MainView;
    state = Object.assign({}, state, changes);
    let location = state.location.replace(/^#\/?|\/$/g, "").split("/");

    if (location[0] === "contact" ){
        item = state.items.find(item => item.id == location[1] ? true : false);
    }
    MainView = (
        <div className="wrap">
            <AddressList items = {state.items} />
            <ContactDetails item = {item}/>
        </div>
    );
    ReactDOM.render(MainView, document.getElementById("react-app"));
}

setState({
    items: contacts,
    location: location.hash
});

window.addEventListener("hashchange", ()=>setState({location: location.hash}));

