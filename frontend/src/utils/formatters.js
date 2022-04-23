export const priceFormater = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const dateFormater = (createdAt) => {
    const formatDate = new Date(createdAt).toLocaleDateString('en-GB', {
        year: "numeric",
        month: "numeric",
        day: "numeric"
    });
    return formatDate.replace(/[/]/g, '-');
}

