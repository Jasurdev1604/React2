//! 11-dars
// 	- useEffect => class componeentdagi react lyfecyclelarning alternativi

import { useEffect, useState } from "react";

const [state, setState] = useState(0);

useEffect(() => {
  // har qanday state ozgargan payda
  console.log("case 1");
});

useEffect(() => {
  // faqart bir martaisglaydi kopincha backenddan malumot olib kelish uchun ishlatiladi
  console.log("case 2");
}, []);

useEffect(() => {
  // faqat [state] ozgarganda ishlaydi
  console.log("case 3");
}, [state]);
