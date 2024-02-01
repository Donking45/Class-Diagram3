// Base class for users
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  // Function to log in
  login() {
    console.log(`${this.name} logged in.`);
  }

  // Function to log out
  logout() {
    console.log(`${this.name} logged out.`);
  }

  // Common method for polymorphism
  performAction() {
    console.log(`${this.name} performed a generic action.`);
  }
}

// Derived class for interns
class Intern extends User {
    constructor(name, email, password) {
      super(name, email, password, 'Intern');
      this.profile = {};
      this.course = []; // Initialize course as an empty array
      this.learningCommunities = [];
    }
  
  
    // Override the common method for polymorphism
    performAction() {
      console.log(`${this.name} performed an intern-specific action.`);
    }
  }
  
// Derived class for administrators
class Administrator extends User {
    constructor(admin_Id, name, email) {
      super(admin_Id, name, email, 'Administrator');
    }
  
    // Override the common method for polymorphism
    performAction() {
      console.log(`${this.name} performed an administrator-specific action.`);
    }  
}
  
// Derived class for tutors
class Tutor extends User {
    constructor(tutor_Id, name, email) {
    super(tutor_Id, name, email, 'Tutor');
        this.lectureContents = [];
        this.resources = [];
    }
  
  
   // Override the common method for polymorphism
    performAction() {
      console.log(`${this.name} performed an tutor-specific action.`);
    }
}