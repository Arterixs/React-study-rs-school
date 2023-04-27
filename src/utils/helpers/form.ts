export const convertDate = (value: string | undefined) => (value ? JSON.stringify(new Date(value)) : '');
