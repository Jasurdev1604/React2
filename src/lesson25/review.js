//! 25-dars
// 	- Portals
// 	- Profilers
// 	-Lazy load

//!Prtals => kopincha modal yasash uchun karar boladi , .rootni yonidan creatPortal qilib yasaladi

// <div id='root'></div>
// <div id='portal'></div>

const Portal = () => {
  return ReactDom.createPortal(
    <div>Jasurbek Otelnayev</div>,
    document.getElementById("portal")
  );
};

<Portal />;

//! Lazy Load with Suspense => birichi pagega kirganda saytni barcha malumotlarinni olib ketmasdan faqat shu pagega tgishli malumotlarni olib keladi

// const Home = React.lazy(() => import('./Home'))

// <Route path={'/home'} element={<React.Suspense fallback={<h1>loading...</h1>}>
//     <Home/>
// </React.Suspense>}/>

//!Profiler => react dev toolni alternativi

const onRender = (
  id,
  phase,
  actualDuration,
  baseDuration,
  commitTime,
  startTime,
  interactions
) => {
  console.table({
    id,
    phase,
    actualDuration,
    baseDuration,
    commitTime,
    startTime,
    interactions,
  });
};

<Profiler id="modal" onRender={onRender}>
  <></>
</Profiler>;

// (index)
// Value
// id	'modal'
// phase	'mount'
// actualDuration	22.699999999254942
// baseDuration	17.299999999813735
// commitTime	637.5
// startTime	662.8000000007451
// interactions	undefined
