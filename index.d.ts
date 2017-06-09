interface GridProps {
  fluid?: boolean;
  style?: {};
}

interface RowProps {
  reverse?: boolean;
  center?: string;
  style?: {};
  end?: string;
}

interface ColProps {
  reverse?: boolean;
  xs?: boolean | number;
  sm?: boolean | number;
  style?: {};
}

declare module 'react-styled-flexboxgrid' {
  export class Grid extends React.Component<GridProps, any> {}
  export class Row extends React.Component<RowProps, any> {}
  export class Col extends React.Component<ColProps, any> {}
}
