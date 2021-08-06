import React, { useState } from 'react';

import './Contact.css';


// class Contact extends Component {

const Contact = () => {





    // constructor(props){
    //     super(props);

    //     this.state = {Fullname : "",
    //                   email : "",
    //                   phone : "",
    //                   messages : ""

    // }
    // }

    // handlechangeall = (e) => {
    //     this.setState({ [e.target.name] : e.target.value })

    // }

    // handlesubmit = (e) => {
    //     // alert (`my name is ${this.state.Fullname} my email id is ${this.state.email} and number is ${this.state.mobile} and messages is ${this.state.messages}`);
    //     alert(JSON.stringify(this.state))
    //     e.preventDefault();
    // }



    const [user, setUser] = useState({
        name: "", email: "", phone: "", messages: ""
    });

    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, phone, messages } = user;

        const res = await fetch("/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                name, email, phone, messages

            })
        });
        const data = await res.json();
        if (data.status === 422 || !data) {
            window.alert("ples fill the form properly");
            //    console.log("Please proper fill form");

        } else {
            window.alert("Thank You for Contact Us");
            // console.log("Thank You for Contact Us");


        }
    }


    // render() {
    return <>
        <h1>Contact Us</h1>
        <form method="POST" > <center>
            <label>Name </label> <br />
            <input type="text" placeholder='Enter your Name' autoComplete='off' name="name" value={user.Fullname} onChange={handleInputs} required /> <br />
            <label> Email</label> <br />
            <input type="email" placeholder='Enter your email' autoComplete='off' name="email" value={user.email} onChange={handleInputs} required /> <br />
            <label> Mobile Number</label> <br />
            <input type="number" placeholder='Enter your number' autoComplete='off' name="phone" value={user.phone} onChange={handleInputs} required /> <br />
            <label> Messages </label> <br />
            <textarea cols="83" rows="4" autoComplete='off' name="messages" value={user.messages} onChange={handleInputs} placeholder='Enter your Quaries' ></textarea> <br />
            <input type="submit" onClick={PostData} value="send" /> </center>


        </form> </>
    // }

}


export default Contact;

