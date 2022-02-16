const hello=require("./hello");

test("kijavitja a hello.js-t",()=>{
    expect(hello()).toBe("Hello");
}); 