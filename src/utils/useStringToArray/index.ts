interface  Props {
    char: string;
    splitType?: string;
}

export default function useStringToArray({char, splitType = ''}:Props) {
    const charArray = char.split(splitType)
    return charArray
}