import "jest";
import { applySearch } from "../App";

const transactions = [
    { merchant: "Starbucks" },
    { merchant: "Whole Foods" },
    { merchant: "Till Inc." },
    { merchant: "Verizon" },
];

describe("Searching by merchant name... ", () => {
    it("returns a list of transactions that match the merchant name exactly", () => {
        const t = applySearch(transactions, "Whole Foods");
        expect(t).toEqual([ transactions[1] ])
    });

    it("returns a list of transactions that match a sub-string of the merchant name", () => {
        const t = applySearch(transactions, "bucks");
        expect(t).toEqual([ transactions[0] ])
    });

    it("returns an empty list if there is nothing containing the search term", () => {
        const t = applySearch(transactions, "Amazon");
        expect(t).toEqual([]);
    });
});

