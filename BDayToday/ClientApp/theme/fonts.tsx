import {configureFonts} from "react-native-paper";

const baseFont = {
    fontFamily: 'LibreBodoni-Regular',
};

const baseVariants = configureFonts({config: baseFont});

const customVariants = {
    displayLarge: {
        ...baseVariants.displayMedium,
        fontFamily: 'LibreBodoni-Bold',
        fontSize: 40,
        textAlign: 'center',
    },
    displayMedium: {
        ...baseVariants.displayMedium,
        fontFamily: 'LibreBodoni-Bold',
        fontSize: 30,
    },
    bold: {
        ...baseVariants.bodyMedium,
        fontFamily: 'LibreBodoni-Bold',
    },
    italic: {
        ...baseVariants.bodyMedium,
        fontFamily: 'LibreBodoni-Italic',
    },
    boldItalic: {
        ...baseVariants.bodyMedium,
        fontFamily: 'LibreBodoni-BoldItalic',
    },
};

export const fonts = configureFonts({
    config: {
        ...baseVariants,
        ...customVariants,
    },
});