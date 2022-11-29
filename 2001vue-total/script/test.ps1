# 切换到nginx所在文件夹
cd D:\develop\nginx-1.22.1
# 查看nginx的版本
.\nginx -v
# 测试配置文件是否没有语法错误
.\nginx -t -c .\conf\nginx.conf