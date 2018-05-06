import * as fs from 'fs';
import * as jsf from 'json-schema-faker';
import usersSchema from './usersSchema';

jsf.extend('faker', function() {
  return require('faker');
});

const compiledUsersSchema = jsf(usersSchema);

const json = JSON.stringify({
  users: compiledUsersSchema.users
}, null, 4);

fs.writeFile("./fakeDB/db.json", json, err => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Mock API data generated.");
  }
});
