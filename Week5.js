//Connor Klingman
//Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements.
//Use at least one array.
//Use at least two classes.
//Your menu should have the options to create, view, and delete elements.

class Customer {
    constructor (name, order){
    this.name = name; 
    this.order = order; 

    }
}

class MenuApp {
    constructor (){
        this.customers = [];
    }

    addCustomer() {
        let name = prompt ('enter name of customer');
        let order = prompt ('enter order number for customer');
        this.customers.push(new Customer(name, order));
    }

    removeCustomer() {
        let index = prompt ('enter customer number to remove');
        if (index >= 0 && index < this.customers.length){
            this.customers.splice(index, 1);
        }
    }

   showCustomers() {
        let customerString = '';
        alert('show customers')
        for (let i = 0; i < this.customers.length; i++){
            alert ('i = ' + i);
            alert ('size = ' + this.customers.length);
            alert ('name = ' + this.customers[i].name);
            customerString = customerString + i + ')' + this.customers[i].name + '\n';
        }
        alert (customerString);
    }
    showMenuOptions() {
        let options = prompt ('displayMenu, option 1-addCustomer, option 2-removeCustomer, option 3-showCustomers');
        return (options);
        
    }
    
}

//monitor items in menu
let cust = new MenuApp();
let ret = cust.showMenuOptions();
while (ret != '4'){
 switch(ret) {
    case '1':
       cust.addCustomer();
        break;
    case '2':
        cust.removeCustomer();
        break;
    case '3':
        cust.showCustomers();
        break;
    case '4':
        exit;  //All done with program 
    default:
        prompt ('enter valid value')
    }
    ret = cust.showMenuOptions();

}
