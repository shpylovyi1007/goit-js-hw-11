const form = document.querySelector('form');
const input = form.elements.search;

const searchParams = new URLSearchParams({
    key: '43654443-0aa2ac279d0400a8e119738dd',
    q: input.value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true'
});

const userGallery = () => {
    return fetch(`https://pixabay.com/api/images?${searchParams}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
};

export default userGallery;