export interface BirthdayDetail {
    id: number | undefined,
    name: string | undefined,
    birthdate: Date | undefined,
    isCongratulated: boolean
}

export const emptyBirthdayDetail: () => BirthdayDetail = () => ({
    id: undefined,
    name: undefined,
    birthdate: undefined,
    isCongratulated: false
});