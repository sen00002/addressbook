export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export function fulldob(dob = "1900-01-01 00:00:01") {
    let date = new Date(dob);
    return months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
}

export function firstcapital(text) {
    return text.split(" ").map(str => str[0].toUpperCase() + str.substring(1)).join(" ");
}

export function fullname({title = "empty", first = "empty", last = "empty"}, withTitle = false) {
    let name = "";
    if (withTitle) {
        name = firstcapital(title) + " ";
    }
    return " " + name + firstcapital(first) + " " + firstcapital(last);
}

export function age(dob = "1900-01-01 00:00:01") {
    let date = new Date(Date.now() - new Date(dob).getTime());
    return Math.abs(date.getUTCFullYear() - 1970);
}


export function fulladdress({street = "empty", city = "empty", state = "empty", postcode = 0}) {
    return "" + firstcapital(street) + ", " + firstcapital(city) + ", " + firstcapital(state) + ", " +  postcode;
}


