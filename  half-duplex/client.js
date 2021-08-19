'use strict';

const net = require('net');

const lessonIds = [
  '136797',
  '136798',
  '136799',
  '136800',
  '136801',
  '136803',
  '136804',
  '136806',
  '136807',
  '136808',
  '136809',
  '141994',
  '143517',
  '143557',
  '143564',
  '143644',
  '146470',
  '146569',
  '146582'
];

const socket = new net.Socket({});

socket.connect({
  host: '127.0.0.1',
  port: 4000
});

const encode = lessonId => {
  const buffer = Buffer.alloc(4);
  buffer.writeInt32BE(lessonIds[lessonId]);

  return buffer;
};

let lessonId = Math.floor(Math.random() * lessonIds.length);
socket.write(encode(lessonId));

socket.on('data', buffer => {
  console.log(buffer.toString());

  lessonId = Math.floor(Math.random() * lessonIds.length);
  socket.write(encode(lessonId));
});
