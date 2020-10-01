$(document).ready(() => {
  const questionInput = $("#js");
  const jsForm = $("#jsQuestions");
  const jsPosts = $(".jsPosts");

  let posts;

  $(jsForm).on("submit", handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();

    if (questionInput.val().trim()) {
      const newPost = {
        question: questionInput.val().trim(),
        category: "js"
      };
      submitPost(newPost);
    }
  }

  function submitPost(post) {
    console.log(post);
    $.post("/api/posts", post, () => {
      window.location.href = `/jsQuestions/${post.category}`;
    });
  }
  function getPosts() {
    const category = "";
    $.get("/api/posts/" + category, data => {
      console.log("Posts", data);
      posts = data;
      initializeRows();
    });
  }
  function initializeRows() {
    const postsToAdd = [];
    for (let i = 0; i < posts.length; i++) {
      postsToAdd.push(createNewRow(posts[i]));
    }
    jsPosts.append(postsToAdd);
  }
  function createNewRow(post) {
    let formattedDate = new Date(post.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    const newPostCard = $("<div>");
    newPostCard.addClass("card");
    const newPostCardHeading = $("<div>");
    newPostCardHeading.addClass("card-header");
    const newPostDate = $("<small>");
    const newPostCardBody = $("<div>");
    newPostCardBody.addClass("card-body");
    const newPostBody = $("<p>");
    newPostBody.text(post.question);
    newPostDate.text(formattedDate);
    newPostTitle.append(newPostDate);
    newPostCardBody.append(newPostBody);
    newPostCard.append(newPostCardBody);
    newPostCard.data("post", post);
    return newPostCard;
  }
  getPosts();
});
