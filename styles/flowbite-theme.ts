import type { CustomFlowbiteTheme } from 'flowbite-react'

const customTheme: CustomFlowbiteTheme = {
  sidebar: {
    root: {
      base: 'h-screen',
      inner:
        'h-full overflow-y-auto overflow-x-hidden rounded bg-white py-6 px-6 dark:bg-gray-800',
    },
    item: {
      base: 'flex items-center space-x-3 justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
      content: {
        base: 'flex-1 whitespace-nowrap',
      },
    },
  },
}

export default customTheme
