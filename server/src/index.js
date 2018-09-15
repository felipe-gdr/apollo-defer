const { ApolloServer, gql } = require("apollo-server");

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    comments: [
      {
        user: "John",
        text: "I liked it"
      },
      {
        user: "Mary",
        text: "It is a book"
      }
    ]
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

const typeDefs = gql`
  type Book {
    title: String
    author: String
    comments: [Comment]
  }
  
  type Comment {
    user: String
    text: String
  }

  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books
  },
  Book: {
    comments: (book) => {
      return new Promise(resolve => {
        setTimeout(() => resolve(book.comments), 5000);
      })
    } 
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
