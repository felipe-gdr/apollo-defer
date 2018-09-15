"use strict";

var _templateObject = _taggedTemplateLiteral(["\n {\n  books {\n    title\n    author\n    comments {\n      text\n    }\n  }\n}\n    "], ["\n {\n  books {\n    title\n    author\n    comments {\n      text\n    }\n  }\n}\n    "]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _require = require("apollo-boost"),
    ApolloClient = _require.ApolloClient,
    HttpLink = _require.HttpLink,
    InMemoryCache = _require.InMemoryCache,
    gql = _require.gql;

var fetch = require("node-fetch");

global.fetch = fetch;

var client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4000"
  })
});

client.query({
  query: gql(_templateObject)
}).then(function (result) {
  return console.log(result);
});