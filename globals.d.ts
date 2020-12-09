declare namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface Global {
        //https://stackoverflow.com/a/51114250
        testRequest: import("supertest").SuperTest<import("supertest").Test>;
    }
}
