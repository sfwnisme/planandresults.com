export default function cursor() {
  /* =====[CURSOR ELEMENTS]===== */
  // cursor box
  let cursorBox = document.createElement("div");
  cursorBox.className = "cursor-box";
  // cursor elements
  let cursorOne = document.createElement("div");
  cursorOne.className = "cursor-one";
  let cursorTwo = document.createElement("div");
  cursorTwo.className = "cursor-two";

  //append childs
  cursorBox.appendChild(cursorOne);
  cursorBox.appendChild(cursorTwo);
  // append
  document.body.append(cursorBox);
  /* =============================== */

  /* =====[CURSOR EVENTS]===== */
  function cursorBOM(first, second) {
    document.addEventListener("mousemove", (event) => {
      let x = event.clientX;
      let y = event.clientY;

      first.style.left = second.style.left = `${x}px`;
      first.style.top = second.style.top = `${y}px`;
    });
  }
  cursorBOM(cursorOne, cursorTwo);
  /* =============================== */

  /* =====[CURSOR AUTO FUNCTION]===== */
  //
  let allbtns = document.querySelectorAll("button");
  let allLinks = document.querySelectorAll("a");
  let allSvgs = document.querySelectorAll("svg");
  let allInputs = document.querySelectorAll("input");

  //
  let allP = document.querySelectorAll("p");
  let allH1 = document.querySelectorAll("h1");
  let allH2 = document.querySelectorAll("h2");
  let allH3 = document.querySelectorAll("h3");
  let allH4 = document.querySelectorAll("h4");
  let allH5 = document.querySelectorAll("h5");
  let allH6 = document.querySelectorAll("h6");
  let textarea = document.querySelectorAll("textarea");

  // clickable text
  addAndRemove(allbtns, cursorOne, cursorTwo);
  addAndRemove(allLinks, cursorOne, cursorTwo);
  addAndRemove(allSvgs, cursorOne, cursorTwo);
  addAndRemove(allInputs, cursorOne, cursorTwo);
  // text cursor
  addAndRemoveText(allP, cursorOne, cursorTwo);
  addAndRemoveText(allH1, cursorOne, cursorTwo);
  addAndRemoveText(allH2, cursorOne, cursorTwo);
  addAndRemoveText(allH3, cursorOne, cursorTwo);
  addAndRemoveText(allH4, cursorOne, cursorTwo);
  addAndRemoveText(allH5, cursorOne, cursorTwo);
  addAndRemoveText(allH6, cursorOne, cursorTwo);
  addAndRemoveText(textarea, cursorOne, cursorTwo);

  // all clickable elements function
  function addAndRemove(element, one, two) {
    element.forEach((ele) => {
      ele.addEventListener("mouseover", (e) => {
        one.classList.add("active");
        two.classList.add("disable");
      });
    });
    element.forEach((ele) => {
      ele.addEventListener("mouseout", (e) => {
        one.classList.remove("active");
        two.classList.remove("disable");
      });
    });
    element.forEach((ele) => {
      // you can also use 'mouseout'
      ele.addEventListener("click", (e) => {
        one.classList.add("clicked");
        setTimeout(() => {
          one.classList.remove("clicked");
        }, 50);
      });
    });
  }
  /* =============================== */

  // all text elements function
  function addAndRemoveText(element, one, two) {
    element.forEach((ele) => {
      ele.addEventListener("mouseover", (e) => {
        if (e.currentTarget.parentElement.nodeName !== 'A') {
          // two.classList.add("disable");
          one.classList.add("active-text");
        } else {
          one.classList.remove("active-text");
        }
      });

    });
    element.forEach((ele) => {
      ele.addEventListener("mouseout", (e) => {
        one.classList.remove("active-text");
      });
    });
    element.forEach((ele) => {
      // you can also use 'mouseout'
      ele.addEventListener("click", (e) => {
        one.classList.add("clicked-text");
        setTimeout(() => {
          one.classList.remove("clicked-text");
        }, 50);
        // e.target.stopPropagation()
      });
    });
  }
}

/**  [SFWN] Cursor
 * [x] change regular cursor
 * [x] smooth moving
 * [x] active and click effects for clickable elements
 * * [x] <a>
 * * [x] <button>
 * * [x] <input>
 * * [x] <input>
 * [x] active and click effects for text elements
 * * [x] <p>
 * * [x] <h1>
 * * [x] <h2>
 * * [x] <h3>
 * * [x] <h4>
 * * [x] <h5>
 * * [x] <h6>
 * * * * * * * *
 * * *GITHUB* * *
 * *@sfwnisme* *
 * * * * * * * *
 ***PROPLEMS
 * sefari browser on Mac devices lagging the cursor
 * must change the css properties to the css file not html internal
 */
