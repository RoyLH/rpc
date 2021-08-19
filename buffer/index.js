'use strict';

const fs = require('fs');
const protobuf = require('protocol-buffers');

const schemas = protobuf(fs.readFileSync(`${__dirname}/schemas.proto`));

const { Course } = schemas;

const buffer = Course.encode({
  id: 4,
  name: 'hello',
  lesson: []
});

console.log(buffer);

console.log(Course.decode(buffer));
