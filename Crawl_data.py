import json
import os
import cfscrape
from bs4 import BeautifulSoup

#bypass cloudflare
scraper = cfscrape.create_scraper()

def dumpData(data):
    # C:\Users\Duc Phong Phung\Project_1\Crawl_Nettruyen\Crawl_Data_Project1\nettruyenin.json
    path_json = "C:\\Users\\Duc Phong Phung\\Project_1\\Crawl_Nettruyen\\Crawl_Data_Project1\\nettruyenin.json"
    with open(path_json, 'w') as f:
        json.dump(data, f, ensure_ascii = True)
    f.close()

# get all information of item
def getDetailItem(address):
    print("Address: ", address)
    page = BeautifulSoup(scraper.get(address).content, 'html.parser')

    detail = {
        "title": page.find('h1', {"class": "title-detail"}).getText(),
        "image": page.find('main', {"class": "main"}).find('div', {"class": "col-image"}).find('img').attrs['src'],
        "author": page.find('main', {"class": "main"}).find('li', {"class": "author row"}).findAll('p')[1].getText(),
        "status": page.find('main', {"class": "main"}).find('li', {"class": "status row"}).findAll('p')[1].getText(),
        "genres": [x.text for x in page.find('main', {"class": "main"}).find('li', {"class": "kind row"}).findAll('a')],
        }
    episode_list = page.find('main', {"class": "main"}).find('div', {"class": "list-chapter"}).findAll('li')[1:]
    episode_links = []
    for episode in episode_list:
        episode_links.append({
            "name": episode.find('a').text.strip(),
            "link": episode.find('a').attrs['href']
        })

    detail["episodes"] = episode_links

    return detail

# download 1 episode
# def DownloadImages(address, folder): # folder name episode
#     page_soup = BeautifulSoup(scraper.get(address).content, 'html.parser')
#     image_list = page_soup.find('main', {"class": "main"}).find('div', {"class": "reading-detail box_doc"}).findAll('div', {"class": "page-chapter"})
#     images = []
#     for image in image_list:
#         item = {
#             "alt": image.find('img').attrs['alt'],
#             "data-original": image.find('img').attrs['data-original'],
#             "src": image.find('img').attrs['src'],
#             "data-index": image.find('img').attrs['data-index'],
#         }
#         images.append(item)

#         # download to folder:
#         if "http" in item['src'][:5]:
#             download_image(item['alt'], folder, item['src'])
#         else:
#             download_image(item['alt'], folder, "http:"+item['src'])

#     return images

# def download_image(namefile, folder, url):
#     fixed_name = folder+"/" + "".join(x for x in namefile if (x.isalnum() or x=='.' or x == '_' or x == ' '))
#     with open(fixed_name + '.jpg', 'wb') as handle:
#         try:
#             response = scraper.get(url, headers={'referer': 'https://www.nettruyenin.com/'})
#             if not response.ok:
#                 print("Warning response!")
#                 print(response)

#             for block in response.iter_content(1024):
#                 if not block:
#                     break
#                 handle.write(block)
#             handle.close()
#         except Exception as e:
#             print("Exception: ", e)
#             handle.close()
    

# Run once 
def GetItems(index):
    address_sub = "https://www.nettruyenin.com/tim-truyen-nang-cao?page={page_index}"

    if index == 1:
        address = "https://www.nettruyenin.com/tim-truyen-nang-cao"
    else:
        address = address_sub.format(page_index=index)

    items = []
    page = BeautifulSoup(scraper.get(address).content, 'html.parser')
    items_content = page.find('div', {"class": "items"}).findAll('div', {"class": "item"})
    for item in items_content:
        item_info = {
            "link": item.find('div', {"class": "image"}).find('a').attrs['href'],
            "image": item.find('div', {"class": "image"}).find('img').attrs['data-original'],
            "title": item.find('div', {"class": "title"}).text.strip(),
            "description": item.find('div', {"class": "box_text"}).text.strip()
        }

        # download description and detail, list episode link
        item_info["detail"] = getDetailItem(item_info["link"])

        items.append(item_info)
    return items

# Run Once
def getNetTruyenData():
    index = 1
    max_index = 50
    all_items = []
    for index in range(1, max_index+1): 
        try:
            result = GetItems(index)
        except Exception as e:
            continue
        #dump
        all_items.append(result)
    print("So luong truyen: " , len(all_items))
    dumpData(all_items)



if __name__ == '__main__':
    getNetTruyenData()
    
    