# 使用官方 Nginx 作為基礎鏡像
FROM nginx:alpine

# 複製自定義的 Nginx 配置文件
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 複製打包後的應用文件到 Nginx 默認的靜態文件目錄
COPY dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 啟動 Nginx
CMD ["nginx", "-g", "daemon off;"]
