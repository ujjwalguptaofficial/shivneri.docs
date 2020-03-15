---
Title: "Types of Result"
Keywords: "types of results, json, text, html, file"
Description: "How to return different types of http result in Shivneri"
---

Shivneri provides methods which are available in all components to return different types of results -

## json

json result is returned by `json_result`

```
data = {
    name: "Ujjwal Gupta"
}
json_result(data)
```

## text

text result is returned by `text_result`

```
text_result("Hello!")
```

## html

html result is returned by `html_result`

```
html_result("<h1>Hello!</h1>")
```

## file

You can return a file by using `file_result`

```
file_path = File.join(Dir.current, "static/scripts/", "jquery.js")
file_result(file_path)
```

## download 

How about you want to return a file which will be downloaded by browser. For this you need to use `download_result`

download result is similar to file_result but it instruct browser to download this file.

```
file_path = File.join(Dir.current, "static/scripts/", "jquery.js")
download_result(file_path)
```





