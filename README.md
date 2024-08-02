# HubSpot-Theme Demo
Theme HubSpot sử dụng Vuejs load data & post data từ jsonplaceholder.typicode.com

+ Các phần chính của demo:
    ```
    + Theme name: CMS theme use Vue.js
    + Template name: Vue Post Page template
    + Session name: My Section
    + Module Post list: Posts List
    + Module Post add: Post add
    ```

+ Structure Themes Folder
    ```
    HubSpot-Theme/
    │
    ├── theme.json
    ├── templates/
    │   ├── home.html
    │   ├── about.html
    │   ├── ...
    │   └── vue-posts.html
    │
    ├── modules/
    │   ├── posts.module/
    │   │   ├── fields.json
    │   │   ├── meta.json
    │   │   ├── module.html
    │   │   └── module.css
    │   │   └── module.js
    │   │
    │   └── posts-add.module/
    │       ├── fields.json
    │       ├── meta.json
    │       ├── module.html
    │       └── module.css
    │       └── module.js
    │
    ├── sections/
    │   ├── ...
    │   └── my-section.html
    │
    ├── css/
    │   └── main.css
    │
    ├── js/
    │   └── main.js
    │
    ├── images/
    │   └── ...
    │
    └── fields.json
    ```

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

## Tạo một section:
```
Tương tự như tạo template:
    templateType: section
    label: My Section
```