export const formatMoney = (number) => {
    return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(number);
}

export const displayDate = () => {
    const date = new Date();
    const options = { weekday: "long", month: "long", day: "numeric", year: "numeric"};

    return date.toLocaleDateString('en-EN', options).toLowerCase();
}