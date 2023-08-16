import { JSDOM } from "jsdom";
import { NextApiRequest, NextApiResponse } from "next";

//this tutorial was used: https://www.youtube.com/watch?v=bGShHOOoC-U

const getDownloads = async (req: NextApiRequest, res: NextApiResponse) => {
  //recieve the input from the req body, parse from json
  const body = JSON.parse(req.body);
  const { input } = body;

  console.log("input", input);

  const response = await fetch(
    `https://www.npmjs.com/package/${input.toLowerCase()}`
  );

  const html = await response.text();

  const dom = new JSDOM(html);
  const document = dom.window.document;
  const downloads = document.querySelector("._9ba9a726")?.textContent;

  console.log("downloads", downloads);

  //Send downloads back to client
  res.status(200).json({ downloads });
};

export default getDownloads;
