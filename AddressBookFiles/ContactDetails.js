
const prompt = require('prompt-sync')();
class ContactDetails {

    firstName;
    lastName;
    address;
    city;
    zip;
    state;
    phoneNumber;
    email;

    constructor(firstName, lastName, address, city, zip, state, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.zip = zip;
        this.state = state;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    get firstName() {
        return this.firstName;
    }

    set firstName(firstName) {
        let regex = new RegExp('[A-Z]{1}[a-z]{5,}$');
        if (regex.test(firstName)) {
            this.firstName = firstName;
        }
        else {
            throw "Incorrect First Name !!";
        }

    }

    get lastName() {
        return this.lastName;
    }
    set lastName(lastName) {
        let regex = new RegExp('^[A-Z]{1}[a-z]{5,}$')
        if (regex.test(lastName)) {
            this.lastName = lastName;
        } else {
            throw "Incorrect Last Name !!";
        }


    }

    get address() {
        return this.address;
    }
    set address(address) {
        let regex = new RegExp('^([0-9A-Za-z\\s,-\\\\.]{4,})$');
        if (regex.test(address)) {
            this.address = address;
        } else {
            throw "Incorect Address !! ";
        }

    }

    get city() {
        return this.city;
    }
    set city(city) {
        let regex = new RegExp('^[A-Z]{1}[a-z]{4,}$');
        if (regex.test(city)) {
            this.city = city;
        } else {
            throw "Incorrect City !!";
        }
    }

    get zip() {
        return this.zip;
    }
    set zip(zip) {
        let regex = new RegExp('^[1-9]{6,}$');
        if (regex.test(zip)) {
            this.zip = zip;
        } else {
            throw "Incorrect Zip !!";
        }

    }

    get state() {
        return this.state;
    }
    set state(state) {
        let regex = new RegExp('^[A-Z]{1}[a-z}{6,}$');
        if (regex.test(state)) {
            this.state = state;
        } else {
            throw "Incorrect state !!";
        }

    }

    get phoneNumber() {
        return this.phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let regex = new RegExp('^[6-9]{1}[0-9]{9,}$');
        if (regex.test(phoneNumber)) {
            this.phoneNumber = phoneNumber;
        } else {
            throw "Incorrect PhoneNumber !!";
        }

    }

    get email() {
        return this.email;
    }
    set email(email) {
        let regex = RegExp('^[A-Za-z0-9!#$%&*+\\\\=?`{|}~^-]+(?:\\.[A-Za-z!#$%&*+\\\\=?`{|}~^-]+)*@(?:([0-9-]{1}|[a-zA-Z]{3,5})\\.)+[a-zA-Z]{2,3}$');
        if (regex.test(email)) {
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
let contactDataList = new Array();
flag = true;
while (flag) {
    console.log("1.To insert new Contact \n2.To dispaly Contact\n3.Edit exiting contacts\n4.Delete contact\n5.Search by city\n6.Sort By name\n7Sort By city\n8.Exit ");
    let choice = parseInt(prompt("Enter the choice "));
    switch (choice) {
        case 1:
            insert(contactDataList);
            break;
        case 2:
            console.log(contactDataList);
            break;
        case 3:
            editContactList(contactDataList);
            break;
        case 4:
            let name = prompt("Enter the name to be deleted ");
            deleteContact(contactDataList, name);
            break;
        case 5:
            searchByCity(contactDataList);
            break;
        case 6:
            sortContact(contactDataList);
            break;
        case 7:
            sortByCity(contactDataList);
            break;
        
        case 8:
            console.log("Exited !!");
            flag = false;
            break;

        default:
            console.log("Enter the correct choice");
            break;
    }

}




function insert(contactDataList) {
    var contactData = new ContactDetails();
    contactData.firstName = prompt("Enter the first name : ");
    contactData.lastName = prompt("Enter the last name : ");
    contactData.address = prompt("Enter the address : ");
    contactData.city = prompt("Enter the city : ");
    contactData.zip = prompt("Enter the Zip : ");
    contactData.state = prompt("Enter the state : ");
    contactData.phoneNumber = prompt("Enter the phone number : ");
    contactData.email = prompt("Enter the email : ");
    contactDataList.push(contactData);
    return contactDataList;
}


function editContactList(contactDataList) {
    let firstName = prompt("Enter the first name ");
    console.log("Data in book" + contactDataList);
    contactDataList.forEach(element => {
        if (element.firstName === firstName) {
            console.log("Enter want you want to edit");
            console.log("1.LastName\n2.Address\n3.City\n4.Zip\n5.State\n6.PhoneNumber\n7.Email\n8.Exit");
            let choices = parseInt(prompt("Enter the number to edit : "));
            let contactData = new ContactDetails();

            switch (choices) {
                case 1:
                    contactData.lastName = prompt("Enter the last name to be edit ");
                    element.lastName = contactData.lastName;
                    break;
                case 2:
                    contactData.address = prompt("Enter the Address to be edit");
                    element.address = contactData.address;
                    break;
                case 3:
                    contactData.city = prompt("Enter the City to be edited");
                    element.city = contactData.city;
                    break;
                case 4:
                    contactData.zip = prompt("Enter the zip to be edited");
                    element.zip = contactData.zip;
                    break;
                case 5:
                    contactData.state = prompt("Enter the State to be edited ");
                    element.state = contactData.state;
                    break;
                case 6:
                    contactData.phoneNumber = prompt("Enter the phoneNumber to be edited ");
                    element.phoneNumber = contactData.phoneNumber;
                    break;
                case 7:
                    contactData.email = prompt("Enter the email to be updated");
                    element.email = contactData.email;
                    break;
                case 8:
                    console.log("you Exited !!");
                    break;
                default:
                    console.log("Wrong choice !!");
                    break;
            }

        }

    });
    return contactDataList;

}

function deleteContact(contactDataList, firstName) {
    contactDataList.forEach(value => {
        if ((value.firstName === firstName) == true) {
            let index = contactDataList.indexOf(firstName);
            contactDataList.splice(index, 1);
        }
    })
    return contactDataList;
}

function searchByCity(contactDataList) {
    let count = 0
    let city = prompt("Enter the city");
    contactDataList.forEach(element => {
        if ((element.city === city) == true) {
            console.log(element);
            count++;
        }
    })
}

function sortContact(contactDataList) {
    contactDataList.sort((a, b) => {
        if (a === b) {
            return 0;
        }
        return a.firstName < b.firstName ? -1 : 1
    });
    console.log(contactDatalist);
}

function sortByCity(contactDataList) {
    contactDataList.sort((a, b) => {
        if (a == b) {
            return 0;
        }
        return a.city < b.city ? -1 : 1;

    });
    console.log(contactDataList);
}





