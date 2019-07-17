export declare const dbProvider: {
    provide: string;
    useFactory: () => Promise<import("typeorm").Connection>;
};
