//! 24-dars
// 	- React 18V
// 	- batching
// 	- startTransition
// 	- New Suspense
// 	- useId()
// 	- useTransition()
// 	- useDeferredValue()
// 	- useSyncExternalStore()
// 	- useInsertionEffect()

import { useTransition } from "react";

//!Batching => har bir state o'zgarishiga alohoda emas balki barcha state o'zgarishiga bitta componentni re-render qilib beradi

//!flushSync => har bir state uchun componentni alohida re-render qilib beradi

//!useTransiton , startTransition => katta malumotlardan search piqishda qollanuladiinputga yozilayotganda ...loading yozilib bolgan malumotni olib kelib beradi
const [isPending, startTransition] = useTransition();

startTransition(() => {
  //   getData();
});

// isPending ? ..loading : data.map((e) => (<h1>e</h1>))

//useDefferedValue => parentdan childga prop jonatiayotganda ishlatiladi

{
  /* <input type="text" value={value} onChange={onChange} />
<List value={value} /> */
}

export const List = ({ value }) => {
  const defValue = useDeferredValue(value);

  const list = useMemo(() => {
    let l = [];
    for (let i = 0; i < 2000; i++) {
      l.push(`${defValue}`);
    }
    return l;
  }, [defValue]);

  const isPending = value !== defValue;

  return isPending ? <h1>loading</h1> : list;
};
