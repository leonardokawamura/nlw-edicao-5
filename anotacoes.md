### PRIMEIRO DIA

[Documentação](https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html)

```
// custom.d.ts

declare module '*.png' {
  const content: any;
  export default content;
}
```