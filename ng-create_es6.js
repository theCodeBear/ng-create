#!/Users/tkrone/.nvm/versions/v4.2.3/bin/node
// A script for creating Angular directories like directives, states, filters

const fs = require('fs');
if (process.argv.length < 5) {
  console.error('Not enough arguments');;
  process.exit(1);
}

let ngAppName = process.argv[2];
let type = process.argv[3];
let name = process.argv[4];
let pascalName = name[0].toUpperCase().concat(name.slice(1));

if (type === 'directive') {
  fs.mkdir(name, () => {
    fs.appendFile(`${name}/${name}.template.html`);
    fs.appendFile(`${name}/${name}.directive.js`,
`'use strict';

angular.module('${ngAppName}')

.directive('${name}', ${name});

function ${name}() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'directives/${name}/${name}.template.html'
  };
}`
    );
  });
} else if (type === 'filter') {
  fs.appendFile(`${name}.filter.js`,
`'use strict';

angular.module('${ngAppName}')

.filter('${name}', ${name});

function ${name}() {
  return (input) => {
    return;
  };
}`
  );
} else if (type === 'state') {
  fs.mkdir(name, () => {
    fs.appendFile(`${name}/${name}.html`);
    fs.appendFile(`${name}/${name}.controller.js`,
`'use strict';

angular.module('${ngAppName}')

.controller('${pascalName}Ctrl', ${pascalName}Ctrl);

${pascalName}Ctrl.$inject = [];
function ${pascalName}Ctrl() {
  let vm${pascalName} = this;
}`
    );
  });
} else if (type === 'service') {
  fs.appendFile(`${name}.service.js`,
`'use strict';

angular.module('${ngAppName}')

.factory('${pascalName}', ${pascalName});

${pascalName}.$inject = [];
function ${pascalName}() {
  const service = {};
  return service;
}`
  );
} else {
  console.error('Error: invalid angular type -- change first argument');
  process.exit(1);
}

