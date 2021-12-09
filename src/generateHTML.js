function generateEmployeeHTML(team) {
  let html = ``;

  team.forEach((employee) => {
    const name = employee.getName();
    const role = employee.getRole();
    const roleIcon = getRoleIcon(role);
    const email = employee.getEmail();
    const id = employee.getID();
    const extraIcon = getExtraIcon(role);
    const extraData = getExtraData(employee, role);

    html += `
      <div class="flex flex-col shadow-lg rounded-b-2xl mx-5">
        <h2 class="w-100 text-xl text-center bg-purple-400 py-2 rounded-t-2xl border-solid border-2 border-purple-800">${name}</h2>
        <div class="text-md text-left bg-white py-5 px-10 md:px-5 rounded-b-2xl border-solid border-2 border-t-0 border-purple-800">
          <div class="table">
            <div class="table-row">
              <div class="table-cell pr-5">
                <i class="${roleIcon}"></i>
              </div>
              <div class="table-cell">${role}</div>
            </div>
            <div class="table-row">
              <div class="table-cell"><i class="fas fa-id-card"></i></div>
              <div class="table-cell">${id}</div>
            </div>
            <div class="table-row">
              <div class="table-cell"><i class="far fa-envelope"></i></div>
              <div class="table-cell">
                <a href="mailto:${email}">${email}</a>
              </div>
            </div>
            <div class="table-row">
              <div class="table-cell"><i class="${extraIcon}"></i></div>
              <div class="table-cell">${extraData}</div>
            </div>
          </div>
        </div>
      </div>`;
  });

  return html;
}

function getRoleIcon(role) {
  switch (role) {
    case 'Manager':
      return `fas fa-briefcase`;
    case 'Engineer':
      return `fas fa-glasses`;
    case 'Intern':
      return `fas fa-pencil-alt`;
  }
}

function getExtraIcon(role) {
  switch (role) {
    case 'Manager':
      return `far fa-building`;
    case 'Engineer':
      return `fab fa-github-square`;
    case 'Intern':
      return `fas fa-school`;
  }
}

function getExtraData(employee, role) {
  switch (role) {
    case 'Manager':
      return `${employee.getOfficeNumber()}`;
    case 'Engineer':
      const github = employee.getGitHub();
      return `<a href="${github}" target="_new">${github}</a>`;
    case 'Intern':
      return `${employee.getSchool()}`;
  }
}

function generateHTML(team) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Meet Our Team</title>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Readex+Pro&display=swap" rel="stylesheet" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <style>
      body {
        font-family: 'Readex Pro', sans-serif;
      }
    </style>
  </head>
  <body class="bg-purple-100 overflow-x-hidden">
    <header class="flex justify-center items-center bg-purple-400 black w-100 h-14">
      <h2 class="text-2xl">Meet the Development Team</h2>
    </header>

    <main class="container flex flex-row flex-wrap gap-y-8 pt-20 place-content-center mx-auto">
    ${generateEmployeeHTML(team)}

    </main>
  </body>
</html>
  `;
}

module.exports = generateHTML;
