---
Title: "File"
Keywords: "file, upload, Shivneri, crystal"
Description: "Upload file in crystal using Shivneri"
---

`file` is class member of Guard and Controller. It is used to access http request files.

Let's see few examples 

## How to access a file - 

```
class FileController < Controller


  @[Worker("POST")]
  @[Route("/upload")]
  def upload_file
    path_to_save = File.join(Dir.current, "upload/upload.png")
    field = "fort"
    if (file.is_exist(field))
        file.save_to(field, path_to_save)
        return json_result({
            message: "file saved"
        })
    else
        result = {
            message: "file not saved",
        }
    	return json_result(result)
    end
    
  end
end
```

## How to get file detail 

```
class FileController < Controller


  @[Worker("POST")]
  @[Route("/upload")]
  def upload_file
    path_to_save = File.join(Dir.current, "upload/upload.png")
    field = "fort"
    if (file.is_exist(field))
         file_detail = file[field]

         # property name - used to upload this file
         field_name = file_detail.field_name

         # the filename that the user reports for the file
         original_file_name =  file_detail.original_file_name

         # the HTTP headers that were sent along with this file
        headers = file_detail.headers

        # size of the file in bytes
        file_size = file_detail.size

    else
        result = {
            message: "file was not uploaded",
        }
    	return json_result(result)
    end
    
  end
end
```
