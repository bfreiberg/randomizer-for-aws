'use strict';

/**
 * Based on https://stackoverflow.com/a/49742870/6669620
 */

/**
 * Redirects URLs to default document. Examples:
 *
 * /blog            -> /blog/index.html
 * /blog/july/      -> /blog/july/index.html
 * /blog/header.png -> /blog/header.png
 *
 */

let defaultDocument = 'index.html';

exports.handler = async (event, context, callback) => {
  const request = event.Records[0].cf.request;

  if (request.uri != "/") {
    let paths = request.uri.split('/');
    let lastPath = paths[paths.length - 1];
    let isFile = lastPath.split('.').length > 1;

    if (!isFile) {
      if (lastPath != "") {
        request.uri += "/";
      }

      request.uri += defaultDocument;
    }

    console.log(request.uri);
  }

  callback(null, request);
};