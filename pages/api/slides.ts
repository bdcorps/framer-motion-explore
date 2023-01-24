// // /pages/api/services.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const htmlResponse = await fetch("https://betterlegal.com/services");
  let data = await htmlResponse.text();
  // Inject base element so all relative URLs in the
  // document resolve to this base URL
  data = data.replace(
    "<html>",
    '<html><base href="https://betterlegal.com" />'
  );
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.write(data);
  res.end();
}


// // /pages/api/services.ts
// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<any>
// ) {
//   const htmlResponse = await fetch("https://slidesai.launchman.page");
//   let data = await htmlResponse.text();
//   // Inject base element so all relative URLs in the
//   // document resolve to this base URL
//   data = data.replace(
//     "<html>",
//     '<html><base href="https://slidesai.launchman.page" />'
//   );

//   // data = data.replace("<head>", "<head><script>document.write('<base href=\"https://slidesai.launchman.page\" />');</script>")

//   res.setHeader("Content-Type", "text/html; charset=utf-8");
//   res.write(data);
//   res.end();
// }
