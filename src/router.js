const { handelHomePage, handelPublicFiles, handelNotFound, handelResultPage, handelAnimalPage, handelSearchPage } = require('./handler');
const router = (request, response) => {
    const endPoint = request.url;
    if (endPoint === '/') {

        handelHomePage(request, response, endPoint);

    } else if (endPoint.indexOf('/public/') !== -1) {

        handelPublicFiles(request, response, endPoint);

    } else if (endPoint === '/result') {
        handelResultPage(request, response);
    } else if (endPoint === '/search') {
        handelSearchPage(request, response);
    } else if (endPoint === '/animal') {
        handelAnimalPage(request, response);
    }
    else {

        handelNotFound(request, response);

    }
}

module.exports = router;