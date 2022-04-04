// Name:
// Simple validation of a username with regex

// Instructions:
// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

// Answer:
const validateUsr = username => /^([a-z]|\d|_){4,16}$/.test(username)