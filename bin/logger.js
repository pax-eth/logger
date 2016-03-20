#!/bin/sh
':' //;
':' //; export TERM=xterm-256color
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

require('../app.js');
