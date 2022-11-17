# Crawl_Data_Project1
**Crawl Data:** [NetTruyenIn.com](https://www.nettruyenin.com/) by **Python** and **BeautifulSoup**

# Ideas

 Sử dụng ngôn ngữ lập trình python và BeautifulSoup để Crawl Data từ website truyện tranh: [NetTruyenIn.com](https://www.nettruyenin.com/)
 
 # Kiến thức cần có:
 
 ## 1. Ngôn ngữ lập trình Python 
 
 Các bạn cần có kiến thức cơ bản ngôn ngữ lập trình Python, có thể tham khảo qua một số khóa học:
 - [Python Tutorial | W3Schools](https://www.w3schools.com/python/default.asp)
 - [Python Courses & Tutorials| Codecademy](https://www.codecademy.com/catalog/language/python?g_network=g&g_productchannel=&g_adid=518718870867&g_locinterest=&g_keyword=learn%20python&g_acctid=243-039-7011&g_adtype=&g_keywordid=aud-726551140688:kwd-1025138201&g_ifcreative=&g_campaign=account&g_locphysical=1028580&g_adgroupid=102650143353&g_productid=&g_source={sourceid}&g_merchantid=&g_placement=&g_partition=&g_campaignid=10074200771&g_ifproduct=&utm_campaign=postclick&utm_content=learn-python-3&g_adtype=search&g_acctid=243-039-7011&utm_id=t_aud-726551140688:kwd-1025138201:ag_102650143353:cp_10074200771:n_g:d_c&utm_source=google&utm_medium=paid-search&utm_term=learn%20python&gclid=Cj0KCQiA1NebBhDDARIsAANiDD3FMSEaCukteK8i2RlTEWd_CUlieNH0ZGPvIHG1jR2AuEGRgKrVt8gaAhdaEALw_wcB)
- [Learn Python| LearnPython.org](https://www.learnpython.org/)
  
## 2. Cấu trúc DOM của HTML 
Để crawl được dữ liệu của trang web thì thứ cần nói đến là cấu trúc DOM của HTML: **DOM (Document Object Model)**. Một tài liệu HTML là tập hợp các thẻ, được phân cấp cha - con với nhau. 

Phương pháp chính khi áp dụng BeautifulSoup là xác định được chính xác địa chỉ cụ thể của dữ liệu cần lấy. Và việc sử dụng tên các thẻ, tên thuộc tính, … nhằm phục vụ cho điều này.

## 3. Những lệnh cơ bản của BeautifulSoup 
- Đầu tiên để gửi requests và lấy thông tin website với đầu vào là url của trang web cần lấy thì ta sử dụng package **Requests**.
  Để import package này ta sử dụng câu lệnh: **import Request** và **page = requests.get().content</code>** 
  
  Câu lệnh đầu tiên để import package requests, cho trình dịch của Python biết mình chuẩn bị sử dụng requests.
  
  Nội dung trả ra của lệnh get().content là dữ liệu HTML tương ứng với đường link url được cung cấp dưới dạng text. Có một số trường hợp ngoại lệ như website sử dụng cloudflare thì việc get sẽ fail, cách khắc phục mình sẽ nói đến ở phần sau 
 - Sau đó chúng ta sẽ load dữ liệu này vào BeautifulSoup bằng câu lệnh: **soup = BeautifulSoup(page, 'html.parser')**
 Đến đây thì chỉ cần truy cập đến thẻ cần lấy và trích xuất dữ liệu cần thiết.
 
 ## 4. Bypass CloudFlare
 Hiện nay có rất nhiều trang web sử dụng cloudflare để ngăn các truy cập đến từ BOT, do đó bạn có thể sẽ gặp lỗi khi sử dụng **request** để lấy dữ liệu. 
 Và một cách khá đơn giản để bỏ qua điều đó là sử dụng package **cfscrape**
 
 **Tài liệu tham khảo:** [Bypass CloudFlare by Cfscrape](https://github.com/Anorov/cloudflare-scrape)
