document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts-container');

    // Use Fetch To Get Data From API
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            // عرض كل منشور في الصفحة
            posts.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.classList.add('post');

                const titleElement = document.createElement('h2');
                titleElement.textContent = post.title;

                const bodyElement = document.createElement('p');
                bodyElement.textContent = post.body;

                postDiv.appendChild(titleElement);
                postDiv.appendChild(bodyElement);

                postsContainer.appendChild(postDiv);
            });
        })

});