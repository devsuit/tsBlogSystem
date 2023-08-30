"use strict";
//Name: Syed Qalab Abbas Shah
// Roll No:	PIAIC160920
// Course:	Certified Web 3.0 and Metaverse Developer
// Email:	sqabbas1994@gmail.com
function sortPostsByComments(posts) {
    return posts.slice().sort((postA, postB) => {
        return postB.comment.length - postA.comment.length;
    });
}
const author1 = {
    id: 1,
    name: "Abbas",
    bio: "A passionate writer."
};
const author2 = {
    id: 2,
    name: "Ahil",
    bio: "A articulated writer."
};
const posts = [
    {
        id: 1,
        title: "Typescript",
        content: "Web 3 ",
        author: author1,
        comment: [{ author: author1, content: "Web3 copywriting is all about context, speed, and automation.", timestamp: new Date() },
        ]
    },
    {
        id: 2,
        title: "AI",
        content: "Artificial Intelligence",
        author: author2,
        comment: [{ author: author2, content: "AI copywriting is all about context, speed, and automation.", timestamp: new Date() },
            { author: author2, content: "Software that generate text based on user input powered by artificial intelligence. !", timestamp: new Date() }
        ]
    },
];
// const sortedPosts = sortPostsByComments(posts);
// console.log("Sorted Posts:", sortedPosts);
const sortedPosts = sortPostsByComments(posts);
console.log("Sorted Posts:");
sortedPosts.forEach(post => {
    console.log("Post Title:", post.title);
    console.log("Author:", post.author.name);
    console.log("Content:", post.content);
    console.log("Comments:");
    post.comment.forEach(comment => {
        console.log("Author:", comment.author.name);
        console.log("Content:", comment.content);
        console.log("Timestamp:", comment.timestamp);
    });
    console.log("-------------------------");
});
