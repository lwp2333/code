const width = 1200
let type = ''
if (width < 576) {
  type = 'xs'
} else if (width < 768) {
  type = 'sm'
} else if (width < 992) {
  type = 'md'
} else if (width < 1200) {
  type = 'lg'
} else if (width < 1600) {
  type = 'xl'
} else {
  type = 'xxl'
}

mapList = { xs: '100%', sm: '88%', md: '76%', lg: '64%', xl: '52%', xxl: '40%' }
