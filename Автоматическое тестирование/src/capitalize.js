const capitalize = (text) => {
    if (text === ''){
        return '';
    }
    const firstLetter = text[0].toUpperCase();
    const lastLetters = text.slice(1);
    return (`${firstLetter}${lastLetters}`);
}

export default capitalize;