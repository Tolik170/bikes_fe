import palette from './app.pallete'
import { textfieldScrollbar } from '~/styles/app-theme/custom-scrollbar'

export const textField = {
  styleOverrides: {
    root: {
      ...textfieldScrollbar,
      '& label': {
        lineHeight: 'inherit',
        top: '-4px',
        '&.Mui-focused': {
          color: palette.primary[900]
        },
        '&.Mui-error': {
          color: palette.error[500]
        },
        color: palette.primary[500]
      },
      '& .MuiAutocomplete-inputRoot.MuiOutlinedInput-root ': {
        padding: '5px'
      },
      '& .MuiInputBase-input': {
        padding: '12.5px 14px',
        '&.MuiInputBase-inputMultiline': {
          padding: 0
        }
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: palette.primary[700],
        },
        '&.Mui-focused ': {
          '&.Mui-error fieldset': {
            borderColor: palette.error[700]
          },
          '& fieldset': {
            borderColor: palette.primary[900]
          }
        }
      },
      '& .MuiInput-root:before ': {
        borderColor: palette.primary[500]
      }
    }
  }
}
