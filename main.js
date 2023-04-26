let customerProfiles = document.querySelector("#customerProfiles")

console.log(customers);

for (let customer of customers) {
    let formattedState = nameToAbbr(customer.location.state);
    let formattedDOB = moment(customer.dob.date).format("MMM Do, YYYY");
    let formattedCustDate = moment(customer.registered.date).format("MMM Do, YYYY"); 
    let customerCard = document.createElement('div');
    let customerName = document.createElement('h2');
    customerName.innerText = `${customer.name.first} ${customer.name.last}`;
    let customerImage = document.createElement('img');
    customerCard.appendChild(customerImage);
    customerCard.appendChild(customerName);
    customerName.classList.add('customerName');
    customerProfiles.appendChild(customerCard);
    customerCard.classList.add('customerCard');
    let customerEmail = document.createElement('p');
    customerEmail.innerText = customer.email;
    customerCard.appendChild(customerEmail);
    customerEmail.classList.add('customerEmail');
    customerImage.src = customer.picture.medium;
    customerImage.classList.add('customerImage');
    let customerStreetAddress = document.createElement('p');
    customerStreetAddress.innerText = `${customer.location.street.number} ${customer.location.street.name} \n ${customer.location.city}, ${formattedState} ${customer.location.postcode}`;
    customerCard.appendChild(customerStreetAddress);
    let customerDOB = document.createElement('p');
    customerDOB.innerText = `DOB: ${formattedDOB}`;
    customerCard.appendChild(customerDOB);
    let CustomerSince = document.createElement('p');
    CustomerSince.innerText =`Customer Since: ${formattedCustDate}`;
    customerCard.appendChild(CustomerSince);

}