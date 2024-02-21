export const navigationBarProps = {
  menu: [
    {
      id: '1',
      title: 'Overview',
      href: '#overview',
      children: [
        {
          title: 'Overview Child',
          id: '1a',
          href: '#overview-child'
        }
      ]
    },
    {
      id: '2',
      label: '12',
      title: 'Guest',
      href: '#iframe.html'
    },
    {
      id: '3',
      title: 'Tab 3',
      href: '#guest'
    },
    {
      id: '4',
      title: 'Tab 4',
      href: '#guest',
      children: [
        {
          title: 'Guest Child',
          id: '4a',
          label: 'Really long label for robust testing',
          href: '#guest-child'
        },
        {
          title: 'Guest Child 2',
          id: '4b',
          href: '#guest-child2'
        }
      ]
    },
    {
      id: '5',
      title: 'Tab 5',
      href: '#guest'
    },
    {
      id: '6',
      title: 'Tab 6',
      href: '#guest'
    },
    {
      id: '7',
      title: 'Tab 7',
      href: '#guest'
    },
    {
      id: '8',
      title: 'Tab 8',
      href: '#guest'
    },
    {
      id: '9',
      label: 'Really long label for robust testing',
      title: 'Tab 9',
      href: '#guest'
    },
    {
      id: '10',
      title: 'Tab 10',
      href: '#guest'
    }
  ]
};
