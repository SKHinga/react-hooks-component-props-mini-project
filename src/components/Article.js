import React from "react";

function emojin(timing){
  const separate = timing < 30 ? 5 : 10;
  const show = timing < 30 ? "☕️" : "🍱";

  let gif = ""

  for(let i = 0; i<timing; i += separate){
    gif += show;
  }
  return gif;
}


function Article ({title, date="January 1, 1970", preview, timing}){
  const gif = emojin(timing);
  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {gif} {timing} min read
      </small>
      <p>{preview}</p>
    </article>
  )
}

export default Article