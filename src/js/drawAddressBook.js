import React, {Component} from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";
import {fulldob,fulladdress,age,fullname} from "./funcs";


export class AddressList extends Component {
    render() {
        return (
            <div className='container list'>
                <li>Scroll for more contacts</li>
                <ul>
                    {this.props.items.map( item => (
                        <li key={item.key} >
                            <a href={"#contact/" + item.id}>
                                <figure>
                                    <img src={item.picture.thumbnail} alt={fullname(item.name)} />
                                    <figcaption>
                                        <p>{fullname(item.name)}</p>
                                        <span>{fulldob(item.dob)}</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

AddressList.propTypes = {
    items: PropTypes.array
};


export class ContactDetails extends Component {
    render() {
        if (!this.props.item){
            return (
                <div className='container details'>
                    <p>Please select a contact</p>
                </div>
            );
        } else {
            return (
                <div className='container details'>
                    <div>
                        <h2>{fullname(this.props.item.name, true)}</h2>
                        <figure>
                            <img src={this.props.item.picture.large} alt={fullname(this.props.item.name)} />
                        </figure>
                        <p>Gender:&emsp;&nbsp;{this.props.item.gender}</p>
                        <p>{fulldob(this.props.item.dob)} ( {age(this.props.item.dob)} years )</p>
                        <p>{this.props.item.email}</p>
                        <p>{this.props.item.phone} / {this.props.item.cell}</p>
                        <p>{fulladdress(this.props.item.location)}</p>
                    </div>
                </div>
            );
        }
    }
}

ContactDetails.propTypes = {
    item: PropTypes.object
};


