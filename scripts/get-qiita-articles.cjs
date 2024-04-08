/* eslint-env es2020 */
const handleResponse = (rawRes) => {
  const articles = filterResponse(JSON.parse(rawRes));
  console.log(JSON.stringify({ articles }));
};

const filterResponse = (res) => {
  return res.map((item) => ({
    title: item.title,
    url: item.url,
    // ZennのJSON形式に名前を合わせる
    body_updated_at: item.updated_at,
  }));
};

const token = process.env.TOKEN;
const https = require("node:https");
https
  .request(
    {
      hostname: "qiita.com",
      method: "GET",
      path: "/api/v2/authenticated_user/items",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    (res) => {
      res.setEncoding("utf8");
      let response = "";
      res.on("data", (chunk) => {
        response += chunk;
      });
      res.on("end", () => {
        handleResponse(response);
      });
    },
  )
  .end();
