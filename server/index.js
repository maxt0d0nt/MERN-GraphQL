import { startApolloServer } from "./app.js";
import { typeDefs } from "./graphql/typedev.js";
import { resolvers } from "./graphql/resolvers.js";
import { connectDB } from "./db.js";

connectDB();

startApolloServer(typeDefs, resolvers);

