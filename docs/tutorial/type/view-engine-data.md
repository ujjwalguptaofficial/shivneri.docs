---
Title: "View Engine Data"
Keywords: "view engine, data, types, Shivneri, crystal lang"
Description: "Type viewEngineData member description"
---

The type ViewEngineData is used by ViewEngine to get view related data from workers.

```
type ViewEngineData = {

    /**
     * name of the view or path of view
     *
     * @type {string}
     */
    view: string;

    /**
     * view model
     *
     * @type {*}
     */
    model: any;
};
```