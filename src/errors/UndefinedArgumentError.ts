export class UndefinedArgumentError extends Error {
    public constructor(msg?: string) {
        super();
        this.message = msg ? msg : "No argument provided.  Try '.getString(0)'";
        this.name = "UndefinedArgumentError";
    }
}
