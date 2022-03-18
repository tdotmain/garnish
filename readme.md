
A component library that compliments tailwind-UI

```
import { Button, PlusIcon } from '@garnish/ui';

... 
<Button>
  Click Me! <PlusIcon/>
</Button>
```

Under the hood, it applies tailwind classes.
```
.garnish-button {
  @apple("px-4 py-2 bg-emerald-500 text-white")
}
```


