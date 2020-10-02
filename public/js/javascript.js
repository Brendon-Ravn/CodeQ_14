$(".create-form").on("submit", event => {
  event.preventDefault();

  const newPost = {
    question: $("#quest")
      .val()
      .trim()
  };

  $.ajax("/javascript/api/posts", {
    type: "POST",
    data: newPost
  }).then(() => {
    console.log("created new post: " + newPost);
    location.reload();
  });
});
