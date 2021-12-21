// TODO: Re-look into using `const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;` instead
declare module '*.svg' {
  const content: string

  export default content
}
