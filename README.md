## Get location info by Nginx access logs

> If you put the Nginx(httpd, Apache) access logs in the `input` folder and run `main.js`, the geographic information is organized into JSON with the IP address of the log.

> `input` 폴더를 생성하여 Nginx(httpd, Apache) access log 파일들을 집어넣고 `main.js`를 샐행하면 access log의 IP 주소로부터 알아낸 지리정보를 JSON으로 정리합니다

```(bash)
$ npm install
$ node main.js
```
