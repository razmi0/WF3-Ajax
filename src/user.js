const User = class User {
  constructor(entity) {
    const {
      name, email, location, login, picture
    } = entity;
    this.name = name;
    this.email = email;
    this.location = location;
    this.login = login;
    this.picture = picture;
  }

  render() {
    const { title, first, last } = this.name;
    const {
      street, city, state, postcode
    } = this.location;
    const { number, name } = street;
    const { username, password } = this.login;
    const { large } = this.picture;
    return `
    
    <div class="card">
  <img src="${large}" class="card-img-top rounded-circle" alt="photo du user">
  <div class="card-body">
    <h5 class="card-title">${title} ${first} ${last}</h5>
    <p class="card-text"></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${this.email}</li>
    <li class="list-group-item">User :${username}</li>
    <li class="list-group-item">Password :${password}</li>
  </ul>
  <div class="card-body">State :${state}
    <span href="#" class="card-link">${city} </span>
    <span href="#" class="card-link">${number} ${name} </span>
    <span href="#" class="card-link">${postcode} </span> 
  </div>
</div>

`;
  }
};

export default User;
