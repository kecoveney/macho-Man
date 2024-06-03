export const display = (macho) => {
    const machoDisplay = document.createElement('div');
    machoDisplay.classList.add('macho');

    const name = document.createElement('h2');
    name.textContent = macho.name;
    name.classList.add('mood-name'); // Add a class for styling

    const img = document.createElement('img');
    img.src = macho.imageUrl;
    img.alt = macho.name;
    img.classList.add('mood-image'); // Add a class for styling

    const quoteBox = document.createElement('div');
    quoteBox.classList.add('quote-box');

    const machoAdvice = document.createElement('p');
    machoAdvice.innerHTML = `<strong>Macho Advice:</strong>`;

    const quotes = document.createElement('p');
    quotes.textContent = macho.quotes;

    quoteBox.appendChild(machoAdvice);
    quoteBox.appendChild(quotes);
    machoDisplay.appendChild(name);
    machoDisplay.appendChild(img);
    machoDisplay.appendChild(quoteBox);

    return machoDisplay;
};