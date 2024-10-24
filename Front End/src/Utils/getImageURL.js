
const getImageURL = (name) => {
    return new URL(`../../public/images/assets/books/${name}`, import.meta.url).href
}

export default getImageURL