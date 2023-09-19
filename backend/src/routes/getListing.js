import Boom from '@hapi/boom';
import { fakeListings } from "./fake-data";

export const getListingRoute = {
    method: "GET",
    path: '/api/listings/{id}',
    handler: (req, h) => {
        let id = req.params.id;
        const listing = fakeListings.find(value => value.id === id);

        if (!listing) {
            throw Boom.notFound(`Listing by id does not exist with id ${id}`);
        } else {
            return listing;
        }
    }

}