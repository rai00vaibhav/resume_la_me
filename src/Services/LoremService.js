export const LoremService = {
    getLoremIpsum:() => {
        const response = fetch(`https://baconipsum.com/api/?type=meat-and-filler`);
        return response;
    }
}