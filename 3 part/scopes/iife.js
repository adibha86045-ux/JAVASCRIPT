(
    () => {
        // unnamed iife
        console.log(`DB CONNECTED`);
    }
)();

// orr
(
    function name(){
        //named iife
        console.log(`DB CONNECTED 2`);
    }
)(); 

(
    (name) => {
        console.log(`DB CONNECTED ${name}`);
    }
)("Aditya"); 