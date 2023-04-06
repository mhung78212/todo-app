import { Model, createServer } from "miragejs";

export const setupSever = () => {
    createServer({
        models: {
            lists: Model,
        },

        routes() {
            this.namespace = "api";

            this.post("/todos", (schema, request) => {
                let attrs = JSON.parse(request.requestBody);

                return schema.lists.create(attrs);
            });
            this.get("/todos", (schema) => {
                return schema.lists.all();
            });
        },
    });
};
