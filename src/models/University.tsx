export class University {
    constructor(
        public alpha_two_code: string,
        public web_pages: string[],
        public name: string,
        public country: string,
        public domains: string[],
        public state_province: string) {
    }
}