import { MediaMatcher } from '@angular/cdk/layout';
import { NestedTreeControl } from '@angular/cdk/tree';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';


interface ITopicNode {
  name: string;
  children?: ITopicNode[];
  url? : string;
}

const TREE_DATA: ITopicNode[] = [
  {
    name: 'Angular Core',
    children: [
      {name: 'Components',url: '/angular-core/components'},
      {name: 'Templates',url: '/angular-core/templates'},
      {name: 'Directives',url: '/angular-core/directives'},
      {name: 'Dependency Injection',url: '/angular-core/dependency-injection'},
    ]
  }, 
  {
    name: 'Feature',
    children: [
      {name: 'Routing & Navigation',url: '/feature/routing-navigation'}, 
      {name: 'Forms',url:  '/feature/forms'},
      {name: 'HTTP Client',url: '/feature/http-client'},
      {name: 'Testing',url: '/feature/testing'},
      {name: 'Internationalization(i18n)',url: ''},
      {name: 'Animations',url: '/feature/animations'},
      {name: 'Service Workers & PWA',url: ''},
      {name: 'Web Workers',url: ''},
      {name: 'Server-side Rendering',url: ''},
      {name: 'Prerendering',url: ''},
    ]
  },
  {
    name : 'Best Practices',
    children: [
      {name: 'Security',url: ''},
      {name: 'Accessibility',url: ''},
      {name: 'Keeping Up-to-Date',url: ''},
      {name: 'Property Binding',url: '/best-practices/property-binding'},
      {name: 'Lazy Loading Feature Modules',url: '/best-practices/lazy-module'},
      {name: 'Lightweight Injection Tokens for Libraries',url: '/best-practices/injection-tokens'},
    ]
  },
  {
    name: 'Tools',
    children: [
      {name: 'Dev Workflow', url: ''},
      {name: 'CLI Builders', url: ''},
      {name: 'Language Service', url: ''},
      {name: 'DevTools', url: ''},
      {name: 'Schematics', url: ''},
    ]
  },
  {
    name: 'Reference',
    children: [
      {name: 'Conceptual', url: '/reference/conceptual'},
      {name: 'CLI Command', url: ''},
      {name: 'API', url: ''},
      {name: 'Error', url: ''},
      {name: 'Glossary', url: '/reference/glossary'},
      {name: 'Style Guide', url: ''},
    ]
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-mich';

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  // fillerContent = Array.from({length: 50}, () =>
  //     `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  //      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  //      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  //      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  //      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  // fillerContent = [
  //   '1',
  //   '2'
  // ];

  private _mobileQueryListener: () => void;



  treeControl = new NestedTreeControl<ITopicNode >(node => node.children);
  dataSource = new MatTreeNestedDataSource<ITopicNode >();




  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    console.log(window);
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ITopicNode ) => !!node.children && node.children.length > 0;

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
