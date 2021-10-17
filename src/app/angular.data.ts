export const Angular = [
    { 
      'angular core': [
        { 
          'components': [
            {
              'overview': {
                'desc': '\
                    <p>Components are the main building block for Angular applications. Each component consists of:</p> \
                    <ul> \
                        <li>An HTML template that declares what renders on the page</li> \
                        <li>A Typescript class that defines behavior</li> \
                        <li>A CSS selector that defines how the component is used in a template</li> \
                        <li>Optionally, CSS styles applied to the template</li> \
                    </ul> \
                '
              },
              'creating a component': {
                'desc': 'The easiest way to create a component is with the Angular CLI. You can also create a component manually.',
                'child-content': [
                  {
                    'title': 'Creating a component using the Angular CLI',
                    'content': '\
                      <p>To create a component using the Angular CLI:</p> \
                      <ol> \
                        <li>From a terminal window, navigate to the directory containing your application.</li> \
                        <li>Run the <code>ng generate component <component-name> command</code>, where <component-name> is the name of your new component.</li> \
                      </ol> \
                    '
                  },
                  {
                    'title': 'Creating a component manually'
                  }
                ]
              }
            }
          ]
        }
      ] 
    }
  ];