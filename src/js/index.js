import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

fetch(
  "https://api.github.com/users/krysiajanik/repos?sort=created&direction=desc"
)
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const { name, description, homepage, html_url} = repo;
      const projectList = document.querySelector(".projects__grid--js");

      const box = `<div class="projects__box">
      <table class="projects__table">
        <thead>
          <tr>
            <th class="projects__items">project:</th>
            <th class="projects__properties projects__name projects__name--js">${name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="projects__items">description:</td>
            <td class="projects__properties">${description}</td>
          </tr>
          <tr>
            <td class="projects__items">demo:</td>
            <td class="projects__properties">
              <a href="${homepage}" class="projects__link">&lt;see here&gt;</a> </td>
          </tr>
          <tr>
            <td class="projects__items">github:</td>
            <td class="projects__properties">
              <a href="${html_url}" class="projects__link">&lt;source code&gt;</a> </td>
          </tr>
        </tbody>
      </table>
      </div>`;
      if (repo.has_pages === true) {
        projectList.innerHTML += box;
      }
    }
  })
  .catch((error) => {
    console.log(error);
  });


  const scrollHandling = document.querySelector(".header__link--js");

  
  scrollHandling.addEventListener('click', () => {
    behavior: 'smooth' 
  })


  

  const upTrigger = 0.5*Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  const upButton = document.querySelector(".top--js");

  
  function showUP () {
    if (window.scrollY > upTrigger) {
        upButton.style.display = "block";
      } else {
        upButton.style.display = "none";
      }
  }

window.addEventListener('scroll', showUP)



