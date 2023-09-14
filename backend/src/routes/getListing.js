import { fakeListings } from "./fake-data";

export const getListingRoute = {
    method: "GET",
    path: '/api/listings/{id}',
    handler: (req, h) => {
        let id = req.params.id
        return fakeListings.find(value => value.id === id)
    }
}