import axios from 'axios';
import User from './user';

const Users = class Users {
  constructor(el) {
    this.el = document.querySelector(el);
    this.users = [];
  }

  async handleOnClick() {
    const elBtn = document.querySelector('button');
    const elMain = document.querySelector('main');
    const url = 'https://randomuser.me/api/';
    const random = Math.floor(Math.random() * 20) + 10;
    const params = {
      results: random
    };

    elBtn.addEventListener('click', async () => {
      const res = await axios.get(url, { params });
      this.users = res.data.results;
      console.log(this.users);
      console.log(params);
      elMain.innerHTML = this.userRender();
    });
  }
  // axios.get(url)
  //   .then((response) => {
  //     this.users = response.data.results;
  //     callback();
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  //   .finally((res) => {
  //     console.log(`finally : ${res}`);
  //   });

  userRender() {
    return ` ${this.users.map((userEntity) => new User(userEntity).render()).join('')}`;
  }

  render() {
    return `
      <div class="row mt-5 mb-5">
        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="button">Refresh</button>
        </div>
      </div>
      <div class="row row-cols-6">
      </div>
      <main class="row row-cols-6">
      </main>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    this.handleOnClick();
  }
};

export default Users;
