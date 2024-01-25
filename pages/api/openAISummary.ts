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
            "입력받은 해당 뉴스 기사를 간단하게 요약해야한다, 단 요약된 내용만으로 새로운 html태그에 담아서 반환해야한다",
        },
        { role: "user", content: req.body.content },
      ],
      model: "gpt-3.5-turbo-1106",
      temperature: 0.8,
    });

    if (response.choices[0].message.content === null)
      return res
        .status(502)
        .json({ error: "문제가 발생하였습니다\n잠시 후 다시 시도해 주세요." });

    return res
      .status(200)
      .json({ result: response.choices[0].message.content });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
