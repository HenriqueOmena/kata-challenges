## :dart: CamelCase Method
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.




### Example:
"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord

##  :page_with_curl: Tests


```
Test.describe("Basic tests",_=>{
Test.assertEquals("test case".camelCase(), "TestCase");
Test.assertEquals("camel case method".camelCase(), "CamelCaseMethod");
Test.assertEquals("say hello ".camelCase(), "SayHello");
Test.assertEquals(" camel case word".camelCase(), "CamelCaseWord");
Test.assertEquals("".camelCase(), "");
})
```
