const {ApolloClient, HttpLink, InMemoryCache, gql} = require("apollo-boost");
const fetch = require("node-fetch");

global.fetch = fetch;

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: "http://localhost:4000" 
    }),
});

client
  .query({
    query: gql`
 {
  books {
    title
    author
    comments @defer {
      text
    }
  }
}
    `
  })
  .then(result => console.log(JSON.stringify(result, null, 2)));
