import { MongoClient } from "mongodb";

const url = process.env.MONGODB_URI!;
const options = {
  maxPoolSize: 10,
};
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient>;
}
// 单列模式
if (!global._mongoClientPromise) {
  client = new MongoClient(url, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
