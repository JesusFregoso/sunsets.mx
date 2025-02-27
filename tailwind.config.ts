import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
    theme: {
    extend: {
      colors: {
        primary: {
            DEFAULT: '#F26B1D',
            50: '#FCDDCB',
            100: '#FBD0B7',
            200: '#F9B791',
            300: '#F69E6A',
            400: '#F48444',
            500: '#F26B1D',
            600: '#CB520C',
            700: '#963C09',
            800: '#612706',
            900: '#2C1203',
            950: '#120701'
        },
        secondary: {
            DEFAULT: '#011126',
            50: '#0661D9',
            100: '#0558C5',
            200: '#04469D',
            300: '#033576',
            400: '#02234E',
            500: '#011126',
            600: '#000000',
            700: '#000000',
            800: '#000000',
            900: '#000000',
            950: '#000000'
        },
        tertiary: {
            DEFAULT: '#F2C46D',
            50: '#FFFFFF',
            100: '#FFFFFF',
            200: '#FCF1DD',
            300: '#F9E2B8',
            400: '#F5D392',
            500: '#F2C46D',
            600: '#EDAF39',
            700: '#DB9614',
            800: '#A8730F',
            900: '#74500A',
            950: '#5A3E08'
        },
        siren:{
                DEFAULT: '#820233',
                50: '#FC4088',
                100: '#FC2B7B',
                200: '#FB0462',
                300: '#D20353',
                400: '#AA0343',
                500: '#820233',
                600: '#4B011D',
                700: '#130008',
                800: '#000000',
                900: '#000000',
                950: '#000000'

        },
        accent: {  DEFAULT: '#031C26',  50: '#1099D0',  100: '#0F8BBD',  200: '#0C7097',  300: '#095472',  400: '#06384C',  500: '#031C26',  600: '#000000',  700: '#000000',  800: '#000000',  900: '#000000',  950: '#000000'},
      }
    }
  }
}