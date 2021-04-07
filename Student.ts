class Students {

    constructor(private lName: string, private fName: string) {
    };

    GetFullName(): string {
        return this.fName + " " + this.lName;
    };
};

export { Students };