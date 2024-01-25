import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY });

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a translator. You have to translate title, contents into Korean with the object type maintained no matter what language the news content is written in, keep the html structure related to the news content, and remove any parts that are not related to the news",
        },

        { role: "user", content: JSON.stringify(req.body.content) },
      ],
      model: "gpt-3.5-turbo-1106",
      temperature: 0.55,
    });

    if (response.choices[0].message.content === null)
      return res
        .status(502)
        .json({ error: "문제가 발생하였습니다\n잠시 후 다시 시도해 주세요." });

    return res
      .status(200)
      .json({ result: JSON.parse(response.choices[0].message.content) });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
