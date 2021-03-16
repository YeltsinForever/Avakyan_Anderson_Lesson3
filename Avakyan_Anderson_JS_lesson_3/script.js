var myFilter  = function(arr, callback, thisArg) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback.call(thisArg, arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  };

  var nums = [1,3,355,-34,23];

  var filtered = myFilter (nums, function(num) {
    return num = num>10;
  });
  console.log(filtered);






  const createDebounceFunction = (fn, ms) => {
    let timeout;
    return function () {
      const VizovPhonk = () => {
        fn.apply(this, arguments) 
      }
      clearTimeout(timeout);
      timeout = setTimeout(VizovPhonk , ms)
    };
  } 

const log100 = () => console.log(100);
const debounceLog100 = createDebounceFunction(log100, 3000);
debounceLog100();
setTimeout(debounceLog100, 2000); 
setTimeout(debounceLog100, 400);

