go-layout-test
==============

Testing new auto-layout rules for future work

## Bookmaklet

### Non auto injecting bookmarklet

```
javascript:(function()%7Bfunction%20callback()%7Bgigaom_layout_test.init()%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22http%3A%2F%2Fraw.githubusercontent.com%2FGigaOM%2Fgo-layout-test%2Fmaster%2Flayout-test.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()
```

### Auto injecting bookmarklet

```
javascript:(function()%7Bfunction%20callback()%7Bgigaom_layout_test.init(true)%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22http%3A%2F%2Fraw.githubusercontent.com%2FGigaOM%2Fgo-layout-test%2Fmaster%2Flayout-test.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()
```
