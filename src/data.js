function boilerplateGen() {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <nav class="navbar">
      <div
        class="container-fluid d-flex justify-content-center align-items-center bg-dark bg-gradient text-light"
        style="height: 12rem"
      >
        <span class="navbar-brand mb-0 h1 text-center align-middle text-light"
          >My Team</span
        >
      </div>
    </nav>
    <div id="cardholder">
    
`;
}

function ManCardGen(x) {
  for (i = 0; i < x.length; i++) {
    let Name = x[i].name;
    let Id = x[i].id;
    let Email = x[i].email;
    let ManOffice = x[i].officeNumber;
    return `<div
          class="container-fluid d-flex justify-content-center align-items-center"
        >
          <div class="card bg-dark bg-gradient text-light" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">Manager</h5>
              <p class="card-text">
                ${Name}
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Employee ID: ${Id}</li>
              <li class="list-group-item"><a href="mailto:${Email}">Email</a></li>
              <li class="list-group-item">Office Number: ${ManOffice}</li>
            </ul>
          </div>
        </div>
    `;
  }
}
function EngCardGen(x) {
  for (i = 0; i < x.length; i++) {
    let Name = x[i].name;
    let Id = x[i].id;
    let Email = x[i].email;
    let EngGit = x[i].github;
    return `<div
          class="container-fluid d-flex justify-content-center align-items-center"
        >
          <div class="card bg-dark bg-gradient text-light" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">Engineer</h5>
              <p class="card-text">
                ${Name}
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Employee ID: ${Id}</li>
              <li class="list-group-item"><a href="mailto:${Email}">Email</a></li>
              <li class="list-group-item"><a target="_blank" rel="noopener noreferrer" href="http://github.com/${EngGit}">GitHub Profile: ${EngGit}</a></li>
            </ul>
          </div>
        </div>
    `;
  }
}
function IntCardGen(x) {
  for (i = 0; i < x.length; i++) {
    let Name = x[i].name;
    let Id = x[i].id;
    let Email = x[i].email;
    let School = x[i].school;
    return `<div
          class="container-fluid d-flex justify-content-center align-items-center"
        >
          <div class="card bg-dark bg-gradient text-light" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">Intern</h5>
              <p class="card-text">
                ${Name}
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Employee ID: ${Id}</li>
              <li class="list-group-item"><a href="mailto:${Email}">Email</a></li>
              <li class="list-group-item">School: ${School}</li>
            </ul>
          </div>
        </div>
    `;
  }
}

function finalGen() {
  return `</div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
      crossorigin="anonymous"
    ></script>
  </body>
</html>`;
}

module.exports = {
  boilerplateGen,
  ManCardGen,
  EngCardGen,
  IntCardGen,
  finalGen,
};
