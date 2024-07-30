# HubSpot-Theme
Demo tạo theme HubSpot sử dụng vuejs load data post data từ jsonplaceholder.typicode.com

## Tạo một theme mới
```
hs create website-theme theme-vue-posts
```

+ Đổi tên theme
    ```
        -- theme.json
        "label": "CMS theme use Vue.js",
    ```

+ Deploy theme lên HubSpot:
    ```
    hs upload my-theme theme-vue-posts
    ```

+ Test lại trên trang hubspot

## Tạo một mẫu (template) mới:
```
hs create template templates/vue-posts
```

+ Đặt lại tên cho template mới tạo

+ Upload/Watch & Test lại trên trang hubspot

## Tạo một module:
```
hs create module modules\posts
```