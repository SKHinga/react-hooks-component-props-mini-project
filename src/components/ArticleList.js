import React from "react";
import Article from "./Article";

function ArticleList({posts}){
  const item = posts.map(items=>
    <Article
      key={items.id}
      title={items.title}
      date={items.date}
      preview={items.preview}
      timing={items.minutes}
    />);
    
  return (
    <main>
      { item }
    </main>
  )
}

export default ArticleList