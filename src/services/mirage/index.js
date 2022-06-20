import { createServer, Model } from "miragejs";

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend({}),
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users");
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  console.log("teste");

  return server;
}
