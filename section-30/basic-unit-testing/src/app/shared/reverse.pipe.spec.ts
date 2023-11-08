import { ReversePipe } from "./reverse.pipe"

describe('Pipe: Reverse Pipe', () => {
    it('should reverse the value', () => {
        let reversePipe = new ReversePipe();
        expect(reversePipe.transform('hello')).toEqual('olleh');
    });
});