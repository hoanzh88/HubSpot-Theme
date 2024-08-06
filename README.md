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

## Hướng dẫn tải theme lên HubSpot
+ Upload bằng file zip
    ```
    Bước 1: Đăng nhập vào HubSpot.
    Bước 2: Sau khi đăng nhập, vào phần Settings (Cài đặt) từ thanh điều hướng chính.
    Bước 3: Đi tới mục "Tools" > "Content" > "Themes"
    Bước 4: Tại màn hình Themes, chọn "Upload Theme"
    Bước 5: Chọn file ZIP của theme và tải lên.
    ```

+ Upload file trên trang “Design Manager”
    ```
    Bước 1: Đăng nhập vào HubSpot.
    Bước 2: Đi tới mục "Content" > "Design Manager"
    Bước 3: Nhấp vào "File" > "Upload file".
    Bước 4: Chọn file của theme và tải lên.
    ```

+ Upload dùng HubSpot CLI
    ```
    hs upload <local-destination> <remote-destination>
    ```