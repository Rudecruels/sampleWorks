const locator =
  "/deo/{{db5}}/div/span/{{db1}}/div1{{db2}}-oiio/ghjghjj/{{db5}}";
const finalArray = [];
const firstElement = [];

for (let i = 0; i <= locator.length; i++) {
  if (i === locator.length) {
    if (firstElement.length > 0) {
      const joinedElement = firstElement.join("");
      finalArray.push(joinedElement);
    }
  }

  if (locator[i] === "{") {
    if (firstElement.length > 0) {
      if (firstElement[0] === "{") {
        firstElement.push(locator[i]);
        continue;
      } else {
        const joinedElement = firstElement.join("");
        finalArray.push(joinedElement);
        firstElement.length = 0;
      }
    } else {
      firstElement.push(locator[i]);
      firstElement.push(locator[i - 1]);
    }
  } else if (locator[i] === "}") {
    firstElement.push(locator[i]);
    if (locator[i + 1] === "}") {
      firstElement.push(locator[i + 1]);
      const joinedElement = firstElement.join("");
      finalArray.push(joinedElement);
      firstElement.length = 0;
      i = i + 1;
    }
  } else {
    firstElement.push(locator[i]);
  }
}
console.log(finalArray, "finalArray");
