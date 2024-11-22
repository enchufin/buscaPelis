# Code Citations

## License: unknown
https://github.com/SebasJS/proyectos-midu/tree/c447199e1de203756a6f29375a49834edd458e3c/proyectos-React-Midu/projects/05-react-buscador-peliculas/src/hooks/useSearch.js

```
= useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === ''
      return
    }
    if (query ==
```


## License: unknown
https://github.com/OcroDev/movie-search_react_technical_test/tree/b744c66c8d699f419683c128a0b279203b3376f0/src/hooks/useSearch.js

```
[query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === ''
      return
    }
```

