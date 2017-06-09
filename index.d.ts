declare module 'react-styled-flexboxgrid' {
  type Sizes = 'xs' | 'sm' | 'md' | 'lg';

  interface RowProps {
    around?: Sizes;
    between?: Sizes;
    bottom?: Sizes;
    center?: Sizes;
    end?: Sizes;
    first?: Sizes;
    last?: Sizes;
    middle?: Sizes;
    reverse?: boolean;
    start?: Sizes;
    style?: {};
    top?: Sizes;
  }

  interface GridProps {
    fluid?: boolean;
    style?: {};
  }

  interface ColProps {
    lg?: boolean | number;
    lgOffset?: number;
    md?: boolean | number;
    mdOffset?: number;
    reverse?: boolean;
    sm?: boolean | number;
    smOffset?: number;
    xs?: boolean | number;
    xsOffset?: number;
  }
                
  export class Grid extends React.Component<GridProps, any> {}
  export class Row extends React.Component<RowProps, any> {}
  export class Col extends React.Component<ColProps, any> {}
}
