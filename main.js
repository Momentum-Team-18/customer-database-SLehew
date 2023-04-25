let customerProfiles = document.querySelector("#customerProfiles")

console.log(customers);

for (let customer of customers) {
    let customerCard = document.createElement('div');
    let customerName = document.createElement('h2');
    customerName.innerText = `${customer.name.first} ${customer.name.last}`;
    customerCard.appendChild(customerName);
    customerProfiles.appendChild(customerCard);
    let customerEmail = document.createElement('p');
    customerEmail.innerText = customer.email;
    customerCard.appendChild(customerEmail);
}