export const tokens = {
  colors: {
    brand: {
      primary_positive: '#2B295F',
      primary_negative: '#48448F',
      secondary: '#F4D224',
      tertiary: '#6366F1',
    },
    light: {
      content: {
        default: '#1A1A1A',
        subtle: '#3D3D3D',
        dim: '#707070',
        placeholder: '#A3A3A3',
        disabled: '#BFBFBF',
        inverse: '#FFFFFF',
      },
      informative: {
        default: '#136FDB',
        bold: '#0B54A8',
        'default-inverse': '#B3EBFF',
      },
      background: {
        default: '#FFFFFF',
        alt: '#F5F5F5',
        translucent: '#FFFFFF33',
        'default-inverse': '#1A1A1A',
        'alt-inverse': '#3D3D3D',
        'translucent-inverse': '#1A1A1A99',
        disabled: '#F5F5F5',
      },
      outline: {
        softest: '#E8E8E8',
        soft: '#D8D8D8',
        default: '#BFBFBF',
        bold: '#A3A3A3',
        boldest: '#8C8C8C',
        disabled: '#E8E8E8',
      },
      success: {
        default: '#00B64F',
      },
      alert: {
        default: '#D42E1C',
        notice: '#F09800',
      },
    },
    dark: {
      content: {
        default: '#FFFFFF',
        subtle: '#BFBFBF',
        dim: '#A3A3A3',
        placeholder: '#707070',
        disabled: '#575757',
      },
      informative: {
        default: '#B3EBFF',
        bold: '#1495E6',
        'default-inverse': '#136FDB',
      },
      background: {
        default: '#1A1A1A',
        alt: '#3D3D3D',
        translucent: '#1A1A1ACC',
        'default-inverse': '#FFFFFF',
        'alt-inverse': '#F5F5F5',
        'translucent-inverse': '#1A1A1A99',
        disabled: '#3D3D3D',
      },
      outline: {
        softest: '#3D3D3D',
        soft: '#292929',
        default: '#707070',
        bold: '#8C8C8C',
        boldest: '#A3A3A3',
        disabled: '#3D3D3D',
      },
      success: {
        default: '#00B64F',
      },
      alert: {
        default: '#F55538',
        notice: '#FAAB00',
      },
    }
  },
  typography: {
    heading: {
      h1: {
        fontSize: '2.5rem',    // 40px
        lineHeight: '3rem',    // 48px
        fontWeight: '700'
      },
      h2: {
        fontSize: '2rem',      // 32px
        lineHeight: '2.5rem',  // 40px
        fontWeight: '600'
      },
      h3: {
        fontSize: '1.5rem',    // 24px
        lineHeight: '2rem',    // 32px
        fontWeight: '600'
      }
    },
    body: {
      large: {
        fontSize: '1.125rem',  // 18px
        lineHeight: '1.75rem', // 28px
        fontWeight: '400'
      },
      base: {
        fontSize: '1rem',      // 16px
        lineHeight: '1.5rem',  // 24px
        fontWeight: '400'
      },
      small: {
        fontSize: '0.875rem',  // 14px
        lineHeight: '1.25rem', // 20px
        fontWeight: '400'
      }
    },
    callout: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      fontWeight: '500'
    },
    metadata: {
      fontSize: '0.75rem',
      lineHeight: '1rem',
      fontWeight: '400'
    }
  },
  spacing: {
    0: '0',
    px: '1px',
    0.5: '0.125rem',  // 2px
    1: '0.25rem',     // 4px
    2: '0.5rem',      // 8px
    3: '0.75rem',     // 12px
    4: '1rem',        // 16px
    6: '1.5rem',      // 24px
    8: '2rem',        // 32px
    12: '3rem',       // 48px
    16: '4rem'        // 64px
  },
  elevation: {
    1: {
      x: '0px',
      y: '1px',
      blur: '2px',
      opacity: '0.05'
    },
    2: {
      x: '0px',
      y: '2px',
      blur: '4px',
      opacity: '0.1'
    },
    3: {
      x: '0px',
      y: '4px',
      blur: '8px',
      opacity: '0.15'
    }
  },
  borderRadius: {
    none: '0',
    sm: '0.25rem',    // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    full: '9999px'
  }
};