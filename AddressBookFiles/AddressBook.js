// importing another class to this class
//const ContactDetails = require("./ContactDetails.js");
//const ContactDetails = require("D:\HTML\JSDay40Problem\AddressBookFiles> Node AddressBook.js") ;
const prompt = require('prompt-sync')();

class ContactDetails {

    //entities
    firstName = "";
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(...params) {

        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];

    }

    // getters and setters
    get fName() {
        return this.firstName;
    }
    /**
     * @param {any} firstName
     */
    set fName(firstName) {
        let regex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (regex.test(firstName)) {
            this.firstName = firstName;
        }
        else {
            throw "Incorrect First Name !!!";
        }
    }

    get lName() {
        return this.lastName;
    }
    /**
     * @param {any} lastName
     */
    set lName(lastName) {
        let regex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (regex.test(lastName)) {
            this.lastName = lastName;
        }
        else {
            throw "Incorrect Last Name !!!";
        }
    }

    get addressName() {
        return this.address;
    }
    /**
     * @param {any} address
     */
    set addressName(address) {
        let regex = RegExp('^([0-9A-Za-z\\s,-\\\\.]{4,})$');
        if ( regex.test( address )) {
            this.address = address;
        }
        else {
            throw "Incorrect Address !!!";
        }
    }

    get cityName() {
        return this.city;
    }
    /**
     * @param {any} city
     */
    set cityName(city) {
        let regex = RegExp('^([A-Za-z\\s]{4,})$');
        if ( regex.test( city )) {
            this.city = city;
        }
        else {
            throw "Incorrect City Name !!!";
        }
    }

    get stateName() {
        return this.state;
    }
    /**
     * @param {any} state
     */
    set stateName(state) {
        let regex = RegExp('^([A-Za-z\\s]{4,})$');
        if ( regex.test( state )) {
            this.state = state;
        }
        else {
            throw "Incorrect State Name !!!";
        }
    }

    get zipNumber() {
        return this.zip;
    }
    /**
     * @param {any} zip
     */
    set zipNumber(zip) {
        let regex = RegExp('^([0-9]{6})|([0-9]{3}(\\s)[0-9]{3})$');
        if ( regex.test( zip )) {
            this.zip = zip;
        }
        else {
            throw "Incorrect Zip Number !!!";
        }
    }

    get phoneNo() {
        return this.phoneNumber;
    }
    /**
     * @param {any} value
     * @param {string} phoneNumber
     */
    set phoneNo(phoneNumber) {
        let regex = RegExp('^(0|91)?[\\s][0-9]{10}$');
        if ( regex.test( phoneNumber )) {
            this.phoneNumber = phoneNumber;
        }
        else {
            throw "Incorrect phone number !!!";
        }
    }

    get emailID() {
        return this.email;
    }
    /**
     * @param {any} email
     */
    set emailID(email) {
        let regex = RegExp('^[A-Za-z0-9!#$%&*+\\\\=?`{|}~^-]+(?:\\.[A-Za-z!#$%&*+\\\\=?`{|}~^-]+)*@(?:([0-9-]{1}|[a-zA-Z]{3,5})\\.)+[a-zA-Z]{2,3}$');
        if ( regex.test( email )) {
            this.email = email;
        }
        else {
            throw "Incorrect email address !!!";
        }
    }

    toString() {
        return "firstName = " + this.firstName + ", lastName = " + this.lastName + ", address = " + this.address + ", city = " + this.city +
            ", state = " + this.state + ", zip = " + this.zip + ", phoneNumber = " + this.phoneNumber + ", email = " + this.email;
    }


}

var contactData = new ContactDetails();
contactData.firstName = prompt("Enter the first name : " );
contactData.lastName = prompt("Enter the last name : ");
contactData.address = prompt("Enter the address : ");
contactData.city = prompt("Enter the city : ");
contactData.zip = prompt("Enter the Zip : ");
contactData.state = prompt("Enter the state : ");
contactData.phoneNumber = prompt("Enter the phone number : ");
contactData.email = prompt("Enter the email : ");
console.log(contactData.toString());