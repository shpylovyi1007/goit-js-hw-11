const form = document.querySelector('form');
const userSearch = form.elements.search.value.trim();

const searchParams = new URLSearchParams({
    key: '43654443-0aa2ac279d0400a8e119738dd',
    q: userSearch,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true'
});
const url = `https://pixabay.com/api/images?${searchParams}`;

const userGallery = userSearch => {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
};

export default userGallery;