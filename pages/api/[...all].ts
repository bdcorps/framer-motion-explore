import { NextApiRequest, NextApiResponse } from "next";

import httpProxyMiddleware from "next-http-proxy-middleware";


// i need to proxy all requests to /api to https://www.example.com/api, do this with http-proxy-middleware

// export default (req: NextApiRequest, res: NextApiResponse) => (
//   httpProxyMiddleware(req, res, {
//     target: 'https://www.example.com',
//     pathRewrite: {
//       patternStr: '^/api',
//       replaceStr: ''
//     },
//   })
// );




export const config = {
  api: {
    // Enable `externalResolver` option in Next.js
    externalResolver: true,
  },
}

export default (req: NextApiRequest, res: NextApiResponse) => httpProxyMiddleware(req, res, {
  // You can use the `http-proxy` option
  target: 'https://slidesai.launchman.page',
  changeOrigin: false,
  // In addition, you can use the `pathRewrite` option provided by `next-http-proxy`


  pathRewrite: [{
    patternStr: '^/api/launchman',
    replaceStr: 'https://slidesai.launchman.page'
  }, {
    patternStr: '^/api/myhome',
    replaceStr: 'https://github.com/stegano'
  }],
});
