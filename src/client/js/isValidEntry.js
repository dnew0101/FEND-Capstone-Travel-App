const dateChecker = async (date) => {
    if(/^\d{4}-\d{2}-\d{2}$/.test(date.value)) {
        return true;
    } else {
        return false;
    }
}

export { dateChecker };