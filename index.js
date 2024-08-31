'use strict';

class User  {
    constructor (name, role) {
        if (typeof role !== 'string' || /\d/.test(role)) {
            alert(`Invalid role: ${role}. Role cannot be a number or contain numbers.`);
            return;
        }

        
        if (!['admin', 'user'].includes(role)) {
            alert(`Invalid role: ${role}. Role must be either 'admin' or 'user'.`);
            return;
        }
        
        this.name = name;
        this.role = role;
        //this.loggedIn = false;

    }

    getName() {
        return this.name;
    }

    getRole() {
        return this.role;
    }

    login() {
        console.log(`${this.name} has logged in.`);
    }

    logout() {
        console.log(`${this.name} has logged out.`);
    }

    changeName(newName) {
        this.name = newName;
    }

    changePassword(newPassword) {
        console.log(`Password for ${this.name} has been changed.`);
    }

}




const yana = new User('Yana', 'admin1'); // invalid role (contains number)
const petro = new User('Petro', 'manager'); // invalid role (not 'admin' or 'user')
const validUser = new User('Olga', 'admin'); // valid user

console.log(yana);
console.log(petro);
console.log(validUser);



class Admin extends User {
    constructor(name) {
        super(name, 'admin');
        this.users = [];
    }

    
    addUser(user) {
        if (user instanceof User) {
            this.users.push(user);
            console.log(`User ${user.getName()} added.`);
        } else {
            alert('Invalid user. Must be an instance of User.');
        }
    }

   
    removeUser(userName) {
        this.users = this.users.filter(user => user.getName() !== userName);
        console.log(`User ${userName} removed.`);
    }

    
    changeUserRole(userName, newRole) {
        const user = this.users.find(user => user.getName() === userName);
        if (user) {
            if (!['admin', 'user'].includes(newRole)) {
                alert(`Invalid role: ${newRole}. Role must be either 'admin' or 'user'.`);
                return;
            }
            user.role = newRole;
            console.log(`${userName}'s role changed to ${newRole}`);
        } else {
            console.log(`User ${userName} not found.`);
        }
    }

    
    getAllUsers() {
        return this.users.map(user => ({ name: user.getName(), role: user.getRole() }));
    }

    
    removeAllUsers() {
        this.users = [];
        console.log('All users removed.');
    }
}





const admin = new Admin('Petro');


const user1 = new User('Ivan', 'user');
const user2 = new User('Oksana', 'admin');
admin.addUser(user1);
admin.addUser(user2);


admin.changeUserRole('Ivan', 'admin');


console.log(admin.getAllUsers());


admin.removeUser('Oksana');


admin.removeAllUsers();
