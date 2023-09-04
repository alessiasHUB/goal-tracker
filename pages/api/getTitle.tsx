import { JSDOM } from "jsdom";
import { NextApiRequest, NextApiResponse } from "next";

const getTitle = async (req: NextApiRequest, res: NextApiResponse) => {
  //recieve the input from the req body, parse from json
  const body = JSON.parse(req.body);
  const { year, category } = body;

  console.log("year: ", year);
  console.log("category: ", category);

  const response = await fetch(
    `https://www.goodreads.com/choiceawards/best-${category}-books-${year}`
  );

  const html = await response.text();

  const dom = new JSDOM(html);
  const document = dom.window.document;

  const div = document.querySelector(".miniBookCover");
  const img = div.querySelector("img");
  const title = img.getAttribute("title");

  console.log("book: ", title);

  //Send title back to client
  res.status(200).json({ title });
};

export default getTitle;
