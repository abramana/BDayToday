export const removeOffset: (date: Date | undefined | null) => string | null  = (date) => {
    return date
        ? new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString()
        : null;
}