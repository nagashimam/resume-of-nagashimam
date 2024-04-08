/* eslint-env es2020 */
const fs = require("node:fs");

const getArticles = (serviceName) => {
  const json = fs.readFileSync(`src/assets/articles/${serviceName}.json`);
  return JSON.parse(json).articles;
};

const zennArticles = getArticles("zenn");
const qiitaArticles = getArticles("qiita");

const articles = [
  ...qiitaArticles,
  ...zennArticles.map((article) => ({
    ...article,
    url: `https://zenn.dev${article.path}`,
  })),
].sort((dateA, dateB) => (new Date(dateA) < new Date(dateB) ? 1 : -1)); //同じ日付の記事の順番が保証されないが、気にしないことにする
console.log(JSON.stringify({ articles }));
